document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  });

  // Dark mode toggle
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;
  const icon = darkModeToggle.querySelector('i');

  function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    icon.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
  }

  darkModeToggle.addEventListener('click', toggleDarkMode);

  // Check for saved dark mode preference
  if (localStorage.getItem('darkMode') === 'true') {
    toggleDarkMode();
  }

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

  const skillsMatrix = document.getElementById('skillsMatrix');
  skills.forEach(skill => {
    const skillItem = document.createElement('div');
    skillItem.className = 'col-md-3 col-sm-6 skill-item';
    skillItem.innerHTML = `
            <i class="${skill.icon} skill-icon"></i>
            <h3 class="skill-name">${skill.name}</h3>
            <div class="skill-bar">
                <div class="skill-progress" style="width: 0%"></div>
            </div>
        `;
    skillsMatrix.appendChild(skillItem);
  });

  // Animate skill bars on scroll
  const skillBars = document.querySelectorAll('.skill-progress');
  const animateSkillBars = () => {
    skillBars.forEach((bar, index) => {
      if (isElementInViewport(bar)) {
        setTimeout(() => {
          bar.style.width = `${skills[index].level}%`;
        }, 200 * index);
      }
    });
  };

  window.addEventListener('scroll', animateSkillBars);
  animateSkillBars(); // Initial check

  // Projects
  const projects = [
    { name: "Signal Cyber Cafe", category: "website", image: "./images/Signal Cyber.webp", github: "https://github.com/Jake9953/SIGNAL-CYBER-CAFE", live: "https://signallcybercafe.netlify.app/" },
    { name: "Luclin Enterprise Limited", category: "profile", image: "./images/pro1.webp", pdf: "./company-profiles/profile1.pdf" },
    { name: "Majoph Enterprises Limited", category: "profile", image: "./images/pro2.webp", pdf: "./company-profiles/profile2.pdf" },
    { name: "Jophin Enterprises", category: "profile", image: "./images/pro3.webp", pdf: "./company-profiles/profile3.pdf" },
  ];

  const projectsGrid = document.getElementById('projectsGrid');
  const filterButtons = document.querySelectorAll('.filter-btn');

  const renderProjects = (category = 'all') => {
    projectsGrid.innerHTML = '';
    projects.forEach(project => {
      if (category === 'all' || project.category === category) {
        const projectItem = document.createElement('div');
        projectItem.className = 'col-md-4 mb-4';
        projectItem.innerHTML = `
                    <div class="card project-card">
                        <img src="${project.image}" class="card-img-top" alt="${project.name}" loading="lazy" />
                        <div class="card-body">
                            <h3 class="card-title">${project.name}</h3>
                            <div class="mt-3">
                                ${project.github ? `<a href="${project.github}" class="btn btn-outline-primary me-2" target="_blank" rel="noopener noreferrer">GitHub</a>` : ''}
                                ${project.live ? `<a href="${project.live}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Live Site</a>` : ''}
                                ${project.pdf ? `<a href="${project.pdf}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">View PDF</a>` : ''}
                                ${project.case_study ? `<a href="${project.case_study}" class="btn btn-primary">Case Study</a>` : ''}
                            </div>
                        </div>
                    </div>
                `;
        projectsGrid.appendChild(projectItem);
      }
    });
  };

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      renderProjects(button.getAttribute('data-filter'));
    });
  });

  renderProjects(); // Initial render

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
  new Swiper('.testimonialSwiper', {
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
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  // Blog Posts
  const blogPosts = [
    {
      title: "The Latest in AI",
      date: "October 24, 2024",
      readTime: "6 min",
      excerpt: "Artificial Intelligence (AI) continues to evolve rapidly, bringing innovations and changes that impact various sectors.",
      content: `
                <p><strong>Microsoft and OpenAI Collaboration:</strong> Microsoft recently announced a partnership with OpenAI to develop new AI models and tools. This collaboration aims to advance AI research and democratize access to cutting-edge technologies.</p>
                <p><strong>Zoom AI Companion:</strong> Zoom introduced a new AI-powered feature called the AI Companion. This tool enhances meeting experiences by providing real-time insights, transcriptions, and automated actions.</p>
                <p><strong>Midjourney Image Editor:</strong> Midjourney launched a new tool that leverages AI to enhance image quality and aesthetics. This feature uses advanced algorithms to automatically adjust colors, lighting, and composition.</p>
                <p><strong>Conclusion:</strong> The landscape of AI is constantly evolving, with significant advancements shaping how we interact with technology and each other. Staying informed about these developments is essential as society navigates the opportunities and challenges presented by AI.</p>
            `,
      image: "./images/AI.webp"
    },
    {
      title: "Microsoft Edge's Performance Boost",
      date: "October 24, 2024",
      readTime: "7 min",
      excerpt: "Microsoft Edge has taken major strides to improve its performance by introducing WebUI 2.0, a new architecture designed to make the browser faster, more efficient, and responsive.",
      content: `
                <p>WebUI 2.0 was introduced with the primary goal of improving user interaction, especially on devices with limited resources. The new architecture reduces the amount of JavaScript processed at initialization, significantly speeding up the interface.</p>
                <p>Key improvements include:</p>
                <ul>
                    <li>42% faster overall performance</li>
                    <li>76% faster on lower-end devices</li>
                    <li>40% improvement in Favorites loading time</li>
                </ul>
                <p><strong>Conclusion:</strong> WebUI 2.0 marks a significant step in Microsoft Edge's journey toward blazing-fast performance, benefiting both users and developers.</p>
            `,
      image: "./images/webnews.webp"
    },
    {
      title: "Top Trending Topics in Tech",
      date: "October 24, 2024",
      readTime: "7 min",
      excerpt: "The technology landscape is evolving at an unprecedented pace, with emerging trends poised to transform industries and reshape our daily lives.",
      content: `
                <ol>
                    <li><strong>Artificial Intelligence and Machine Learning</strong></li>
                    <li><strong>Remote Work Technology</strong></li>
                    <li><strong>Blockchain and Decentralized Finance (DeFi)</strong></li>
                    <li><strong>Internet of Things (IoT)</strong></li>
                    <li><strong>Cybersecurity Innovations</strong></li>
                </ol>
                <p><strong>Conclusion:</strong> Staying informed about these advancements is crucial for individuals and businesses looking to leverage technology for growth and innovation.</p>
            `,
      image: "./images/TECH.webp"
    }
  ];

  const blogPostsContainer = document.getElementById('blogPosts');
  blogPosts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.className = 'col-md-4 mb-4';
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

  // Form submission
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    console.log('Form submitted with data:', Object.fromEntries(formData));
    alert('Thank you for your message! We will get back to you soon.');
    form.reset();
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

  // Helper function to check if an element is in viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
});