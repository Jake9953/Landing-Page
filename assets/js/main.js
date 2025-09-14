/**
 * Jacob Wambua Portfolio - Enhanced JavaScript
 * Mobile-first responsive portfolio with accessibility features
 * @version 2.0.0
 */

'use strict';

// ==========================================================================
// CONFIGURATION & CONSTANTS
// ==========================================================================

const CONFIG = {
  aos: {
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 100,
    disable: 'mobile'
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
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    },
    a11y: {
      enabled: true,
      prevSlideMessage: 'Previous testimonial',
      nextSlideMessage: 'Next testimonial',
    }
  },
  breakpoints: {
    mobile: 768,
    tablet: 1024,
    desktop: 1200
  }
};

// Skills data with improved organization
const SKILLS_DATA = [
  { 
    name: 'HTML5', 
    level: 95, 
    icon: 'fab fa-html5',
    category: 'frontend',
    description: 'Semantic markup and accessibility'
  },
  { 
    name: 'CSS3', 
    level: 90, 
    icon: 'fab fa-css3-alt',
    category: 'frontend',
    description: 'Modern layouts and animations'
  },
  { 
    name: 'JavaScript', 
    level: 85, 
    icon: 'fab fa-js',
    category: 'frontend',
    description: 'ES6+ and modern frameworks'
  },
  { 
    name: 'React', 
    level: 80, 
    icon: 'fab fa-react',
    category: 'frontend',
    description: 'Component-based development'
  },
  { 
    name: 'Node.js', 
    level: 75, 
    icon: 'fab fa-node-js',
    category: 'backend',
    description: 'Server-side JavaScript'
  },
  { 
    name: 'UI/UX Design', 
    level: 85, 
    icon: 'fas fa-pencil-ruler',
    category: 'design',
    description: 'User-centered design principles'
  },
  { 
    name: 'SEO', 
    level: 80, 
    icon: 'fas fa-search',
    category: 'marketing',
    description: 'Search engine optimization'
  },
  { 
    name: 'Git/GitHub', 
    level: 85, 
    icon: 'fab fa-git-alt',
    category: 'tools',
    description: 'Version control and collaboration'
  }
];

// Projects data with enhanced information
const PROJECTS_DATA = [
  { 
    name: "Signal Cyber Cafe", 
    category: "website", 
    image: "./images/Signal Cyber.webp",
    description: "Modern cyber cafe website with booking system and responsive design.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    github: "https://github.com/Jake9953/SIGNAL-CYBER-CAFE", 
    live: "https://signallcybercafe.netlify.app/",
    featured: true
  },
  { 
    name: "Luclin Enterprise Limited", 
    category: "profile", 
    image: "./images/pro1.webp",
    description: "Comprehensive company profile showcasing business capabilities and services.",
    technologies: ["Adobe InDesign", "Photoshop"],
    pdf: "./profiles/profile1.pdf"
  },
  { 
    name: "Majoph Enterprises", 
    category: "profile", 
    image: "./images/pro2.webp",
    description: "Professional business profile with modern design and clear value proposition.",
    technologies: ["Adobe InDesign", "Illustrator"],
    pdf: "./profiles/profile2.pdf"
  },
  { 
    name: "Jophin Enterprises", 
    category: "profile", 
    image: "./images/pro3.webp",
    description: "Corporate profile highlighting company strengths and market position.",
    technologies: ["Adobe Creative Suite"],
    pdf: "./profiles/profile3.pdf"
  },
  { 
    name: "Learning Management System", 
    category: "website", 
    image: "./images/Dashboard.jpeg",
    description: "Full-stack student management system with authentication and dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    protected: true, 
    url: "https://class-management-system-ashen.vercel.app/", 
    password: "Jake123",
    featured: true
  }
];

// Testimonials data
const TESTIMONIALS_DATA = [
  { 
    text: "Jacob's web development skills are exceptional. He created a beautiful and functional website that exceeded our expectations.", 
    author: "Dan", 
    position: "CEO", 
    company: "Signal Cyber Cafe",
    rating: 5
  },
  { 
    text: "Working with Jacob was a pleasure. He's professional, creative, and delivers high-quality work on time every time.", 
    author: "Derick",
    position: "Business Owner",
    company: "Tech Solutions",
    rating: 5
  },
  { 
    text: "Jacob's attention to detail and professionalism made our company profiles stand out. Highly recommended for any business!", 
    author: "Richard",
    position: "Director",
    company: "Corporate Services",
    rating: 5
  }
];

