# Jayasimma D - Professional Portfolio

A modern, responsive portfolio website built with Next.js, featuring AI-powered animations, dark/light mode, and a floating navigation system.

## 🚀 Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, laptop, desktop)
- **Floating Navigation**: Adaptive navigation bar that scales with device resolution
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Professional Sections**: Home, About, Achievements, Projects, Blog, Certifications, Contact
- **Social Integration**: Links to GitHub, LinkedIn, Kaggle, HuggingFace, LeetCode, and more
- **Resume Download**: Direct download functionality for resume
- **Smooth Animations**: Powered by Framer Motion
- **Modern UI**: OneUI-inspired design with glass morphism effects

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Language**: TypeScript

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 18.0 or higher)
- npm or yarn package manager
- Git

## 🔧 Installation & Setup

### 1. Clone the Repository

\`\`\`bash
git clone https://github.com/jayasimma/professional-portfolio.git
cd professional-portfolio
\`\`\`

### 2. Install Dependencies

Using npm:
\`\`\`bash
npm install
\`\`\`

Using yarn:
\`\`\`bash
yarn install
\`\`\`

### 3. Install Required Packages

The project uses several key dependencies. Install them if not already included:

\`\`\`bash
npm install framer-motion lucide-react @radix-ui/react-slot class-variance-authority clsx tailwind-merge
\`\`\`

### 4. Development Setup

Start the development server:

\`\`\`bash
npm run dev
\`\`\`

Or with yarn:
\`\`\`bash
yarn dev
\`\`\`

The application will be available at \`http://localhost:3000\`

## 🎨 Customization

### Personal Information

Update your personal details in \`app/page.tsx\`:

\`\`\`typescript
// Update social links
const socialLinks = [
  { icon: Github, href: "https://github.com/your-username", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/your-profile", label: "LinkedIn" },
  // Add your actual profile URLs
]

// Update personal information in the About section
const personalInfo = {
  name: "Your Name",
  email: "your.email@example.com",
  phone: "+91 your-phone-number",
  location: "Your City, State, Country"
}
\`\`\`

### Projects Data

Replace the sample projects with your actual projects:

\`\`\`typescript
const projects = [
  {
    title: "Your Project Title",
    description: "Project description",
    tech: ["Technology", "Stack"],
    image: "/path-to-your-image.jpg",
    github: "https://github.com/your-username/project-repo",
    demo: "https://your-project-demo.com",
  },
  // Add more projects
]
\`\`\`

### Blog Posts

Update the blog section with your actual blog posts:

\`\`\`typescript
const blogPosts = [
  {
    title: "Your Blog Post Title",
    excerpt: "Brief description of your blog post",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["Tag1", "Tag2"],
    image: "/blog-image.jpg",
  },
  // Add more blog posts
]
\`\`\`

### Resume Download

1. Add your resume PDF to the \`public\` folder as \`resume-jayasimma-d.pdf\`
2. Update the download function in \`app/page.tsx\`:

\`\`\`typescript
const downloadResume = () => {
  const link = document.createElement('a')
  link.href = '/your-resume-filename.pdf'
  link.download = 'Your_Name_Resume.pdf'
  link.click()
}
\`\`\`

## 🎯 Responsive Navigation Configuration

The floating navigation automatically adapts to different screen sizes:

- **Mobile (< 768px)**: Compact icons, smaller padding
- **Tablet (768px - 1024px)**: Medium-sized icons
- **Desktop (> 1024px)**: Full-sized icons with optimal spacing

### Navigation Customization

To modify navigation behavior:

\`\`\`typescript
// In app/page.tsx, update the navItems array
const navItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "about", icon: User, label: "About" },
  // Add or remove sections as needed
]
\`\`\`

## 🌈 Theme Customization

### Colors

Update colors in \`tailwind.config.ts\`:

\`\`\`typescript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: "your-primary-color",
        foreground: "your-primary-foreground",
      },
      // Add custom colors
    }
  }
}
\`\`\`

### Animations

Customize animations in \`app/globals.css\`:

\`\`\`css
@layer utilities {
  .custom-animation {
    animation: your-custom-animation 2s ease-in-out;
  }
}
\`\`\`

## 📱 Device-Specific Optimizations

### Mobile Optimizations
- Touch-friendly button sizes
- Optimized font sizes
- Responsive grid layouts
- Swipe-friendly navigation

### Desktop Optimizations
- Hover effects
- Larger interactive areas
- Enhanced animations
- Multi-column layouts

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with automatic builds

### Manual Deployment

\`\`\`bash
npm run build
npm start
\`\`\`

### Static Export

For static hosting:

\`\`\`bash
npm run build
npm run export
\`\`\`

## 📊 Performance Optimization

- **Image Optimization**: Use Next.js Image component
- **Code Splitting**: Automatic with Next.js
- **Lazy Loading**: Implemented for sections
- **Bundle Analysis**: Run \`npm run analyze\`

## 🔍 SEO Configuration

Update metadata in \`app/layout.tsx\`:

\`\`\`typescript
export const metadata = {
  title: 'Your Name - Portfolio',
  description: 'Your professional description',
  keywords: 'your, keywords, here',
}
\`\`\`

## 🐛 Troubleshooting

### Common Issues

1. **Framer Motion Errors**: Ensure you're using the correct version
2. **Tailwind Not Working**: Check your \`tailwind.config.ts\` paths
3. **Icons Not Displaying**: Verify Lucide React installation

### Debug Mode

Enable debug mode by setting:

\`\`\`bash
NODE_ENV=development npm run dev
\`\`\`

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Support

For support and questions:
- Email: jayasimmamomdad@gmail.com
- GitHub Issues: [Create an issue](https://github.com/jayasimma/professional-portfolio/issues)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Framer Motion](https://www.framer.com/motion/) for animations
- [shadcn/ui](https://ui.shadcn.com/) for UI components

---

**Made with ❤️ by Jayasimma D**
\`\`\`
