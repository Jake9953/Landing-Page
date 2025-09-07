# Jacob Wambua Portfolio

A modern, responsive portfolio website showcasing web development skills, services, and projects. Built with mobile-first design principles and enhanced accessibility features.

## 🌟 Features

### ✨ Modern Design
- **Mobile-first responsive design** that works perfectly on all devices
- **Dark/Light mode toggle** with system preference detection
- **Glassmorphism effects** for modern visual appeal
- **Smooth animations** powered by AOS (Animate On Scroll)
- **Professional color system** with WCAG AA compliance

### 🚀 Performance Optimized
- **Consolidated CSS/JS** for faster loading
- **Optimized images** with lazy loading
- **Minimal dependencies** for better performance
- **SEO optimized** with proper meta tags and structured data

### ♿ Accessibility First
- **WCAG 2.1 AA compliant** color contrasts
- **Screen reader friendly** with proper ARIA labels
- **Keyboard navigation** support throughout
- **Focus management** for better usability
- **Skip to content** link for keyboard users

### 🛠 Technical Excellence
- **Modern ES6+ JavaScript** with class-based architecture
- **CSS Custom Properties** for maintainable styling
- **Intersection Observer API** for performance
- **Form validation** with real-time feedback
- **Progressive enhancement** principles

## 📁 Project Structure

```
Landing-Page/
├── assets/
│   ├── css/
│   │   └── main.css          # Unified stylesheet
│   └── js/
│       └── main.js           # Main application logic
├── images/                   # Optimized images
├── profiles/                 # Company profile PDFs
├── backup/                   # Old files (for reference)
├── index.html               # Main HTML file
├── CNAME                    # GitHub Pages domain
└── README.md               # This file
```

## 🎨 Design System

### Color Palette
- **Primary**: HSL-based blue tones for brand consistency
- **Secondary**: Complementary indigo for accents
- **Accent**: Strategic red for call-to-action elements
- **Neutral**: Comprehensive grayscale for text and backgrounds

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Scale**: Modular scale with clamp() for responsive sizing
- **Weights**: Light (300) to Bold (700)
- **Line Heights**: Optimized for readability

### Spacing System
- **Base Unit**: 0.25rem (4px)
- **Scale**: Consistent spacing from 4px to 128px
- **Responsive**: Fluid spacing that adapts to screen size

## 🔧 Key Components

### ThemeManager
- Handles dark/light mode switching
- Respects user system preferences
- Persists selection in localStorage
- Announces changes to screen readers

### SkillsManager
- Animated skill bars with intersection observer
- Accessible progress indicators
- Organized skill categorization
- Performance-optimized animations

### ProjectFilter
- Category-based project filtering
- Smooth transitions between views
- Password protection for private projects
- ARIA live regions for screen readers

### FormHandler
- Real-time form validation
- Accessible error messaging
- Loading states and feedback
- Email validation and security

## 📱 Mobile-First Approach

The portfolio is built with a mobile-first methodology:

1. **Base styles** target mobile devices (320px+)
2. **Progressive enhancement** for tablets (768px+)
3. **Desktop optimizations** for larger screens (1024px+)
4. **Touch-friendly** interface elements
5. **Gesture support** where appropriate

## 🌐 Browser Support

- **Modern browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile browsers**: iOS Safari 14+, Chrome Mobile 90+
- **Graceful degradation** for older browsers
- **Progressive enhancement** for advanced features

## ⚡ Performance Metrics

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for good user experience
- **Bundle Size**: Minimal with only essential dependencies
- **Load Time**: Under 3 seconds on average connections

## 🔒 Security Features

- **Content Security Policy** ready
- **XSS protection** in form handling
- **External links** with proper rel attributes
- **Input sanitization** for contact forms

## 🚀 Deployment

### GitHub Pages
1. Push to main branch
2. Automatic deployment via GitHub Actions
3. Custom domain configured via CNAME

### Manual Deployment
1. Upload all files to web server
2. Ensure proper MIME types for .webp images
3. Configure HTTPS redirect
4. Set up proper caching headers

## 🛠 Development

### Local Development
```bash
# Clone repository
git clone https://github.com/Jake9953/Landing-Page.git

# Navigate to project
cd Landing-Page

# Serve locally (use any HTTP server)
python -m http.server 8000
# or
npx serve .
```

### Code Quality
- **ESLint** configuration for JavaScript
- **Prettier** for code formatting
- **Semantic versioning** for releases
- **Git hooks** for pre-commit validation

## 📈 Analytics & Monitoring

- **Google Analytics 4** integration
- **Core Web Vitals** monitoring
- **Error tracking** with console logging
- **Performance monitoring** in development

## 🔄 Future Enhancements

- [ ] Blog functionality with CMS integration
- [ ] Advanced animations with GSAP
- [ ] PWA features (offline support)
- [ ] Multi-language support
- [ ] Advanced project filtering
- [ ] Client testimonial management system

## 📞 Contact

**Jacob Wambua**
- Email: jwambua253@gmail.com
- Phone: +254111309187
- Website: https://www.jacobwambua.com
- LinkedIn: [jacob-wambua-17a107153](https://www.linkedin.com/in/jacob-wambua-17a107153/)
- GitHub: [Jake9953](https://github.com/Jake9953)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Bootstrap 5** for responsive grid system
- **AOS Library** for scroll animations
- **Swiper.js** for testimonial slider
- **Font Awesome** for icons
- **Google Fonts** for typography
- **Unsplash/Pexels** for placeholder images

---

*Built with ❤️ by Jacob Wambua - Web Developer & IT Consultant*
