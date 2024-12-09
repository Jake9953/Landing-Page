document.addEventListener('DOMContentLoaded', () => {
  // Configuration object for all initialization settings
  const CONFIG = {
    aos: {
      duration: 1000,
      once: true,
      offset: 100
    },
    swiper: {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }
    }
  };

  // Initialize AOS
  AOS.init(CONFIG.aos);

  // Initialize Theme Manager
  new ThemeManager();

  // Skills Matrix
  const skills = [
    { name: 'HTML5', level: 90, icon: 'fab fa-html5' },
    { name: 'CSS3', level: 85, icon: 'fab fa-css3-alt' },
    { name: 'JavaScript', level: 80, icon: 'fab fa-js' },
    { name: 'React', level: 75, icon: 'fab fa-react' },
    { name: 'Node.js', level: 70, icon: 'fab fa-node-js' },
    { name: 'UI/UX Design', level: 80, icon: 'fas fa-pencil-ruler' },
    { name: 'SEO', level: 75, icon: 'fas fa-search' }
  ];

  // Initialize Skills
  new SkillsManager(skills);

  // Projects
  const projects = [
    { name: "Signal Cyber Cafe", category: "website", image: "./images/Signal Cyber.webp", github: "https://github.com/Jake9953/SIGNAL-CYBER-CAFE", live: "https://signallcybercafe.netlify.app/" },
    { name: "Luclin Enterprise Limited", category: "profile", image: "./images/pro1.webp", pdf: "./company-profiles/profile1.pdf" },
    { name: "Majoph Enterprises", category: "profile", image: "./images/pro2.webp", pdf: "./company-profiles/profile2.pdf" },
    { name: "Jophin Enterprises", category: "profile", image: "./images/pro3.webp", pdf: "./company-profiles/profile3.pdf" },
  ];

  // Initialize Projects
  new ProjectFilter(projects);

  // Testimonials
  const testimonials = [
    { text: "Jacob's web development skills are top-notch. He created a beautiful and functional website for our business.", author: "Dan, CEO of Signal Cyber Cafe" },
    { text: "Working with Jacob was a pleasure. He's professional, creative, and delivers high-quality work on time.", author: "Derick" },
    { text: "Jacob's attention to detail and professionalism made our company profiles stand out. Highly recommended!", author: "Richard" }
  ];

  const testimonialSlider = document.getElementById('testimonialSlider');
  testimonials.forEach(testimonial => {
    const testimonialItem = document.createElement('div');
    testimonialItem.className = 'swiper-slide';
    testimonialItem.innerHTML = `
      <div class="testimonial-item">
        <p class="testimonial-text">"${testimonial.text}"</p>
        <p class="testimonial-author">- ${testimonial.author}</p>
      </div>
    `;
    testimonialSlider.appendChild(testimonialItem);
  });

  // Initialize Swiper
  new Swiper('.testimonialSwiper', CONFIG.swiper);

  // Blog Posts
  const blogPosts = [
    {
      title: "The Impact of AI on Modern Web Development",
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      readTime: "6 min",
      excerpt: "Exploring how AI tools are revolutionizing web development workflows and code generation.",
      content: `
            <p>The integration of AI in web development has transformed how developers work, bringing both opportunities and challenges. As we move forward in 2024, the impact of AI on web development continues to grow exponentially.</p>

            <h3>1. Code Generation and Assistance</h3>
            <p>AI-powered tools have revolutionized how we write code. GitHub Copilot and similar AI assistants can now:</p>
            <ul>
                <li>Generate entire component structures based on natural language descriptions</li>
                <li>Suggest optimizations for existing code</li>
                <li>Identify potential security vulnerabilities in real-time</li>
                <li>Auto-complete complex code patterns and boilerplate</li>
            </ul>
            <p>However, developers need to maintain a balance between AI assistance and understanding the underlying principles of their code.</p>

            <h3>2. Design Automation</h3>
            <p>AI is transforming the design aspect of web development through:</p>
            <ul>
                <li>Automated responsive design adjustments</li>
                <li>Smart color palette generation based on brand guidelines</li>
                <li>UI component suggestions based on user behavior analysis</li>
                <li>A/B testing automation and optimization</li>
            </ul>
            <p>These advancements are making it possible to create more personalized and effective user experiences.</p>

            <h3>3. Testing and Quality Assurance</h3>
            <p>The testing landscape has evolved with AI integration:</p>
            <ul>
                <li>Automated test case generation based on code changes</li>
                <li>Predictive analytics for potential failure points</li>
                <li>Visual regression testing with AI-powered image comparison</li>
                <li>Performance optimization suggestions based on usage patterns</li>
            </ul>

            <h3>4. Future Implications</h3>
            <p>As AI continues to evolve, we can expect:</p>
            <ul>
                <li>More sophisticated code generation capabilities</li>
                <li>Enhanced debugging and error prediction</li>
                <li>Automated optimization of user experiences</li>
                <li>Greater integration with development workflows</li>
            </ul>

            <p>While AI brings numerous benefits, it's crucial for developers to use these tools as enhancers rather than replacements for fundamental development skills.</p>
        `,
      image: "./images/AI.webp"
    },
    {
      title: "Advanced CSS Techniques for Modern Web Applications",
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      readTime: "7 min",
      excerpt: "Deep dive into advanced CSS techniques that are shaping modern web design.",
      content: `
            <p>Modern CSS has evolved into a powerful language for creating sophisticated web interfaces. Let's explore the most impactful features and techniques that are transforming web development.</p>

            <h3>1. Modern Layout Systems</h3>
            <p>CSS Grid and Flexbox have revolutionized web layouts:</p>
            <ul>
                <li>CSS Grid for complex 2D layouts
                    <ul>
                        <li>Grid templates and areas</li>
                        <li>Auto-fit and auto-fill</li>
                        <li>Masonry layouts</li>
                    </ul>
                </li>
                <li>Flexbox for 1D layouts
                    <ul>
                        <li>Dynamic content distribution</li>
                        <li>Alignment control</li>
                        <li>Responsive design patterns</li>
                    </ul>
                </li>
            </ul>

            <h3>2. Custom Properties and Dynamic Theming</h3>
            <p>CSS variables have transformed how we handle design systems:</p>
            <ul>
                <li>Dynamic theme switching</li>
                <li>Responsive value adaptation</li>
                <li>Component-level customization</li>
                <li>Runtime value manipulation with JavaScript</li>
            </ul>

            <h3>3. Advanced Animations and Transitions</h3>
            <p>Modern CSS animations offer powerful capabilities:</p>
            <ul>
                <li>CSS Custom Properties in animations</li>
                <li>GPU-accelerated transforms</li>
                <li>Scroll-driven animations</li>
                <li>Complex timing functions</li>
            </ul>

            <h3>4. Modern CSS Features</h3>
            <p>Latest CSS features enhancing web development:</p>
            <ul>
                <li>Container Queries for component-level responsiveness</li>
                <li>Cascade Layers for better specificity management</li>
                <li>Subgrid for nested grid alignment</li>
                <li>:has() selector for parent targeting</li>
            </ul>

            <p>These techniques are essential for building modern, maintainable, and performant web applications.</p>
        `
      ,
      image: "./images/webdev.webp"
    },
    {
      title: "Full-Stack Development Trends and Best Practices in 2024",
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      readTime: "7 min",
      excerpt: "Comprehensive guide to current full-stack development practices and emerging trends.",
      content: `
            <p>The landscape of full-stack development continues to evolve rapidly. Understanding current trends and best practices is crucial for building modern applications.</p>

            <h3>1. Modern Architecture Patterns</h3>
            <p>Current architectural approaches focus on:</p>
            <ul>
                <li>Microservices Architecture
                    <ul>
                        <li>Service isolation and scaling</li>
                        <li>Independent deployment</li>
                        <li>Technology agnostic services</li>
                    </ul>
                </li>
                <li>Serverless Computing
                    <ul>
                        <li>Function-as-a-Service (FaaS)</li>
                        <li>Event-driven architecture</li>
                        <li>Cost optimization</li>
                    </ul>
                </li>
            </ul>

            <h3>2. Frontend Development</h3>
            <p>Modern frontend development emphasizes:</p>
            <ul>
                <li>Framework Evolution
                    <ul>
                        <li>React Server Components</li>
                        <li>Vue 3 Composition API</li>
                        <li>Angular Signals</li>
                    </ul>
                </li>
                <li>Performance Optimization
                    <ul>
                        <li>Core Web Vitals</li>
                        <li>Bundle optimization</li>
                        <li>Progressive enhancement</li>
                    </ul>
                </li>
            </ul>

            <h3>3. Backend Technologies</h3>
            <p>Backend development focuses on:</p>
            <ul>
                <li>API Design
                    GraphQL adoption</li>
                        <li>REST best practices</li>
                        <li>API security</li>
                    </ul>
                </li>
                <li>Database Solutions
                    <ul>
                        <li>NoSQL scalability</li>
                        <li>NewSQL capabilities</li>
                        <li>Data modeling patterns</li>
                    </ul>
                </li>
            </ul>

            <h3>4. DevOps Integration</h3>
            <p>Essential DevOps practices include:</p>
            <ul>
                <li>Continuous Integration/Deployment</li>
                <li>Infrastructure as Code</li>
                <li>Monitoring and Observability</li>
                <li>Security Integration (DevSecOps)</li>
            </ul>

            <p>Success in full-stack development requires keeping up with these evolving practices while maintaining code quality and performance.</p>
        `
      ,
      image: "./images/webnews.webp"
    }
  ];



  const blogPostsContainer = document.getElementById('blogPosts');
  blogPosts.forEach((post, index) => {
    const postElement = document.createElement('div');
    postElement.className = 'col-md-4 mb-4';
    postElement.setAttribute('data-aos', 'fade-up');
    postElement.setAttribute('data-aos-delay', index * 100);
    postElement.innerHTML = `
      <div class="card blog-card">
        <img src="${post.image}" class="card-img-top" alt="${post.title}" loading="lazy" />
        <div class="card-body">
          <h3 class="card-title">${post.title}</h3>
          <p class="card-text">
            <small class="text-muted">Posted on: ${post.date} | Read time: ${post.readTime}</small>
          </p>
          <p class="card-text">${post.excerpt}</p>
          <button class="btn btn-primary read-more-btn" data-bs-toggle="modal" data-bs-target="#blogModal" data-title="${post.title}" data-content="${encodeURIComponent(post.content)}">
            Read More
          </button>
        </div>
      </div>
    `;
    blogPostsContainer.appendChild(postElement);
  });

  // Blog Modal
  const blogModal = document.getElementById('blogModal');
  if (!blogModal) {
    const modalElement = document.createElement('div');
    modalElement.className = 'modal fade';
    modalElement.id = 'blogModal';
    modalElement.tabIndex = '-1';
    modalElement.setAttribute('aria-labelledby', 'blogModalLabel');
    modalElement.setAttribute('aria-hidden', 'true');
    modalElement.innerHTML = `
      <div class="modal-dialog modal-dialog-scrollable modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="blogModalLabel"></h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body"></div>
        </div>
      </div>
    `;
    document.body.appendChild(modalElement);
  }

  const modal = new bootstrap.Modal(document.getElementById('blogModal'));
  document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', function () {
      const title = this.getAttribute('data-title');
      const content = decodeURIComponent(this.getAttribute('data-content'));
      document.getElementById('blogModalLabel').textContent = title;
      document.querySelector('#blogModal .modal-body').innerHTML = content;
      modal.show();
    });
  });

  // Back to top button
  const backToTopButton = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Initialize smooth scroll
  initSmoothScroll();

  // Initialize form handler
  initFormHandler();
});

