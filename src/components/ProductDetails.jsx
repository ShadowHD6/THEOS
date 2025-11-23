import React, { useState, useEffect } from 'react'; // Import useEffect
import { motion, AnimatePresence } from 'framer-motion';
import './ProductDetails.css';

const ProductDetails = ({ product, onClose }) => {
  // 1. Logic to use specific images array, OR fall back to main image repeated
  const gallery = product.images || [product.image, product.image, product.image];
  
  const [activeImage, setActiveImage] = useState(gallery[0]);
  const [selectedSize, setSelectedSize] = useState(null);

  // Reset active image when product changes
  useEffect(() => {
    if(product) setActiveImage(product.image);
  }, [product]);

  if (!product) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="pd-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="pd-modal"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="pd-close-btn" onClick={onClose}>&times;</button>
          
          <div className="pd-content">
            {/* LEFT SIDE (Same as before) */}
            <div className="pd-info">
              <h2 className="pd-title">{product.name}</h2>
              <div className="pd-meta">
                <span className="pd-price">{product.price}</span>
                <span className="pd-sku">SKU: THEOS-{product.id}</span>
              </div>

              {/* ... Keep Colors/Sizes/Description the same ... */}
               <div className="pd-selector">
                <p>Color Range:</p>
                <div className="pd-colors">
                  <div className="pd-color-swatch" style={{backgroundColor: '#1a1a1a'}}></div>
                  <div className="pd-color-swatch" style={{backgroundColor: '#555'}}></div>
                </div>
              </div>

              <div className="pd-selector">
                <p>Size Range:</p>
                <div className="pd-sizes">
                  {['S', 'M', 'L', 'XL'].map(size => (
                    <button 
                      key={size} 
                      className={`pd-size-btn ${selectedSize === size ? 'active' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pd-description">
                <p>{product.description}</p>
              </div>

              <motion.button className="pd-add-btn" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                ADD TO CART
              </motion.button>
            </div>

            {/* RIGHT SIDE (Uses gallery array) */}
            <div className="pd-visuals">
              <div className="pd-main-image">
                {/* Main Image - shows full size (contain) */}
                {activeImage && (activeImage.includes('/') || activeImage.includes('http')) ? (
                    <img src={activeImage} alt={product.name} />
                ) : (
                    <div className="pd-placeholder-img">{activeImage}</div>
                )}
              </div>

              {/* Carousel - Small squares */}
              <div className="pd-carousel">
                {gallery.map((img, i) => (
                  <div 
                    key={i} 
                    className={`pd-thumb ${activeImage === img ? 'active' : ''}`}
                    onClick={() => setActiveImage(img)}
                  >
                     {(img.includes('/') || img.includes('http')) ? <img src={img} /> : img}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductDetails;