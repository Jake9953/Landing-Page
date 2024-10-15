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
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });

  // Form submission
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    // Here you would typically send the form data to a server
    // For this example, we'll just log it to the console
    const formData = new FormData(form);
    console.log('Form submitted with data:', Object.fromEntries(formData));
    alert('Thank you for your message! We will get back to you soon.');
    form.reset();
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

  // Sample blog post data (replace with your actual data or API call)
  const blogPosts = [
    { id: 1, title: 'Introduction to AI', category: 'ai-news', excerpt: 'Learn about the basics of Artificial Intelligence...', date: '2024-03-15', readingTime: '5 min' },
    { id: 2, title: 'CSS Grid Layout', category: 'web-development', excerpt: 'Master CSS Grid for responsive web design...', date: '2024-03-14', readingTime: '7 min' },
    { id: 3, title: '5G Technology', category: 'trending-topics', excerpt: 'Exploring the impact of 5G on various industries...', date: '2024-03-13', readingTime: '6 min' },
    // Add more blog posts here
  ];

  function renderBlogPosts(posts) {
    blogPostsContainer.innerHTML = '';
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('blog-post');
      postElement.innerHTML = `
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-KHeAmpyt0hldKOeZwajz5RPo8Lg4av.svg" alt="${post.title}" class="blog-post-image">
                <div class="blog-post-content">
                    <h3 class="blog-post-title">${post.title}</h3>
                    <p class="blog-post-excerpt">${post.excerpt}</p>
                    <div class="blog-post-meta">
                        <span>${post.date}</span>
                        <span>${post.readingTime} read</span>
                    </div>
                </div>
            `;
      blogPostsContainer.appendChild(postElement);
    });
  }

  function filterPosts() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredPosts = blogPosts.filter(post =>
      (currentCategory === 'all' || post.category === currentCategory) &&
      (post.title.toLowerCase().includes(searchTerm) || post.excerpt.toLowerCase().includes(searchTerm))
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

  // Initial render of blog posts
  filterPosts();
});