// Utility Functions
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href'))?.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}

function initFormHandler() {
  const form = document.getElementById('contact-form');
  form?.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    // Add your form submission logic here
    console.log('Form submitted:', Object.fromEntries(formData));
    alert('Thank you for your message! We will get back to you soon.');
    form.reset();
  });
}

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

class ThemeManager {
  constructor() {
    this.darkModeToggle = document.getElementById('darkModeToggle');
    this.body = document.body;
    this.icon = this.darkModeToggle?.querySelector('i');
    this.init();
  }

  init() {
    if (!this.darkModeToggle) return;

    // Check saved preference
    const darkMode = localStorage.getItem('darkMode') === 'enabled';
    if (darkMode) this.enableDarkMode();

    // Add event listener
    this.darkModeToggle.addEventListener('click', () => this.toggleDarkMode());
  }

  toggleDarkMode() {
    if (this.body.classList.contains('dark-mode')) {
      this.disableDarkMode();
    } else {
      this.enableDarkMode();
    }
    }

  enableDarkMode() {
    this.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    this.icon?.classList.replace('fa-moon', 'fa-sun');
  }

  disableDarkMode() {
    this.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', null);
    this.icon?.classList.replace('fa-sun', 'fa-moon');
  }
}

class SkillsManager {
  constructor(skills) {
    this.skills = skills;
    this.skillsMatrix = document.getElementById('skillsMatrix');
    this.skillBars = [];
    this.init();
  }