// ==========================================================================
// UTILITY FUNCTIONS
// ==========================================================================

/**
 * Debounce function for performance optimization
 */
function debounce(func, wait, immediate) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func(...args);
  };
}

/**
 * Check if element is in viewport
 */
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Get current viewport size
 */
function getViewportSize() {
  const width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  if (width < CONFIG.breakpoints.mobile) return 'mobile';
  if (width < CONFIG.breakpoints.tablet) return 'tablet';
  return 'desktop';
}

/**
 * Animate counter
 */
function animateCounter(element, target, duration = 2000) {
  const start = performance.now();
  const startValue = 0;
  
  function updateCounter(currentTime) {
    const elapsed = currentTime - start;
    const progress = Math.min(elapsed / duration, 1);
    const currentValue = Math.floor(startValue + (target - startValue) * progress);
    
    element.textContent = currentValue;
    
    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    }
  }
  
  requestAnimationFrame(updateCounter);
}

/**
 * Show notification
 */
function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}" aria-hidden="true"></i>
      <span>${message}</span>
      <button class="notification-close" aria-label="Close notification">
        <i class="fas fa-times" aria-hidden="true"></i>
      </button>
    </div>
  `;
  
  document.body.appendChild(notification);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.remove();
  }, 5000);
  
  // Manual close
  notification.querySelector('.notification-close').addEventListener('click', () => {
    notification.remove();
  });
}

// ==========================================================================
// THEME MANAGER CLASS
// ==========================================================================

class ThemeManager {
  constructor() {
    this.darkModeToggle = document.getElementById('darkModeToggle');
    this.body = document.body;
    this.icon = this.darkModeToggle?.querySelector('i');
    this.storageKey = 'portfolio-dark-mode';
    this.init();
  }

  init() {
    if (!this.darkModeToggle) return;

    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem(this.storageKey);
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'enabled' || (!savedTheme && systemPrefersDark)) {
      this.enableDarkMode();
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(this.storageKey)) {
        if (e.matches) {
          this.enableDarkMode();
        } else {
          this.disableDarkMode();
        }
      }
    });

    // Add event listener
    this.darkModeToggle.addEventListener('click', () => this.toggleDarkMode());
    
    // Keyboard accessibility
    this.darkModeToggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.toggleDarkMode();
      }
    });
  }

  toggleDarkMode() {
    if (this.body.classList.contains('dark-mode')) {
      this.disableDarkMode();
    } else {
      this.enableDarkMode();
    }
    
    // Announce to screen readers
    const mode = this.body.classList.contains('dark-mode') ? 'dark' : 'light';
    this.announceThemeChange(mode);
  }

  enableDarkMode() {
    this.body.classList.add('dark-mode');
    localStorage.setItem(this.storageKey, 'enabled');
    this.icon?.classList.replace('fa-moon', 'fa-sun');
    this.darkModeToggle?.setAttribute('aria-label', 'Switch to light mode');
  }

  disableDarkMode() {
    this.body.classList.remove('dark-mode');
    localStorage.setItem(this.storageKey, 'disabled');
    this.icon?.classList.replace('fa-sun', 'fa-moon');
    this.darkModeToggle?.setAttribute('aria-label', 'Switch to dark mode');
  }

  announceThemeChange(mode) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = `Switched to ${mode} mode`;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }
}

// ==========================================================================
// SKILLS MANAGER CLASS
// ==========================================================================

class SkillsManager {
  constructor(skills) {
    this.skills = skills;
    this.skillsMatrix = document.getElementById('skillsMatrix');
    this.skillBars = [];
    this.hasAnimated = false;
    this.init();
  }

  init() {
    if (!this.skillsMatrix) return;

    // Check if skills are already rendered to prevent duplication
    if (this.skillsMatrix.children.length > 0) {
      console.warn('Skills already rendered, skipping re-render');
      return;
    }

    this.renderSkills();
    this.initializeObserver();
  }

  renderSkills() {
    this.skills.forEach((skill, index) => {
      const skillItem = this.createSkillItem(skill, index);
      this.skillsMatrix.appendChild(skillItem);
      this.skillBars.push({
        element: skillItem.querySelector('.skill-progress'),
        level: skill.level
      });
    });
  }

  createSkillItem(skill, index) {
    const div = document.createElement('div');
    div.className = 'col-sm-6 col-md-4 col-lg-3';
    div.setAttribute('data-aos', 'fade-up');
    div.setAttribute('data-aos-delay', index * 100);
    
    div.innerHTML = `
      <div class="skill-item">
        <i class="${skill.icon} skill-icon" aria-hidden="true"></i>
        <h3 class="skill-name">${skill.name}</h3>
        <p class="skill-description">${skill.description}</p>
        <div class="skill-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" aria-label="${skill.name} skill level">
          <div class="skill-progress" style="width: 0%"></div>
        </div>
        <span class="skill-percentage" aria-live="polite">0%</span>
      </div>
    `;
    return div;
  }

  initializeObserver() {
    const observer = new IntersectionObserver(
      (entries) => this.handleIntersection(entries),
      { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
    );

    if (this.skillsMatrix) {
      observer.observe(this.skillsMatrix);
    }
  }

  handleIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !this.hasAnimated) {
        this.animateSkills();
        this.hasAnimated = true;
      }
    });
  }

  animateSkills() {
    this.skillBars.forEach((skillBar, index) => {
      setTimeout(() => {
        const progressElement = skillBar.element;
        const progressBar = progressElement.parentElement;
        const percentageElement = progressElement.parentElement.nextElementSibling;
        
        // Animate the bar
        progressElement.style.width = `${skillBar.level}%`;
        
        // Update ARIA attributes
        progressBar.setAttribute('aria-valuenow', skillBar.level);
        
        // Animate the percentage counter
        animateCounter(
          { textContent: '' }, 
          skillBar.level, 
          1500
        );
        
        // Update percentage display
        let currentPercentage = 0;
        const increment = skillBar.level / 30; // 30 frames for smooth animation
        const timer = setInterval(() => {
          currentPercentage += increment;
          if (currentPercentage >= skillBar.level) {
            currentPercentage = skillBar.level;
            clearInterval(timer);
          }
          percentageElement.textContent = `${Math.round(currentPercentage)}%`;
        }, 50);
        
      }, index * 150);
    });
  }
}

// ==========================================================================
// PROJECT FILTER CLASS
// ==========================================================================

class ProjectFilter {
  constructor(projects) {
    this.projects = projects;
    this.grid = document.getElementById('projectsGrid');
    this.filterButtons = document.querySelectorAll('.filter-btn');
    this.currentFilter = 'all';
    this.init();
  }

  init() {
    if (!this.grid) return;
    this.addEventListeners();
    this.renderProjects();
  }

  addEventListeners() {
    this.filterButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = button.getAttribute('data-filter');
        this.setActiveFilter(button, filter);
        this.renderProjects(filter);
      });
      
      // Keyboard accessibility
      button.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          button.click();
        }
      });
    });
  }

  setActiveFilter(activeButton, filter) {
    this.filterButtons.forEach(btn => {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
    });
    activeButton.classList.add('active');
    activeButton.setAttribute('aria-pressed', 'true');
    this.currentFilter = filter;
  }

  renderProjects(category = 'all') {
    const filteredProjects = this.projects.filter(project => 
      category === 'all' || project.category === category
    );

    // Fade out current projects
    this.grid.style.opacity = '0.5';
    
    setTimeout(() => {
      this.grid.innerHTML = '';
      
      if (filteredProjects.length === 0) {
        this.grid.innerHTML = `
          <div class="col-12 text-center">
            <p class="lead">No projects found in this category.</p>
          </div>
        `;
      } else {
        filteredProjects.forEach((project, index) => {
          const projectItem = this.createProjectItem(project, index);
          this.grid.appendChild(projectItem);
        });
      }
      
      // Fade in new projects
      this.grid.style.opacity = '1';
      
      // Announce to screen readers
      this.announceFilterChange(filteredProjects.length, category);
    }, 300);
  }

  createProjectItem(project, index) {
    const div = document.createElement('div');
    div.className = 'col-md-6 col-lg-4';
    div.setAttribute('data-aos', 'fade-up');
    div.setAttribute('data-aos-delay', index * 100);

    const featuredBadge = project.featured ? 
      '<span class="badge badge-featured">Featured</span>' : '';

    const techStack = project.technologies ? 
      `<div class="tech-stack">
        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
      </div>` : '';

    let projectButtons = '';

    // Handle GitHub button
    if (project.github) {
      projectButtons += `
        <a href="${project.github}" 
           class="btn btn-outline-primary" 
           target="_blank" 
           rel="noopener noreferrer"
           aria-label="View ${project.name} on GitHub">
          <i class="fab fa-github" aria-hidden="true"></i>
          GitHub
        </a>`;
    }

    // Handle Live Site button
    if (project.live) {
      projectButtons += `
        <a href="${project.live}" 
           class="btn btn-primary" 
           target="_blank" 
           rel="noopener noreferrer"
           aria-label="View ${project.name} live site">
          <i class="fas fa-external-link-alt" aria-hidden="true"></i>
          Live Site
        </a>`;
    }

    // Handle PDF button
    if (project.pdf) {
      projectButtons += `
        <a href="${project.pdf}" 
           class="btn btn-primary" 
           target="_blank" 
           rel="noopener noreferrer"
           aria-label="View ${project.name} PDF">
          <i class="fas fa-file-pdf" aria-hidden="true"></i>
          View PDF
        </a>`;
    }

    // Handle password-protected URL
    if (project.protected && project.url) {
      projectButtons += `
        <button class="btn btn-primary protected-link" 
                data-url="${project.url}" 
                data-password="${project.password}"
                aria-label="Access protected ${project.name} project">
          <i class="fas fa-lock" aria-hidden="true"></i>
          View Project
        </button>`;
    }

    div.innerHTML = `
      <div class="card project-card h-100">
        ${featuredBadge}
        <div class="card-img-container">
          <img src="${project.image}" 
               class="card-img-top" 
               alt="${project.name}" 
               loading="lazy" />
        </div>
        <div class="card-body">
          <h3 class="card-title">${project.name}</h3>
          <p class="card-text">${project.description}</p>
          ${techStack}
          <div class="project-actions mt-auto">
            ${projectButtons}
          </div>
        </div>
      </div>
    `;

    // Add event listener for password-protected links
    this.addProtectedLinkListener(div, project);

    return div;
  }

  addProtectedLinkListener(container, project) {
    if (!project.protected || !project.url) return;

    const protectedLink = container.querySelector('.protected-link');
    if (protectedLink) {
      protectedLink.addEventListener('click', (e) => {
        e.preventDefault();
        this.handleProtectedAccess(project);
      });
    }
  }

  handleProtectedAccess(project) {
    const userPassword = prompt(`Enter password to access ${project.name}:`);
    
    if (userPassword === null) return; // User cancelled
    
    if (userPassword === project.password) {
      window.open(project.url, '_blank', 'noopener,noreferrer');
      showNotification(`Access granted to ${project.name}!`, 'success');
    } else {
      showNotification('Incorrect password. Please try again.', 'error');
    }
  }

  announceFilterChange(count, category) {
    const categoryText = category === 'all' ? 'all categories' : category;
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = `Showing ${count} projects in ${categoryText}`;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }
}

// ==========================================================================
// FORM HANDLER CLASS
// ==========================================================================

class FormHandler {
  constructor() {
    this.form = document.getElementById('contact-form');
    this.submitBtn = document.getElementById('submitBtn');
    this.btnText = this.submitBtn?.querySelector('.btn-text');
    this.btnLoading = this.submitBtn?.querySelector('.btn-loading');
    this.init();
  }

  init() {
    if (!this.form) return;
    
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    
    // Real-time validation
    const inputs = this.form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('blur', () => this.validateField(input));
      input.addEventListener('input', () => this.clearFieldError(input));
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    
    if (!this.validateForm()) return;
    
    this.setLoadingState(true);
    
    try {
      // Simulate form submission
      await this.submitForm();
      this.handleSuccess();
    } catch (error) {
      this.handleError(error);
    } finally {
      this.setLoadingState(false);
    }
  }

  validateForm() {
    const inputs = this.form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
      if (!this.validateField(input)) {
        isValid = false;
      }
    });
    
    return isValid;
  }

  validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    let isValid = true;
    let errorMessage = '';

    // Required field validation
    if (field.hasAttribute('required') && !value) {
      errorMessage = `${this.getFieldLabel(fieldName)} is required.`;
      isValid = false;
    }
    // Email validation
    else if (field.type === 'email' && value && !this.isValidEmail(value)) {
      errorMessage = 'Please enter a valid email address.';
      isValid = false;
    }
    // Message length validation
    else if (fieldName === 'message' && value && value.length < 10) {
      errorMessage = 'Message must be at least 10 characters long.';
      isValid = false;
    }

    this.showFieldError(field, errorMessage);
    return isValid;
  }

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  getFieldLabel(fieldName) {
    const labels = {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      subject: 'Subject'
    };
    return labels[fieldName] || fieldName;
  }

  showFieldError(field, message) {
    const errorElement = document.getElementById(`${field.name}Error`);
    if (errorElement) {
      errorElement.textContent = message;
      field.classList.toggle('is-invalid', !!message);
      field.setAttribute('aria-invalid', !!message);
    }
  }

  clearFieldError(field) {
    const errorElement = document.getElementById(`${field.name}Error`);
    if (errorElement) {
      errorElement.textContent = '';
      field.classList.remove('is-invalid');
      field.setAttribute('aria-invalid', 'false');
    }
  }

  setLoadingState(loading) {
    if (!this.submitBtn) return;
    
    this.submitBtn.disabled = loading;
    this.btnText.classList.toggle('d-none', loading);
    this.btnLoading.classList.toggle('d-none', !loading);
  }

  async submitForm() {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
  }

  handleSuccess() {
    showNotification('Thank you! Your message has been sent successfully.', 'success');
    this.form.reset();
    
    // Focus on first field for better UX
    const firstField = this.form.querySelector('input, textarea');
    if (firstField) firstField.focus();
  }

  handleError(error) {
    console.error('Form submission error:', error);
    showNotification('Sorry, there was an error sending your message. Please try again.', 'error');
  }
}

// ==========================================================================
// NAVIGATION CLASS
// ==========================================================================

class Navigation {
  constructor() {
    this.navbar = document.querySelector('.navbar');
    this.navLinks = document.querySelectorAll('.nav-link');
    this.sections = document.querySelectorAll('section[id]');
    this.lastScrollY = window.scrollY;
    this.init();
  }

  init() {
    this.initSmoothScroll();
    this.initScrollSpy();
    this.initNavbarScroll();
    this.initMobileNavigation();
  }

  initSmoothScroll() {
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
              const toggleButton = document.querySelector('.navbar-toggler');
              toggleButton?.click();
            }
          }
        }
      });
    });
  }

  initScrollSpy() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.setActiveNavLink(entry.target.id);
          }
        });
      },
      { 
        threshold: 0.3,
        rootMargin: '-80px 0px -50% 0px'
      }
    );

    this.sections.forEach(section => observer.observe(section));
  }

  setActiveNavLink(sectionId) {
    this.navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${sectionId}`) {
        link.classList.add('active');
      }
    });
  }

  initNavbarScroll() {
    const handleScroll = debounce(() => {
      const currentScrollY = window.scrollY;
      
      // Add/remove background on scroll
      if (currentScrollY > 50) {
        this.navbar.classList.add('scrolled');
      } else {
        this.navbar.classList.remove('scrolled');
      }
      
      this.lastScrollY = currentScrollY;
    }, 10);

    window.addEventListener('scroll', handleScroll);
  }

  initMobileNavigation() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
      navbarToggler.addEventListener('click', () => {
        const isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';
        navbarToggler.setAttribute('aria-expanded', !isExpanded);
      });
    }
  }
}

