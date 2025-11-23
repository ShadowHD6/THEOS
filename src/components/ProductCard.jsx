import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './ProductCard.css'

// 1. Accept onQuickView here
const ProductCard = ({ product, index, onQuickView }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div 
      className="product-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
    >
      <div className="product-image">
        <motion.div 
          className="image-placeholder"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Handle both real images and placeholder text strings */}
          {product.image.includes('/') || product.image.includes('http') ? (
             <img src={product.image} alt={product.name} className="product-img" />
          ) : (
             <span>{product.image}</span>
          )}

          <motion.div 
            className="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button 
              className="quick-view-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              // 2. Trigger the function on click
              onClick={() => onQuickView(product)}
            >
              Quick View
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">{product.price}</span>
          <motion.button 
            className="add-to-cart-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard