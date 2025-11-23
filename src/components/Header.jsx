import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Header.css'
import TheosLogo from '../assets/Theos_Logo Silver.svg';


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header 
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="nav">
     <motion.div 
  className="logo"
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.2 }}
>
  <img src={TheosLogo} alt="THEOS Logo" className="logo-img" />
</motion.div>




        
        <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <motion.a 
            href="#home" 
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            Home
          </motion.a>
          <motion.a 
            href="#products" 
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            Products
          </motion.a>
          <motion.a 
            href="#about" 
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            About
          </motion.a>
          <motion.a 
            href="#contact" 
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            Contact
          </motion.a>
        </div>

        <motion.button 
          className="cart-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Cart (0)
        </motion.button>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </motion.header>
  )
}

export default Header
