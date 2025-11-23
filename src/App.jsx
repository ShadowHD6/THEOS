import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import About from './components/About'
import Footer from './components/Footer'
import ProductDetails from './components/ProductDetails' // Import the new component

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // This function handles opening the modal
  const handleQuickView = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="App">
      <Header />
      <Hero />
      {/* Pass the function down to Products */}
      <Products onQuickView={handleQuickView} /> 
      <About />
      <Footer />

      {/* Render the Modal conditionally */}
      {selectedProduct && (
        <ProductDetails 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </div>
  )
}

export default App