function shouldPublishPost(postDate) {
  const today = new Date();
  const publishDate = new Date(postDate);

  // Check if the post date is today or in the past
  if (publishDate > today) {
    return false;
  }

  // Check if the post date is a Monday, Wednesday, or Friday
  const day = publishDate.getDay();
  return day === 1 || day === 3 || day === 5;
}

document.addEventListener('DOMContentLoaded', function () {
  // Initialize AOS
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Navbar color change on scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('navbar-scrolled', window.scrollY > 50);
  });

  // Form submission
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    console.log('Form submitted with data:', Object.fromEntries(formData));
    alert('Thank you for your message! We will get back to you soon.');
    form.reset();
  });

  // Toggle read more content
  document.querySelectorAll('.read-more-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const articleId = this.getAttribute('data-article');
      const cardBack = document.getElementById(articleId);
      cardBack.classList.toggle('visible');
    });
  });

  // Blog functionality
  const blogPostsContainer = document.querySelector('.blog-posts-container');
  const categoryTabs = document.querySelectorAll('.category-tab');
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');
  const loadMoreButton = document.getElementById('load-more-button');

  let currentCategory = 'all';
  let currentPage = 1;
  const postsPerPage = 6;

  const blogPosts = [
    // Blog posts data
  ];

  function renderBlogPosts(posts) {
    blogPostsContainer.innerHTML = '';
    posts.forEach(post => {
      const postElement = document.createElement('article');
      postElement.classList.add('blog-post');
      postElement.innerHTML = `
        <img src="https://cdn.pixabay.com/photo/2024/06/01/14/00/ai-8802304_1280.jpg" alt="${post.title}" class="blog-post-image">
        <div class="blog-post-content">
          <h3 class="blog-post-title">${post.title}</h3>
          <p class="blog-post-excerpt">${post.content.substring(0, 150)}...</p>
          <div class="blog-post-meta">
            <span>${post.date}</span>
            <span>${post.readTime}</span>
          </div>
        </div>
      `;
      blogPostsContainer.appendChild(postElement);
    });
  }

  function filterPosts() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredPosts = blogPosts.filter(post =>
      shouldPublishPost(post.date) &&
      (currentCategory === 'all' || post.category === currentCategory) &&
      (post.title.toLowerCase().includes(searchTerm) || post.content.toLowerCase().includes(searchTerm))
    );
    renderBlogPosts(filteredPosts.slice(0, currentPage * postsPerPage));
    loadMoreButton.style.display = filteredPosts.length > currentPage * postsPerPage ? 'block' : 'none';
  }

  categoryTabs.forEach(tab => {
    tab.addEventListener('click', function () {
      categoryTabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      currentCategory = this.dataset.category;
      currentPage = 1;
      filterPosts();
    });
  });

  searchButton.addEventListener('click', function () {
    currentPage = 1;
    filterPosts();
  });

  searchInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      currentPage = 1;
      filterPosts();
    }
  });

  loadMoreButton.addEventListener('click', function () {
    currentPage++;
    filterPosts();
  });

  filterPosts(); // Initial call to display posts
});
