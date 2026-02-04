import React from 'react'
import { motion } from 'framer-motion'
import aboutImg from '../assets/About.png'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="about-title">About THEOS</h2>
            <p className="about-description">
              THEOS represents the intersection of minimalist design and premium quality. 
              Our philosophy centers around creating timeless pieces that transcend seasonal trends, 
              focusing on exceptional craftsmanship and sustainable practices.
            </p>
            <p className="about-description">
              Every piece in our collection is thoughtfully designed and ethically produced, 
              ensuring that you not only look good but feel good about your choices.
            </p>
            <motion.button 
              className="about-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
           <img 
  src={aboutImg} 
  alt="THEOS craftsmanship" 
  className="about-img"
/>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
