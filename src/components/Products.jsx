const importAll = (modules) =>
  Object.values(modules).map((mod) => mod.default)

const hoodieImages = importAll(
  import.meta.glob('../assets/Hoodie/*.{png,jpg,jpeg,svg}', { eager: true })
)

const pufferImages = importAll(
  import.meta.glob('../assets/Puffer/*.{png,jpg,jpeg,svg}', { eager: true })
)

const beanieImages = importAll(
  import.meta.glob('../assets/Beanie/*.{png,jpg,jpeg,svg}', { eager: true })
)

const socksImages = importAll(
  import.meta.glob('../assets/Socks/*.{png,jpg,jpeg,svg}', { eager: true })
)

const jeansImages = importAll(
  import.meta.glob('../assets/Jeans/*.{png,jpg,jpeg,svg}', { eager: true })
)

const longImages = importAll(
  import.meta.glob('../assets/Long/*.{png,jpg,jpeg,svg}', { eager: true })
)

const shirtImages = importAll(
  import.meta.glob('../assets/Shirt/*.{png,jpg,jpeg,svg}', { eager: true })
)
const scarfImages = importAll(
  import.meta.glob('../assets/Scarf/*.{png,jpg,jpeg,svg}', { eager: true })
)

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ProductCard from './ProductCard'
import './Products.css'
// import fashionImg from '../assets/Hoodie_Prv.png'
// import fushionImg from '../assets/Hoodie_01.png'

// 1. Accept onQuickView as a prop here
const Products = ({ onQuickView }) => {
  const products = [
    {
      id: 1,
      name: "Oversized Denim Hoodie",
      price: "120 TND",
      image: hoodieImages[0], 
      // Added multiple images for the carousel
      images: hoodieImages, 
      description: "Premium cotton Oversized Washed Denim Unisex Hoodie"
    },
    {
      id: 2,
      name: "Denim Puffer Jacket",
      price: "200 TND",
      image: pufferImages[0],
      // Added multiple images (mixed)
      images: pufferImages,
      description: "One of a kind denim puffer jacket"
    },
    {
      id: 3,
      name: "Beanie",
      price: "60 TND",
      image: beanieImages[0],
      // Added multiple images (mixed)
      images: beanieImages,
      description: "Nice beanie in a classic design Perfect keeping your head and ears warm during winter training."
    },
    {
      id: 4,
      name: "Socks",
      price: "60 TND",
      image: socksImages[0],
      images: socksImages,
      description: "3 color Combo Socks for all seasons, The rib edge and support under the foot gives a nice and tight fit. The toe and heel area are the areas who mostly are subjects to wear. Therefore the training socks have been strengthened to give an increased durability"
    },
    {
      id: 5,
      name: "Oversized Jeans",
      price: "100 TND",
      image: jeansImages[0],
      images: jeansImages,
      description: "The Big Baggy Black jeans feature a distinctive wide cut with raw ripped hemline, intentionally accented with visible edges. Made entirely from 100% cotton black denim and with the utmost attention to detail and our craftsmanship"
    },
    {
      id: 6,
      name: "CLAVICULE LONG SLEEVE",
      price: "90 TND",
      image: longImages[0],
      images: longImages,
      description: "A second-skin long-sleeved piece, the Clavicule is crafted from a dense yet supple ribbed jersey, blending the softness of lyocell with the dry structure of cotton."
    },
    {
      id: 7,
      name: "Oversized T-Shirt",
      price: "129 TND",
      image: shirtImages[0],
      images: shirtImages,
      description: "Oversized T-Shirts Heavy Cotton Washed Summer Vintage Tee Loose Fit Short Sleeve Casual Shirts"
    },
    {
      id: 8,
      name: "Scarf",
      price: "80 TND",
      image: scarfImages[0],
      images: scarfImages,
      description: "The premium version of the traditional jacquard knit options. Allows for more clarity and cleaner logos compared to the Classic Knit."
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
