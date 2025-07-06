"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Home,
  Trophy,
  FolderOpen,
  Award,
  Mail,
  Sun,
  Moon,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  ExternalLink,
  MapPin,
  Phone,
  Download,
  BookOpen,
  Calendar,
  User,
  Code,
  Database,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

// Custom icons for additional platforms
const HuggingFaceIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
  </svg>
)

const KaggleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.336" />
  </svg>
)

const LeetCodeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
)

const MediumIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
)

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "about", icon: User, label: "About" },
    { id: "achievements", icon: Trophy, label: "Achievements" },
    { id: "projects", icon: FolderOpen, label: "Projects" },
    { id: "blog", icon: BookOpen, label: "Blog" },
    { id: "certifications", icon: Award, label: "Certifications" },
    { id: "contact", icon: Mail, label: "Contact" },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/jayasimma", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/jayasimma-d", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/jayasimma_d", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/jayasimma.d", label: "Instagram" },
    { icon: HuggingFaceIcon, href: "https://huggingface.co/jayasimma", label: "Hugging Face" },
    { icon: KaggleIcon, href: "https://kaggle.com/jayasimmad", label: "Kaggle" },
    { icon: Code, href: "https://developers.google.com/profile/u/jayasimma", label: "Google Developer" },
    { icon: Database, href: "https://hackerrank.com/jayasimma", label: "HackerRank" },
    { icon: LeetCodeIcon, href: "https://leetcode.com/jayasimma", label: "LeetCode" },
    { icon: MediumIcon, href: "https://medium.com/@jayasimma", label: "Medium" },
  ]

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const downloadResume = () => {
    // Create a dummy PDF download
    const link = document.createElement("a")
    link.href = "/resume-jayasimma-d.pdf"
    link.download = "Jayasimma_D_Resume.pdf"
    link.click()
  }

  const projects = [
    {
      title: "AI-Powered Chat Application with Bharathbuddy",
      description: "Real-time chat app with AI integration using Tinyllama",
      tech: ["Gradio", "Ollama", "python", "NLP"],
      image: "/placeholder.svg?height=200&width=300",
      github: "https://github.com/jayasimma/ai-chat-app",
      demo: "https://ai-chat-demo.vercel.app",
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/placeholder.svg?height=200&width=300",
      github: "https://github.com/jayasimma/ecommerce-platform",
      demo: "https://ecommerce-demo.vercel.app",
    },
    {
      title: "Machine Learning Model Deployment",
      description: "End-to-end ML pipeline with model serving and monitoring",
      tech: ["Python", "FastAPI", "Docker", "AWS"],
      image: "/placeholder.svg?height=200&width=300",
      github: "https://github.com/jayasimma/ml-deployment",
      demo: "https://ml-model-api.herokuapp.com",
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates",
      tech: ["Vue.js", "Firebase", "Vuetify", "PWA"],
      image: "/placeholder.svg?height=200&width=300",
      github: "https://github.com/jayasimma/task-manager",
      demo: "https://task-manager-demo.netlify.app",
    },
    {
      title: "Weather Forecast App",
      description: "Beautiful weather app with location-based forecasts",
      tech: ["React Native", "API Integration", "Redux"],
      image: "/placeholder.svg?height=200&width=300",
      github: "https://github.com/jayasimma/weather-app",
      demo: "https://weather-forecast-demo.vercel.app",
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for business analytics",
      tech: ["D3.js", "React", "Python", "Flask"],
      image: "/placeholder.svg?height=200&width=300",
      github: "https://github.com/jayasimma/data-viz-dashboard",
      demo: "https://data-dashboard-demo.vercel.app",
    },
  ]

  const blogPosts = [
    {
      title: "Building Scalable AI Applications with Next.js",
      excerpt: "Learn how to integrate AI models into your Next.js applications for better user experiences.",
      date: "2024-15-1",
      readTime: "8 min read",
      tags: ["AI", "Next.js", "Web Development"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "The Future of Web Development: AI Integration",
      excerpt: "Exploring how artificial intelligence is reshaping the landscape of modern web development.",
      date: "2024-10-1",
      readTime: "12 min read",
      tags: ["AI", "Future Tech", "Web Dev"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Optimizing React Performance with Modern Techniques",
      excerpt: "Advanced strategies for building high-performance React applications in 2024.",
      date: "2024-01-05",
      readTime: "10 min read",
      tags: ["React", "Performance", "JavaScript"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Machine Learning Model Deployment Best Practices",
      excerpt: "A comprehensive guide to deploying ML models in production environments.",
      date: "2023-12-28",
      readTime: "15 min read",
      tags: ["Machine Learning", "DevOps", "Python"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Building Responsive UIs with Tailwind CSS",
      excerpt: "Master the art of creating beautiful, responsive interfaces with Tailwind CSS.",
      date: "2023-12-20",
      readTime: "7 min read",
      tags: ["CSS", "Tailwind", "UI/UX"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Getting Started with TypeScript in 2024",
      excerpt: "Everything you need to know to start using TypeScript effectively in your projects.",
      date: "2023-12-15",
      readTime: "9 min read",
      tags: ["TypeScript", "JavaScript", "Programming"],
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const achievements = [
    {
      title: "Best Developer Award 2024",
      organization: "Tech Innovation Summit",
      date: "March 2024",
      description: "Recognized for outstanding contribution to AI development",
      image: "/achievements/best-developer-award.jpg",
      proofLink: "https://drive.google.com/file/d/1ABC123_BestDeveloperAward2024/view?usp=sharing",
    },
    {
      title: "Hackathon Winner",
      organization: "Global Code Challenge",
      date: "January 2024",
      description: "First place in AI/ML category with innovative solution",
      image: "/achievements/hackathon-winner.jpg",
      proofLink: "https://drive.google.com/file/d/1DEF456_HackathonWinner2024/view?usp=sharing",
    },
    {
      title: "Open Source Contributor",
      organization: "GitHub",
      date: "2023-2024",
      description: "500+ contributions to various open source projects",
      image: "/achievements/open-source-contributor.jpg",
      proofLink: "https://drive.google.com/file/d/1GHI789_OpenSourceContributor/view?usp=sharing",
    },
    {
      title: "Tech Speaker",
      organization: "Developer Conference",
      date: "December 2023",
      description: "Keynote speaker on AI in Web Development",
      image: "/achievements/tech-speaker.jpg",
      proofLink: "https://drive.google.com/file/d/1JKL012_TechSpeaker2023/view?usp=sharing",
    },
    {
      title: "Mentor of the Year",
      organization: "Code Academy",
      date: "November 2023",
      description: "Mentored 50+ junior developers successfully",
      image: "/achievements/mentor-of-year.jpg",
      proofLink: "https://drive.google.com/file/d/1MNO345_MentorOfTheYear/view?usp=sharing",
    },
    {
      title: "Innovation Award",
      organization: "Startup Incubator",
      date: "October 2023",
      description: "Most innovative AI solution for web applications",
      image: "/achievements/innovation-award.jpg",
      proofLink: "https://drive.google.com/file/d/1PQR678_InnovationAward2023/view?usp=sharing",
    },
  ]

  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024",
      image: "/placeholder.svg?height=100&width=100",
      credentialId: "AWS-SA-2024-001",
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2024",
      image: "/placeholder.svg?height=100&width=100",
      credentialId: "GCP-PD-2024-002",
    },
    {
      title: "Microsoft Azure AI Engineer",
      issuer: "Microsoft",
      date: "2023",
      image: "/placeholder.svg?height=100&width=100",
      credentialId: "AZ-AI-2023-003",
    },
    {
      title: "Meta React Developer",
      issuer: "Meta",
      date: "2023",
      image: "/placeholder.svg?height=100&width=100",
      credentialId: "META-RD-2023-004",
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "TensorFlow",
      date: "2023",
      image: "/placeholder.svg?height=100&width=100",
      credentialId: "TF-DEV-2023-005",
    },
    {
      title: "Kubernetes Administrator",
      issuer: "CNCF",
      date: "2023",
      image: "/placeholder.svg?height=100&width=100",
      credentialId: "CKA-2023-006",
    },
  ]

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? "dark bg-gray-900" : "bg-gray-50"}`}>
      {/* Enhanced Responsive Floating Navigation - Top Center */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
      >
        <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl sm:rounded-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 shadow-2xl border border-gray-200/50 dark:border-gray-700/50 max-w-5xl w-full sm:w-auto">
          <div className="flex items-center justify-center space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6">
            {/* Navigation Items */}
            <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`p-2 sm:p-2.5 md:p-3 rounded-full transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-blue-500 text-white shadow-lg"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={item.label}
                >
                  <item.icon size={isMobile ? 16 : 18} className="sm:w-5 sm:h-5" />
                </motion.button>
              ))}
            </div>

            {/* Separator */}
            <div className="w-px h-6 sm:h-8 bg-gray-300 dark:bg-gray-600" />

            {/* Theme Toggle Only */}
            <div className="flex items-center">
              <motion.button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 sm:p-2.5 md:p-3 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="Toggle Theme"
              >
                {isDarkMode ? (
                  <Sun size={isMobile ? 16 : 18} className="sm:w-5 sm:h-5" />
                ) : (
                  <Moon size={isMobile ? 16 : 18} className="sm:w-5 sm:h-5" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Home Section with Background Image */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 pt-24 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/hero-background.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900/20 dark:from-blue-900/40 dark:via-purple-900/40 dark:to-gray-900/40"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800">
                <Image
                  src="/profile.jpg"
                  alt="Jayasimma D - AI & Web Developer Professional Profile"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                  priority
                  quality={90}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Kcp/9k="
                  onError={(e) => {
                    // Fallback to profile image if main image fails to load
                    e.currentTarget.style.display = "none"
                    const fallback = e.currentTarget.parentElement?.querySelector(".fallback-initials")
                    if (fallback) {
                      fallback.style.display = "flex"
                    }
                  }}
                />
                <div
                  className="fallback-initials w-full h-full flex items-center justify-center"
                  style={{ display: "none" }}
                >
                  <Image
                    src="/profile.jpeg"
                    alt="Jayasimma D - Profile Photo"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover rounded-full"
                    quality={90}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Kcp/9k="
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl"
          >
            Jayasimma D
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-8 drop-shadow-lg"
          >
            AI & Web Developer
          </motion.p>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg text-gray-200 mb-12 max-w-2xl mx-auto px-4 drop-shadow-lg"
          >
            Passionate about creating intelligent web applications that solve real-world problems. Specializing in AI
            integration, modern web technologies, and user-centric design.
          </motion.p>

          {/* Download Resume Button */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-8"
          >
            <motion.button
              onClick={downloadResume}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl transition-all duration-300 flex items-center mx-auto space-x-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={24} />
              <span>Download Resume</span>
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 px-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 dark:text-gray-300 hover:text-blue-500"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                title={social.label}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto px-4"
          >
            {[
              { number: "20+", label: "Projects Completed" },
              { number: "20+", label: "Achievements" },
              { number: "20+", label: "Certifications" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-blue-500 mb-2">{stat.number}</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20 px-4 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">Get to know me better</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Personal Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <User className="text-blue-500 mr-4" size={20} />
                    <div>
                      <span className="font-medium text-gray-800 dark:text-white">Full Name:</span>
                      <span className="ml-2 text-gray-600 dark:text-gray-300">Jayasimma D</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="text-blue-500 mr-4" size={20} />
                    <div>
                      <span className="font-medium text-gray-800 dark:text-white">Location:</span>
                      <span className="ml-2 text-gray-600 dark:text-gray-300">Bangalore, Karnataka, India</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="text-blue-500 mr-4" size={20} />
                    <div>
                      <span className="font-medium text-gray-800 dark:text-white">Email:</span>
                      <span className="ml-2 text-gray-600 dark:text-gray-300">jayasimma.d@gmail.com</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-blue-500 mr-4" size={20} />
                    <div>
                      <span className="font-medium text-gray-800 dark:text-white">Phone:</span>
                      <span className="ml-2 text-gray-600 dark:text-gray-300">+91 9876543210</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="text-blue-500 mr-4" size={20} />
                    <div>
                      <span className="font-medium text-gray-800 dark:text-white">Experience:</span>
                      <span className="ml-2 text-gray-600 dark:text-gray-300">3+ Years</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">My Story</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  I'm a passionate AI and Web Developer with over 3 years of experience in creating innovative solutions
                  that bridge the gap between artificial intelligence and web technologies. My journey began with a
                  fascination for how machines can learn and adapt, which led me to explore the intersection of AI and
                  web development.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  I specialize in building scalable web applications integrated with machine learning models, creating
                  intelligent user experiences that solve real-world problems. My expertise spans across modern web
                  frameworks, cloud platforms, and AI/ML technologies.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  When I'm not coding, you can find me contributing to open-source projects, writing technical blogs, or
                  mentoring aspiring developers in the community.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Core Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "JavaScript",
                    "TypeScript",
                    "Python",
                    "React",
                    "Next.js",
                    "Node.js",
                    "TensorFlow",
                    "PyTorch",
                    "AWS",
                    "Docker",
                    "MongoDB",
                    "PostgreSQL",
                  ].map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">Blog</h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">Thoughts, tutorials, and insights</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <Card className="h-full bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={`${post.title} - Blog Post Cover`}
                      width={400}
                      height={192}
                      className="w-full h-48 object-cover"
                      quality={85}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Kcp/9k="
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="text-xs">
                        {post.readTime}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                      <Calendar size={14} className="mr-2" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full bg-transparent">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of the sections remain the same but with responsive improvements */}
      {/* Achievements Section */}
      <section id="achievements" className="min-h-screen py-20 px-4 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Achievements
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
              Recognition and milestones in my journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <Card className="h-full bg-white dark:bg-gray-900 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  {/* Achievement Image */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={achievement.image || "/placeholder.svg"}
                      alt={`${achievement.title} - ${achievement.organization}`}
                      width={400}
                      height={192}
                      className="w-full h-48 object-cover"
                      quality={85}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Kcp/9k="
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="text-xs">
                        {achievement.date}
                      </Badge>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Trophy className="text-yellow-500 bg-white/90 dark:bg-gray-800/90 p-2 rounded-full" size={32} />
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{achievement.title}</h3>
                    <p className="text-blue-500 font-medium mb-3">{achievement.organization}</p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{achievement.description}</p>

                    {/* Proof Link Button */}
                    <motion.a
                      href={achievement.proofLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      <span>View Proof</span>
                    </motion.a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">Projects</h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
              Showcasing my latest work and innovations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <Card className="h-full bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={`${project.title} - ${project.description}`}
                      width={400}
                      height={192}
                      className="w-full h-48 object-cover"
                      quality={85}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Kcp/9k="
                    />
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-black/70 text-white rounded-full hover:bg-black transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={16} />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-blue-500/70 text-white rounded-full hover:bg-blue-500 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={16} />
                      </motion.a>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="min-h-screen py-20 px-4 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Certifications
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
              Professional credentials and continuous learning
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <Card className="h-full bg-white dark:bg-gray-900 border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                      <div className="w-full h-full rounded-full overflow-hidden bg-white">
                        <Image
                          src={cert.image || "/placeholder.svg"}
                          alt={`${cert.title} - ${cert.issuer} Certification`}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                          quality={85}
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Kcp/9k="
                        />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">{cert.title}</h3>
                    <p className="text-blue-500 font-medium mb-2">{cert.issuer}</p>
                    <Badge variant="secondary" className="mb-3">
                      {cert.date}
                    </Badge>
                    <p className="text-xs text-gray-500 dark:text-gray-400">ID: {cert.credentialId}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
              Let's collaborate on your next project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="text-blue-500 mr-4" size={20} />
                  <span className="text-gray-600 dark:text-gray-300">jayasimma.d@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-blue-500 mr-4" size={20} />
                  <span className="text-gray-600 dark:text-gray-300">+91 9876543210</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-blue-500 mr-4" size={20} />
                  <span className="text-gray-600 dark:text-gray-300">Bangalore, Karnataka, India</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Follow Me</h4>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.slice(0, 6).map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 dark:text-gray-300 hover:text-blue-500"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white dark:bg-gray-800 border-0 shadow-xl">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                      <textarea
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your message..."
                      />
                    </div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 rounded-lg font-medium transition-all duration-300">
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
