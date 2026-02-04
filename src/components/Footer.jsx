import React from 'react'
import { motion } from 'framer-motion'
import './Footer.css'
import TheosLogo from '../assets/Theos_Logo Silver.svg';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <motion.div 
          className="footer-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="footer-section">
  <img src={TheosLogo} alt="THEOS Logo" className="footer-logo-img" />
</div>

          
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Customer Care</h4>
            <ul className="footer-links">
              <li><a href="#">Size Guide</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Connect</h4>
            <div className="social-links">
              <motion.a 
  href="https://www.instagram.com/be_theos" 
  target="_blank" 
  rel="noopener noreferrer"
  whileHover={{ scale: 1.1 }}
  transition={{ duration: 0.2 }}
>
  Instagram
</motion.a>

              {/* <motion.a 
                href="#" 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                Twitter
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                Facebook
              </motion.a> */}
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2026 THEOS. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