// ==========================================================================
// BACK TO TOP CLASS
// ==========================================================================

class BackToTop {
  constructor() {
    this.button = document.getElementById('back-to-top');
    this.init();
  }

  init() {
    if (!this.button) return;
    
    const handleScroll = debounce(() => {
      if (window.scrollY > 300) {
        this.button.classList.add('show');
      } else {
        this.button.classList.remove('show');
      }
    }, 100);

    window.addEventListener('scroll', handleScroll);
    
    this.button.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

// ==========================================================================
// TESTIMONIALS CLASS
// ==========================================================================

class TestimonialSlider {
  constructor(testimonials) {
    this.testimonials = testimonials;
    this.slider = document.getElementById('testimonialSlider');
    this.init();
  }

  init() {
    if (!this.slider) return;
    
    this.renderTestimonials();
    this.initializeSwiper();
  }

  renderTestimonials() {
    this.testimonials.forEach(testimonial => {
      const slide = this.createTestimonialSlide(testimonial);
      this.slider.appendChild(slide);
    });
  }

  createTestimonialSlide(testimonial) {
    const div = document.createElement('div');
    div.className = 'swiper-slide';
    
    const stars = '★'.repeat(testimonial.rating) + '☆'.repeat(5 - testimonial.rating);
    
    div.innerHTML = `
      <div class="testimonial-item">
        <div class="testimonial-rating" aria-label="${testimonial.rating} out of 5 stars">
          ${stars}
        </div>
        <p class="testimonial-text">${testimonial.text}</p>
        <div class="testimonial-author">
          <strong>${testimonial.author}</strong>
          ${testimonial.position ? `<span class="testimonial-position">${testimonial.position}</span>` : ''}
          ${testimonial.company ? `<span class="testimonial-company">${testimonial.company}</span>` : ''}
        </div>
      </div>
    `;
    
    return div;
  }

  initializeSwiper() {
    if (typeof Swiper !== 'undefined') {
      new Swiper('.testimonialSwiper', CONFIG.swiper);
    }
  }
}

// ==========================================================================
// PERFORMANCE MONITOR
// ==========================================================================

class PerformanceMonitor {
  constructor() {
    this.init();
  }

  init() {
    // Monitor page load performance
    window.addEventListener('load', () => {
      if ('performance' in window) {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`Page loaded in ${loadTime}ms`);
        
        // Log Core Web Vitals if available
        this.measureCoreWebVitals();
      }
    });
  }

  measureCoreWebVitals() {
    // Largest Contentful Paint
    if ('PerformanceObserver' in window) {
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // Cumulative Layout Shift
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!entry.hadRecentInput) {
            console.log('CLS:', entry.value);
          }
        }
      }).observe({ entryTypes: ['layout-shift'] });
    }
  }
}

