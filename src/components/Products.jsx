import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ProductCard from './ProductCard'
import './Products.css'
import fashionImg from '../assets/maxresdefault (5).jpg'
import fushionImg from '../assets/test.jpg'

// 1. Accept onQuickView as a prop here
const Products = ({ onQuickView }) => {
  const products = [
    {
      id: 1,
      name: "Essential Tee",
      price: "$89",
      image: fashionImg, 
      // Added multiple images for the carousel
      images: [fashionImg, fushionImg, fashionImg], 
      description: "Premium cotton essential tee"
    },
    {
      id: 2,
      name: "Minimal Hoodie",
      price: "$149",
      image: fushionImg,
      // Added multiple images (mixed)
      images: [fushionImg, fashionImg, fushionImg],
      description: "Oversized comfort hoodie"
    },
    {
      id: 3,
      name: "Classic Jeans",
      price: "$199",
      image: "JEANS",
      // Placeholder strings repeated for now
      images: ["JEANS", "JEANS", "JEANS"],
      description: "Tailored denim perfection"
    },
    {
      id: 4,
      name: "Urban Jacket",
      price: "$299",
      image: "JACKET",
      images: ["JACKET", "JACKET", "JACKET"],
      description: "Weather-resistant urban jacket"
    },
    {
      id: 5,
      name: "Comfort Pants",
      price: "$129",
      image: "PANTS",
      images: ["PANTS", "PANTS", "PANTS"],
      description: "All-day comfort pants"
    },
    {
      id: 6,
      name: "Statement Coat",
      price: "$399",
      image: "COAT",
      images: ["COAT", "COAT", "COAT"],
      description: "Luxury statement coat"
    },
    {
      id: 7,
      name: "seven Product",
      price: "$129",
      image: "Seven",
      images: ["Seven", "Seven", "Seven"],
      description: "All-day comfort pants"
    },
    {
      id: 8,
      name: "eight Product",
      price: "$399",
      image: "eight",
      images: ["eight", "eight", "eight"],
      description: "Luxury statement coat"
    }
  ];

  const [visibleCount, setVisibleCount] = useState(4)

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4)
  }

  const visibleProducts = products.slice(0, visibleCount)

  return (
    <section id="products" className="products">
      <div className="products-container">
        <motion.div 
          className="products-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="products-title">Our Collection</h2>
          <p className="products-subtitle">
            Carefully curated pieces that define time and minimalism
          </p>
        </motion.div>

        <div className="products-grid">
          {visibleProducts.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              index={index}
              // 2. Pass the function down to the card
              onQuickView={onQuickView} 
            />
          ))}
        </div>

        {visibleCount < products.length && (
          <motion.button 
            className="hero-cta collection-btn"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={loadMore}
          >
            View Our Collection
          </motion.button>
        )}
      </div>
    </section>
  )
}

export default Products