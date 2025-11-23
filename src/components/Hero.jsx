import React from 'react'
import { motion } from 'framer-motion'
import './Hero.css'
import TheosImage from '../assets/models fashion.jpg'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          THEOS
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Minimalist Fashion for the Modern Soul
        </motion.p>
        
        <motion.p 
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Discover our curated collection of premium fashion pieces designed for those who appreciate sustainability, simplicity and elegance.
        </motion.p>
        
        <motion.button 
          className="hero-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
        >
          Shop Collection
        </motion.button>
      </div>
      
      <motion.div 
  className="hero-image"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1, delay: 0.3 }}
>
  <img src={TheosImage} alt="Theos" className="hero-image" />
</motion.div>
    </section>
  )
}

export default Hero
