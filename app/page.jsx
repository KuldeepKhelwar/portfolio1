"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaDownload,
  FaSun,
  FaMoon,
  FaCode,
  FaDatabase,
  FaTools,
  FaGraduationCap,
  FaBriefcase,
  FaChevronLeft,
  FaChevronRight,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true)
  const [currentSkill, setCurrentSkill] = useState(0)
  const [showFullAbout, setShowFullAbout] = useState(false)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, -300])
  const [currentImage, setCurrentImage] = useState(0)

  const images = [
    {
      src: "/placeholder.svg?height=320&width=320",
      alt: "Kuldeep Khelwar Professional Photo",
      caption: "Professional Headshot",
    },
    {
      src: "/placeholder.svg?height=320&width=320",
      alt: "Kuldeep at Work",
      caption: "Coding & Development",
    },
    {
      src: "/placeholder.svg?height=320&width=320",
      alt: "Kuldeep Teaching",
      caption: "Training Students",
    },
    {
      src: "/placeholder.svg?height=320&width=320",
      alt: "Graduation Day",
      caption: "Graduation Achievement",
    },
    {
      src: "/placeholder.svg?height=320&width=320",
      alt: "Team Collaboration",
      caption: "Team Work",
    },
    {
      src: "/placeholder.svg?height=320&width=320",
      alt: "Project Presentation",
      caption: "Project Showcase",
    },
  ]

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const skills = [
    { name: "WordPress", level: 90, icon: <FaCode />, category: "CMS" },
    { name: "HTML", level: 95, icon: <FaCode />, category: "Frontend" },
    { name: "CSS", level: 95, icon: <FaCode />, category: "Frontend" },
    { name: "JavaScript", level: 85, icon: <FaCode />, category: "Frontend" },
    { name: "C/C++", level: 80, icon: <FaCode />, category: "Programming" },
    { name: "jQuery", level: 85, icon: <FaCode />, category: "Library" },
    { name: "Adobe Photoshop", level: 75, icon: <FaTools />, category: "Design" },
    { name: "MS Word", level: 90, icon: <FaTools />, category: "Office" },
    { name: "Computer Operations", level: 85, icon: <FaTools />, category: "General" },
    { name: "English Typing", level: 88, icon: <FaTools />, category: "General" },
  ]

  const nextSkill = () => {
    setCurrentSkill((prev) => (prev + 1) % skills.length)
  }

  const prevSkill = () => {
    setCurrentSkill((prev) => (prev - 1 + skills.length) % skills.length)
  }

  const downloadCV = () => {
    // Create a simple CV content
    const cvContent = `
KULDEEP KHELWAR
WordPress Developer & Programmer

Contact: +91 97540 30206
Email: kuldeepkhelwar43@gmail.com
Address: 402, Gulmarg Parishar-2, Indore, Madhya Pradesh, India

PROFESSIONAL PROFILE:
Aspiring WordPress developer with 1.6 years of professional experience, seeking to enhance technical skills in a stable and encouraging work environment.

EDUCATION:
- Front End Web Development (2023-2024) - Code Batter Training Institute
- B.Com + Computer (2021-2024) - Devi Ahilya Vishwavidyalaya

WORK EXPERIENCE:
- WordPress Developer (1.6 years) - EasyPort Logistic's Solution
- C/C++ Programming Intern (2 months) - Code Batter Training Institute
- Computer Operator & Designer (2021-2022) - SDG DESIGNS
- Trainer (2022-Present) - Code Batter Training Institute

TECHNICAL SKILLS:
Languages: C/C++, HTML, CSS, JavaScript
Frameworks: Node.js, jQuery
Database: MongoDB
Tools: WordPress, Adobe Photoshop
    `

    const blob = new Blob([cvContent], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "Kuldeep_Khelwar_CV.txt"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark bg-black text-white" : "bg-white text-gray-900"}`}
    >
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/10 dark:bg-black/10 border-b border-gray-200/20 dark:border-green-500/20"
      >
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent"
          >
            Kuldeep Khelwar
          </motion.div>

          <div className="hidden md:flex space-x-8  ">
            {["About", "Skills", "Experience", "Education", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1 }}
                className="hover:text-green-400 transition-colors text-gray-500 duration-300"
              >
                {item}
              </motion.a>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-green-500/20 hover:bg-green-500/30 transition-colors duration-300"
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-600" />}
          </motion.button>
        </nav>
      </motion.header>

      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div  className="absolute inset-0 z-0 bg-cover" style={{backgroundImage:`url('./bg1.jpg')`}}>
          
          <div className="w-full h-full bg-gradient-to-br from-green-900/20 via-black/50 to-green-800/20 dark:from-green-500/10 dark:via-black/80 dark:to-green-400/10"></div>
        </motion.div>

        <div className="relative z-10 text-center px-6">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Kuldeep Khelwar
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xl md:text-2xl mb-8 text-gray-300"
            >
              WordPress Developer & Programmer
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="flex justify-center space-x-6"
            >
              {[
                { icon: <FaGithub />, href: "https://github.com/KuldeepKhelwar" },
                { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/kuldeep-khelwar-958688311/" },
                { icon: <FaInstagram />, href: "https://www.instagram.com/_kul_deep_02/" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className="text-2xl text-green-400 hover:text-green-300 transition-colors duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-64 h-64 mx-auto bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-6xl text-white"
                >
                  <img src="./kul3.png" alt="Kuldeep Khelwar" className="h-64 w-64 rounded-full"/>
                </motion.div>
              </div>
              <div>
                <p className="text-lg mb-6 leading-relaxed">
                  {showFullAbout
                    ? "Aspiring WordPress developer with 1.6 years of professional experience, seeking to enhance technical skills in a stable and encouraging work environment. Proficient in front-end development, C/C++ programming, and computer operations. I am passionate about creating efficient, user-friendly web solutions and continuously learning new technologies to stay current with industry trends. My goal is to work for a company that fosters skill development, enabling me to grow into the best developer possible."
                    : "Aspiring WordPress developer with 1.6 years of professional experience, seeking to enhance technical skills in a stable and encouraging work environment. Proficient in front-end development, C/C++ programming, and computer operations..."}
                </p>
                <div className="flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowFullAbout(!showFullAbout)}
                    className="flex items-center space-x-2 px-6 py-3 bg-green-500/20 hover:bg-green-500/30 rounded-lg transition-colors duration-300"
                  >
                    {showFullAbout ? <FaEyeSlash /> : <FaEye />}
                    <span>{showFullAbout ? "Read Less" : "Read More"}</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={downloadCV}
                    className="fle hidden items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-lg transition-all duration-300"
                  >
                    <FaDownload />
                    <span>Download CV</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="py-20 hidden px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Gallery
            </h2>
            <div className="relative">
              <div className="flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)}
                  className="p-3 rounded-full bg-green-500/20 hover:bg-green-500/30 transition-colors duration-300 mr-8"
                >
                  <FaChevronLeft />
                </motion.button>

                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="w-80 h-80 mx-auto rounded-lg overflow-hidden border-4 border-green-400/30 shadow-2xl">
                    <img
                      src={images[currentImage].src || "/placeholder.svg"}
                      alt={images[currentImage].alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="mt-4 text-lg text-gray-300">{images[currentImage].caption}</p>
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCurrentImage((prev) => (prev + 1) % images.length)}
                  className="p-3 rounded-full bg-green-500/20 hover:bg-green-500/30 transition-colors duration-300 ml-8"
                >
                  <FaChevronRight />
                </motion.button>
              </div>

              <div className="flex justify-center mt-8 space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentImage ? "bg-green-400" : "bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-50/5 dark:bg-green-900/5">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Technical Skills
            </h2>

            {/* Skills Categories */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {["Frontend", "CMS", "Programming", "Design", "General"].map(
                (category, categoryIndex) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50/10 dark:bg-green-900/10 p-6 rounded-lg border border-gray-200/20 dark:border-green-500/20"
                  >
                    <h3 className="text-xl font-bold text-green-400 mb-4">{category}</h3>
                    <div className="space-y-4">
                      {skills
                        .filter((skill) => skill.category === category)
                        .map((skill, index) => (
                          <div key={skill.name} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <span className="text-green-400">{skill.icon}</span>
                                <span className="font-medium">{skill.name}</span>
                              </div>
                              <span className="text-sm text-green-400 font-semibold">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full"
                              ></motion.div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </motion.div>
                ),
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Work Experience
            </h2>
            <div className="space-y-8">
              {[
                {
                  title: "WordPress Developer",
                  company: "EasyPort Logistic's Solution",
                  duration: "2 years",
                  location: "Indore",
                  description: "Developed and maintained WordPress websites.",
                },
                {
                  title: "Trainer",
                  company: "Code Batter Training Institute",
                  duration: "2022-Present",
                  location: "Indore",
                  description: "Training students in web development technologies.",
                },
                {
                  title: "C/C++ Programming Intern",
                  company: "Code Batter Training Institute",
                  duration: "2 months",
                  location: "Indore",
                  description: "Internship under Mr. Sanskar Vijayvargiya.",
                },
                {
                  title: "Computer Operator & Designer",
                  company: "SDG DESIGNS",
                  duration: "2021-2022",
                  location: "Indore",
                  description: "English typing (MS Word) and basic design work in Adobe Photoshop.",
                },
              ].map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-50/10 dark:bg-green-900/10 p-6 rounded-lg border border-gray-200/20 dark:border-green-500/20"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl text-green-400">
                      <FaBriefcase />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-green-400">{job.title}</h3>
                      <p className="text-lg font-semibold">{job.company}</p>
                      <p className="text-gray-400">
                        {job.duration} • {job.location}
                      </p>
                      <p className="mt-2">{job.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-gray-50/5 dark:bg-green-900/5">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="space-y-8">
              {[
                {
                  degree: "Front End Web Development",
                  institution: "Code Batter Training Institute",
                  duration: "2023-2024",
                  location: "Indore, MP",
                },
                {
                  degree: "B.Com + Computer",
                  institution: "Devi Ahilya Vishwavidyalaya",
                  duration: "2021-2024",
                  location: "Indore, MP",
                },
              ].map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-50/10 dark:bg-green-900/10 p-6 rounded-lg border border-gray-200/20 dark:border-green-500/20"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl text-green-400">
                      <FaGraduationCap />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-green-400">{edu.degree}</h3>
                      <p className="text-lg font-semibold">{edu.institution}</p>
                      <p className="text-gray-400">
                        {edu.duration} • {edu.location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

 {/* Call to Action */}
<section className="py-20 px-6">
  <div className="container mx-auto max-w-4xl text-center">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
        Let's Work Together
      </h2>
      <p className="text-xl mb-8 text-gray-500">
        Ready to bring your ideas to life? Let's create something amazing together.
      </p>
      <motion.a
        href="https://wa.me/919754030206?text=Hi%20Kuldeep,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-lg text-lg font-semibold text-white transition-all duration-300"
      >
        Chat on WhatsApp
      </motion.a>
    </motion.div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50/5 dark:bg-green-900/5">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Contact Information
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <FaPhone />,
                  title: "Phone",
                  info: "+91 97540 30206",
                },
                {
                  icon: <FaEnvelope />,
                  title: "Email",
                  info: "kuldeepkhelwar43@gmail.com",
                },
                {
                  icon: <FaMapMarkerAlt />,
                  title: "Address",
                  info: "402, Gulmarg Parishar-2, Indore, MP, India",
                },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-gray-50/10 dark:bg-green-900/10 rounded-lg border border-gray-200/20 dark:border-green-500/20"
                >
                  <div className="text-3xl text-green-400 mb-4">{contact.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{contact.title}</h3>
                  <p className="text-gray-500">{contact.info}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200/20 dark:border-green-500/20">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-500 mb-4">© 2025 Kuldeep Khelwar. All rights reserved.</p>
            <div className="flex justify-center space-x-6">
              {[
                { icon: <FaGithub />, href: "https://github.com/KuldeepKhelwar" },
                { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/kuldeep-khelwar-958688311/" },
                { icon: <FaInstagram />, href: "https://www.instagram.com/_kul_deep_02/" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className="text-xl text-green-400 hover:text-green-300 transition-colors duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