  init() {
    if (!this.skillsMatrix) return;
    this.renderSkills();
    this.initializeObserver();
  }

  renderSkills() {
    this.skills.forEach((skill, index) => {
      const skillItem = this.createSkillItem(skill, index);
      this.skillsMatrix.appendChild(skillItem);
      this.skillBars.push(skillItem.querySelector('.skill-progress'));
    });
  }

  createSkillItem(skill, index) {
    const div = document.createElement('div');
    div.className = 'col-md-3 col-sm-6 skill-item';
    div.setAttribute('data-aos', 'fade-up');
    div.setAttribute('data-aos-delay', index * 100);
    div.innerHTML = `
            <i class="${skill.icon} skill-icon"></i>
            <h3 class="skill-name">${skill.name}</h3>
            <div class="skill-bar">
                <div class="skill-progress" style="width: 0%"></div>
            </div>
        `;
    return div;
  }

  initializeObserver() {
    const observer = new IntersectionObserver(
      (entries) => this.handleIntersection(entries),
      { threshold: 0.1 }
    );

    this.skillBars.forEach(bar => observer.observe(bar));
  }

  handleIntersection(entries) {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.width = `${this.skills[index].level}%`;
        }, 200 * index);
      }
    });
  }
}

class ProjectFilter {
  constructor(projects) {
    this.projects = projects;
    this.grid = document.getElementById('projectsGrid');
    this.filterButtons = document.querySelectorAll('.filter-btn');
    this.init();
  }

