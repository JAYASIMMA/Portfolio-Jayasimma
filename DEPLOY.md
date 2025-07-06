# Deployment Guide

This guide outlines the steps to deploy your personal portfolio website.

## Prerequisites

*   A code editor (e.g., VS Code, Sublime Text)
*   Basic knowledge of HTML, CSS, and JavaScript
*   A web hosting service (e.g., Netlify, Vercel, GitHub Pages)

## Step 1: Project Setup

1.  **Clone the repository:**

    \`\`\`bash
    git clone <repository_url>
    cd <project_directory>
    \`\`\`

2.  **Install dependencies (if any):**

    \`\`\`bash
    npm install  # or yarn install
    \`\`\`

## Step 2: Configuration

1.  **Update `index.html`:**

    *   Modify the `<title>` tag to reflect your name or portfolio title.
    *   Update the `<meta>` description tag for SEO purposes.
    *   Customize the content within the `<body>` section to showcase your skills, projects, and experience.

2.  **Customize `style.css`:**

    *   Adjust the CSS rules to match your desired design and branding.
    *   Modify colors, fonts, and layout to create a unique visual identity.

3.  **Modify `script.js` (if applicable):**

    *   If your portfolio includes dynamic elements or interactive features, update the JavaScript code accordingly.
    *   Ensure that all scripts are properly linked in `index.html`.

## Image Structure

\`\`\`markdown
├── assets/
│   ├── css/
│   │   └── style.css          # Main stylesheet
│   ├── js/
│   │   └── script.js          # Main javascript file
│   └── img/                     # All images
│       ├── project1.jpg         # Project 1 image
│       ├── project2.jpg         # Project 2 image
│       └── ...
├── index.html                   # Main HTML file
└── README.md                    # Project documentation
\`\`\`

\`\`\`markdown
├── public/
│   ├── profile-image.jpg          # Your main profile photo (NEW)
│   ├── hero-background.jpg        # Background image for home section
│   ├── resume-jayasimma-d.pdf     # Your resume file
│   └── achievements/              # Achievement proof images
│       ├── best-developer-award.jpg
│       ├── hackathon-winner.jpg
│       └── ...
\`\`\`

## Image Specifications

#### **Project Images**

-   **File**: `project1.jpg`, `project2.jpg`, etc.
-   **Dimensions**: Variable, but recommended to be optimized for web (e.g., 800x600px)
-   **Format**: JPG, PNG, or WebP
-   **Size**: < 500KB

#### **Profile Image**
- **File**: `profile-image.jpg`
- **Dimensions**: 400x400px (square)
- **Format**: JPG or PNG
- **Size**: < 200KB
- **Requirements**: Professional headshot, clear face, good lighting

## Step 3: Replace Images

1.  **Replace project images:**

    *   Navigate to the `assets/img/` directory.
    *   Replace the placeholder images (e.g., `project1.jpg`, `project2.jpg`) with your own project images.
    *   Ensure that the file names match the references in your HTML and CSS.

\`\`\`bash
1. **Replace profile image**:
   \`\`\`bash
   cd public/
   
   # Remove placeholder (if exists)
   rm profile-image.jpg
   
   # Add your profile photo (rename your file)
   cp /path/to/your/profile-photo.jpg profile-image.jpg
   \`\`\`
\`\`\`

## Step 4: Deployment

1.  **Choose a hosting provider:**

    *   **Netlify:** Simple drag-and-drop deployment, continuous integration with Git.
    *   **Vercel:** Optimized for Next.js and other modern frameworks, easy Git integration.
    *   **GitHub Pages:** Free hosting directly from your GitHub repository.

2.  **Deploy your website:**

    *   Follow the instructions provided by your chosen hosting provider to deploy your portfolio.
    *   Typically, this involves connecting your Git repository or uploading your project files.

## Step 5: Testing and Optimization

1.  **Test your website:**

    *   Visit your deployed website and thoroughly test all features and functionality.
    *   Check for broken links, layout issues, and responsiveness on different devices.

2.  **Optimize for performance:**

    *   Compress images to reduce file sizes.
    *   Minify CSS and JavaScript files.
    *   Leverage browser caching to improve loading times.

## Congratulations!

Your personal portfolio website is now live. Share it with the world and showcase your amazing skills and projects!