// ==========================================================================
// MAIN APPLICATION INITIALIZATION
// ==========================================================================

class PortfolioApp {
  constructor() {
    this.components = {};
    this.init();
  }

  async init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.initializeComponents());
    } else {
      this.initializeComponents();
    }
  }

  initializeComponents() {
    try {
      // Initialize AOS if available
      if (typeof AOS !== 'undefined') {
        AOS.init(CONFIG.aos);
      }

      // Initialize core components with error handling for each component
      try { this.components.themeManager = new ThemeManager(); }
      catch (e) { console.error('Error initializing ThemeManager:', e); }

      try { this.components.navigation = new Navigation(); }
      catch (e) { console.error('Error initializing Navigation:', e); }

      // Initialize skills manager with a check for the skills container
      if (document.getElementById('skillsMatrix')) {
        try { this.components.skillsManager = new SkillsManager(SKILLS_DATA); }
        catch (e) { console.error('Error initializing SkillsManager:', e); }
      } else {
        console.warn('Skills matrix element not found, skipping SkillsManager initialization');
      }

      try { this.components.projectFilter = new ProjectFilter(PROJECTS_DATA); }
      catch (e) { console.error('Error initializing ProjectFilter:', e); }

      try { this.components.formHandler = new FormHandler(); }
      catch (e) { console.error('Error initializing FormHandler:', e); }

      try { this.components.backToTop = new BackToTop(); }
      catch (e) { console.error('Error initializing BackToTop:', e); }

      try { this.components.testimonialSlider = new TestimonialSlider(TESTIMONIALS_DATA); }
      catch (e) { console.error('Error initializing TestimonialSlider:', e); }
      
      // Initialize performance monitoring in development
      if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        this.components.performanceMonitor = new PerformanceMonitor();
      }

      console.log('✅ Portfolio application initialized successfully');
    } catch (error) {
      console.error('❌ Error initializing portfolio application:', error);
    }
  }
}

// ==========================================================================
// START APPLICATION
// ==========================================================================

// Initialize the application
const app = new PortfolioApp();

// Export for potential external use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PortfolioApp, CONFIG };
}
