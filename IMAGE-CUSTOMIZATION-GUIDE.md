# Profile Image Customization Guide

This guide shows you how to customize your profile image filename and organize your portfolio images effectively.

## 🖼️ Profile Image Filename Options

### **Option 1: Personal Name Based**
\`\`\`typescript
// In app/page.tsx, change the src attribute to:
src="/jayasimma-d-profile.jpg"
src="/jayasimma-headshot.jpg"
src="/jayasimma-professional.jpg"
\`\`\`

### **Option 2: Generic Professional**
\`\`\`typescript
src="/professional-headshot.jpg"
src="/profile-photo.jpg"
src="/headshot.jpg"
src="/avatar.jpg"
\`\`\`

### **Option 3: Organized by Category**
\`\`\`typescript
src="/images/profile/main-headshot.jpg"
src="/photos/professional/jayasimma-profile.jpg"
src="/assets/images/profile.jpg"
\`\`\`

### **Option 4: Version Control**
\`\`\`typescript
src="/profile-2024.jpg"
src="/jayasimma-profile-v2.jpg"
src="/headshot-latest.jpg"
\`\`\`

## 📁 Recommended File Structure

### **Simple Structure (Recommended for beginners)**
\`\`\`
public/
├── jayasimma-profile.jpg          # Your main profile photo
├── hero-background.jpg            # Background image
├── resume-jayasimma-d.pdf         # Resume file
└── achievements/                  # Achievement images
    ├── award-2024.jpg
    └── hackathon-winner.jpg
\`\`\`

### **Organized Structure (Recommended for advanced users)**
\`\`\`
public/
├── images/
│   ├── profile/
│   │   ├── jayasimma-main.jpg     # Main profile photo
│   │   ├── jayasimma-casual.jpg   # Alternative casual photo
│   │   └── jayasimma-speaking.jpg # Speaking/presentation photo
│   ├── backgrounds/
│   │   ├── hero-bg.jpg            # Hero section background
│   │   └── about-bg.jpg           # About section background
│   ├── projects/
│   │   ├── project-1.jpg
│   │   └── project-2.jpg
│   └── achievements/
│       ├── best-developer-2024.jpg
│       └── hackathon-winner.jpg
├── documents/
│   └── jayasimma-resume-2024.pdf
└── icons/
    └── favicon.ico
\`\`\`

## 🔧 How to Change Profile Image Filename

### **Step 1: Choose Your Filename**

Pick a filename that's:
- **Descriptive**: `jayasimma-professional-headshot.jpg`
- **SEO-friendly**: Use hyphens instead of spaces
- **Consistent**: Follow a naming convention
- **Memorable**: Easy to remember and type

### **Step 2: Update the Code**

1. **Open `app/page.tsx`**
2. **Find the profile image section** (around line 200)
3. **Replace the `src` attribute**:

\`\`\`typescript
// FROM:
src="/profile-image.jpg"

// TO (choose one):
src="/jayasimma-professional.jpg"
src="/images/profile/main-headshot.jpg"
src="/photos/jayasimma-2024.jpg"
\`\`\`

### **Step 3: Add Your Image File**

1. **Rename your image file** to match your chosen filename
2. **Place it in the correct directory**:

\`\`\`bash
# For simple structure:
cp /path/to/your/photo.jpg public/jayasimma-professional.jpg

# For organized structure:
mkdir -p public/images/profile
cp /path/to/your/photo.jpg public/images/profile/main-headshot.jpg
\`\`\`

## 🎨 Multiple Profile Images Setup

### **Dynamic Profile Image Selection**

You can set up multiple profile images for different contexts:

\`\`\`typescript
// Add this to your component (in app/page.tsx)
const profileImages = {
  main: "/images/profile/jayasimma-main.jpg",
  casual: "/images/profile/jayasimma-casual.jpg",
  professional: "/images/profile/jayasimma-professional.jpg",
  speaking: "/images/profile/jayasimma-speaking.jpg"
}

// Use in your JSX:
<img
  src={profileImages.main || "/placeholder.svg"}  // Change to .casual, .professional, etc.
  alt="Jayasimma D - Professional Profile"
  className="w-full h-full rounded-full object-cover bg-white dark:bg-gray-800"
/>
\`\`\`

### **Context-Specific Images**

Use different images for different sections:

\`\`\`typescript
// Home section - Professional headshot
src="/images/profile/jayasimma-professional.jpg"

// About section - Casual/friendly photo
src="/images/profile/jayasimma-casual.jpg"

// Speaking/Blog section - Presentation photo
src="/images/profile/jayasimma-speaking.jpg"
\`\`\`

## 📝 Naming Convention Best Practices

### **✅ Good Examples:**
- `jayasimma-professional-headshot.jpg`
- `profile-main-2024.jpg`
- `images/profile/headshot-professional.jpg`
- `photos/jayasimma-d-main.jpg`

### **❌ Avoid These:**
- `IMG_1234.jpg` (not descriptive)
- `my photo.jpg` (spaces cause issues)
- `PROFILE.JPG` (all caps, inconsistent)
- `pic.jpg` (too generic)

## 🔄 Quick Filename Change Steps

### **Method 1: Direct Replacement**
\`\`\`bash
# 1. Navigate to your project
cd your-portfolio-project

# 2. Go to public folder
cd public

# 3. Rename your existing image
mv profile-image.jpg jayasimma-professional.jpg

# 4. Update the code in app/page.tsx
# Change: src="/profile-image.jpg"
# To: src="/jayasimma-professional.jpg"
\`\`\`

### **Method 2: Organized Structure**
\`\`\`bash
# 1. Create organized folders
mkdir -p public/images/profile

# 2. Move your image
mv public/profile-image.jpg public/images/profile/jayasimma-main.jpg

# 3. Update the code
# Change: src="/profile-image.jpg"
# To: src="/images/profile/jayasimma-main.jpg"
\`\`\`

## 🧪 Testing Your Changes

After changing the filename:

1. **Start development server**:
   \`\`\`bash
   npm run dev
   \`\`\`

2. **Check the home page** - your image should load correctly

3. **Test the fallback** - temporarily rename your image file to see if the initials fallback works

4. **Verify on different devices** - check mobile, tablet, and desktop views

## 🚀 Advanced Customization Options

### **Environment-Based Images**
\`\`\`typescript
const getProfileImage = () => {
  if (process.env.NODE_ENV === 'development') {
    return '/images/profile/jayasimma-dev.jpg'
  }
  return '/images/profile/jayasimma-professional.jpg'
}

// Use in JSX:
<img src={getProfileImage() || "/placeholder.svg"} alt="Profile" />
\`\`\`

### **Responsive Images**
\`\`\`typescript
// Different images for different screen sizes
const profileImage = {
  mobile: '/images/profile/jayasimma-mobile.jpg',
  tablet: '/images/profile/jayasimma-tablet.jpg',
  desktop: '/images/profile/jayasimma-desktop.jpg'
}
\`\`\`

### **Image Optimization**
\`\`\`typescript
// Using Next.js Image component for better performance
import Image from 'next/image'

<Image
  src="/images/profile/jayasimma-professional.jpg"
  alt="Jayasimma D - Professional Profile"
  width={400}
  height={400}
  className="rounded-full object-cover"
  priority // Load immediately for above-the-fold content
/>
\`\`\`

## 📋 Checklist

Before deploying with your custom filename:

- [ ] Image file is properly named and placed
- [ ] Code is updated with correct filename
- [ ] Image loads correctly in development
- [ ] Fallback system works if image fails
- [ ] Image is optimized (under 200KB)
- [ ] Alt text is descriptive and professional
- [ ] Responsive sizing works on all devices
- [ ] File path is correct (no typos)

## 🆘 Troubleshooting

### **Image Not Loading?**
1. Check the file path is correct
2. Ensure the image file exists in the right location
3. Verify the filename matches exactly (case-sensitive)
4. Check file permissions

### **Image Too Large?**
1. Compress using [TinyPNG](https://tinypng.com/)
2. Resize to 400x400px maximum
3. Convert to WebP format for better compression

### **Fallback Not Working?**
1. Check the onError handler is properly set
2. Verify the fallback div is correctly positioned
3. Test by temporarily renaming the image file

---

**💡 Pro Tip**: Use descriptive, SEO-friendly filenames that include your name for better search engine optimization and easier file management!
