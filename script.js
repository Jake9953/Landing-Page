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
      title: "The Rise of AI-Powered Web Development: Revolutionizing the Digital Landscape",
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      readTime: "7 min",
      excerpt: "Discover how artificial intelligence is transforming web development, from automated coding to personalized user experiences, and what it means for the future of the industry.",
      content: `
        <p>Artificial Intelligence (AI) is rapidly changing the landscape of web development, offering unprecedented opportunities for innovation and efficiency. This transformative technology is not just a buzzword; it's actively reshaping how websites are built, optimized, and maintained.</p>
        <h3>1. AI-Powered Code Generation</h3>
        <p>One of the most exciting developments is the emergence of AI tools that can generate code based on natural language descriptions. These tools are becoming increasingly sophisticated, capable of creating entire web components or even full pages with minimal human input.</p>
        <h3>2. Intelligent Design Systems</h3>
        <p>AI is revolutionizing web design by creating and maintaining adaptive design systems. These systems can automatically adjust to brand guidelines and user preferences, ensuring consistency across platforms while providing personalized experiences.</p>
        <h3>3. Enhanced User Experiences</h3>
        <p>Machine learning algorithms are enabling websites to offer highly personalized experiences. By analyzing user behavior, AI can adjust content, layout, and functionality in real-time, creating a more engaging and relevant experience for each visitor.</p>
        <p>As we move forward, staying informed about AI advancements and integrating these technologies into web development workflows will be crucial for developers looking to stay competitive in an ever-evolving digital landscape.</p>
      `,
      image: "./images/AI.webp"
    },
    {
      title: "The Future of Web Performance: Optimizing for Speed and User Experience",
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      readTime: "7 min",
      excerpt: "Explore cutting-edge techniques and best practices for boosting web performance, enhancing user experience, and staying ahead in the fast-paced world of web development.",
      content: `
        <p>In today's digital landscape, web performance is more critical than ever. Users expect lightning-fast load times and smooth interactions, regardless of their device or network conditions. This article delves into the latest strategies for optimizing web performance and enhancing user experience.</p>
        <h3>1. Core Web Vitals and User-Centric Metrics</h3>
        <p>Google's Core Web Vitals have become a crucial benchmark for measuring user experience. We'll explore how to optimize for Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS) to ensure your website meets modern performance standards.</p>
        <h3>2. Advanced Caching Strategies</h3>
        <p>Implementing sophisticated caching techniques can significantly improve load times and reduce server load. We'll discuss strategies like service workers, cache-first approaches, and intelligent preloading to create near-instantaneous experiences for returning visitors.</p>
        <h3>3. Next-Generation Image and Video Optimization</h3>
        <p>Visual content often accounts for the majority of a webpage's weight. Learn about new image formats like WebP and AVIF, as well as adaptive streaming techniques for video, to deliver high-quality media with minimal bandwidth usage.</p>
        <p>By focusing on these advanced performance optimization techniques, developers can create web experiences that not only meet but exceed user expectations, leading to higher engagement, improved conversions, and better overall success for web projects.</p>
      `,
      image: "./images/webnews.webp"
    },
    {
      title: "Securing the Modern Web: Essential Cybersecurity Practices for Developers",
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      readTime: "7 min",
      excerpt: "Learn about the latest cybersecurity threats facing web applications and the essential practices developers must adopt to build secure, resilient websites in an increasingly hostile digital environment.",
      content: `
        <p>As web applications become more complex and handle increasingly sensitive data, the importance of robust cybersecurity practices cannot be overstated. This article explores the critical security measures that modern web developers must implement to protect their applications and users.</p>
        <h3>1. Shift-Left Security: Integrating Security into the Development Process</h3>
        <p>We'll discuss the concept of "shift-left" security and how to integrate security practices early in the development lifecycle. This includes using static and dynamic analysis tools, conducting regular code reviews, and fostering a security-first culture within development teams.</p>
        <h3>2. Advanced Authentication and Authorization Techniques</h3>
        <p>Beyond basic password protection, we'll explore advanced authentication methods such as multi-factor authentication (MFA), biometrics, and risk-based authentication. We'll also delve into implementing robust authorization systems to ensure users can only access appropriate resources.</p>
        <h3>3. Protecting Against Emerging Threats</h3>
        <p>The threat landscape is constantly evolving. Learn about the latest attack vectors, such as API vulnerabilities, serverless security challenges, and supply chain attacks. We'll provide strategies for staying ahead of these threats and maintaining the integrity of your web applications.</p>
        <p>By adopting these advanced security practices, developers can create web applications that are not only feature-rich and performant but also resilient against the ever-growing array of cyber threats in today's digital world.</p>
      `,
      image: "./images/TECH.webp"
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