  init() {
    if (!this.grid) return;
    this.addEventListeners();
    this.renderProjects();
  }

  addEventListeners() {
    this.filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        this.filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        this.renderProjects(button.getAttribute('data-filter'));
      });
    });
  }

  renderProjects(category = 'all') {
    this.grid.innerHTML = '';
    this.projects
      .filter(project => category === 'all' || project.category === category)
      .forEach((project, index) => {
        const projectItem = this.createProjectItem(project, index);
        this.grid.appendChild(projectItem);
      });
  }

  createProjectItem(project, index) {
    const div = document.createElement('div');
    div.className = 'col-md-4 mb-4';
    div.setAttribute('data-aos', 'fade-up');
    div.setAttribute('data-aos-delay', index * 100);
    div.innerHTML = `
            <div class="card project-card">
                <img src="${project.image}" class="card-img-top" alt="${project.name}" loading="lazy" />
                <div class="card-body">
                    <h3 class="card-title">${project.name}</h3>
                    <div class="mt-3">
                        ${project.github ? `<a href="${project.github}" class="btn btn-outline-primary me-2" target="_blank" rel="noopener noreferrer">GitHub</a>` : ''}
                        ${project.live ? `<a href="${project.live}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Live Site</a>` : ''}
                        ${project.pdf ? `<a href="${project.pdf}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">View PDF</a>` : ''}
                    </div>
                </div>
            </div>
        `;
    return div;
  }
}