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
    {
      id: 1,
      title: "The Future of AI in Web Development",
      category: "ai-news",
      date: "2024-03-18",
      readTime: "7 min read",
      content: `Artificial Intelligence is revolutionizing the way we approach web development. From intelligent code completion to automated testing and deployment, AI is streamlining processes and enhancing developer productivity. One of the most exciting developments is the use of machine learning algorithms to create more personalized user experiences. These algorithms can analyze user behavior and preferences to dynamically adjust website content and layout in real-time.

    Another area where AI is making significant strides is in accessibility. AI-powered tools can now automatically generate alt text for images, create captions for videos, and even suggest improvements to make websites more accessible to users with disabilities. This not only improves the user experience for a wider audience but also helps companies comply with accessibility regulations more easily.

    Looking ahead, we can expect to see AI playing a crucial role in predictive maintenance for websites. By analyzing traffic patterns and server logs, AI systems can predict potential issues before they occur, allowing developers to take proactive measures to ensure optimal website performance and uptime.

    However, as AI becomes more prevalent in web development, it's important to consider the ethical implications. Developers need to be mindful of potential biases in AI algorithms and ensure that the use of AI doesn't compromise user privacy or security. As we move forward, finding the right balance between leveraging AI capabilities and maintaining human oversight will be crucial.

    In conclusion, the integration of AI in web development is not just a trend, but a fundamental shift in how we create and maintain websites. As developers, staying informed about these advancements and learning to work alongside AI tools will be key to success in the evolving landscape of web development.`
    },
    {
      id: 2,
      title: "Mastering CSS Grid: A Comprehensive Guide",
      category: "web-development",
      date: "2024-03-20",
      readTime: "6 min read",
      content: `CSS Grid has revolutionized the way we approach layout design in web development. This powerful tool allows for complex, two-dimensional layouts that were previously difficult or impossible to achieve with older CSS techniques. In this comprehensive guide, we'll explore the key concepts of CSS Grid and how to leverage its full potential.

    First, let's start with the basics. To create a grid container, you simply need to set display: grid; on an element. From there, you can define your grid's structure using properties like grid-template-columns and grid-template-rows. For example:

    .container {
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
      grid-template-rows: auto;
    }

    This creates a three-column grid where the middle column is twice as wide as the outer columns. The 'fr' unit represents a fraction of the available space, making it easy to create flexible, responsive layouts.

    One of the most powerful features of CSS Grid is the ability to precisely place items within the grid. You can use properties like grid-column and grid-row on grid items to control their placement:

    .item {
      grid-column: 2 / 4;
      grid-row: 1 / 3;
    }

    This places the item from the second to the fourth column line, and from the first to the third row line.

    CSS Grid also introduces the concept of grid areas, which allow you to name sections of your grid and place items within them. This can make your code more readable and easier to maintain:

    .container {
      grid-template-areas:
        "header header header"
        "sidebar main main"
        "footer footer footer";
    }

    .header { grid-area: header; }
    .sidebar { grid-area: sidebar; }
    .main { grid-area: main; }
    .footer { grid-area: footer; }

    As you become more comfortable with CSS Grid, you'll discover its flexibility in creating responsive designs. By combining Grid with media queries, you can easily adjust your layout for different screen sizes without changing your HTML structure.

    In conclusion, mastering CSS Grid opens up a world of possibilities for creating complex, flexible layouts. As you continue to explore and experiment with Grid, you'll find it an invaluable tool in your web development toolkit.`
    },
    {
      id: 3,
      title: "The Impact of 5G on Web Applications",
      category: "trending-topics",
      date: "2024-03-22",
      readTime: "6 min read",
      content: `The rollout of 5G networks is set to revolutionize the way we interact with web applications. With speeds up to 100 times faster than 4G and significantly reduced latency, 5G is opening up new possibilities for web developers and users alike. Let's explore how this technology is shaping the future of web applications.

    One of the most immediate impacts of 5G will be on the performance of web applications. Faster download and upload speeds mean that web apps can handle larger amounts of data more quickly. This enables more complex, data-intensive applications to run smoothly on mobile devices. For example, high-quality video streaming, augmented reality (AR) experiences, and real-time collaboration tools will become more accessible and performant on mobile devices.

    The reduced latency of 5G networks also has significant implications for web applications. With latency as low as 1 millisecond, real-time interactions become truly instantaneous. This is particularly exciting for applications that require immediate feedback, such as online gaming, virtual reality (VR) experiences, and remote control systems. Web developers can now design applications with near-instantaneous responsiveness, creating more engaging and immersive user experiences.

    5G's improved network reliability and capacity also mean that web applications can handle more concurrent users without performance degradation. This is particularly beneficial for applications that rely on real-time data processing and distribution, such as live event streaming platforms or large-scale multiplayer games.

    Another exciting prospect is the potential for edge computing in conjunction with 5G networks. By processing data closer to the user, edge computing can further reduce latency and improve performance. This could lead to more sophisticated web applications that can handle complex computations client-side, reducing the load on central servers and improving overall system efficiency.

    However, the advent of 5G also presents new challenges for web developers. With the potential for much higher data transfer rates, developers need to be mindful of data usage and optimize their applications accordingly. This might involve implementing more efficient data compression techniques or designing adaptive applications that can scale their data usage based on the available network speed.

    In conclusion, 5G technology is set to transform the landscape of web applications, enabling more powerful, responsive, and immersive experiences. As web developers, it's crucial to stay informed about these advancements and consider how we can leverage 5G capabilities to create the next generation of web applications.`
    }
  ];

  function renderBlogPosts(posts) {
    blogPostsContainer.innerHTML = '';
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('blog-post');
      postElement.innerHTML = `
                <img src="https://cdn.pixabay.com/photo/2024/06/01/14/00/ai-8802304_1280.jpg" alt="${post.title}" class="blog-post-image">
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