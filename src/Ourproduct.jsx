import React, { useState } from 'react';
import './Ourproduct.css'

const products = [
    { id: 1, title: 'Lessons in Chemistry', description: 'A captivating and humorous novel about a female scientist in the 1960s who',rating:"★★★★☆", price: '$19.99', category: 'fantasy', image:"https://images.penguinrandomhouse.com/cover/9780385547345" },
    { id: 2, title: 'The Covenant of Water', description: 'This sweeping family saga spans several decades in Kerala, India, exploring',rating:"★★★★☆", price: '$29.99', category: 'action', image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1687600746i/180357146.jpg" },
    { id: 3, title: 'The Wishing Game', description: 'A heartwarming story about a woman who enters a whimsical competition to',rating:"★★★★☆", price: '$39.99', category: 'drama', image: "https://images-na.ssl-images-amazon.com/images/I/81ANaZRiSpL._AC_UL210_SR210,210_.jpg" },
    { id: 4, title: 'Happy Place', description: 'A romantic comedy that follows a couple who pretends to still be together for',rating:"★★★★☆", price: '$49.99', category: 'fantasy', image: "https://blackwells.co.uk/jacket/500x500/9780241995365.jpg" },
    { id: 5, title: 'Fourth Wing', description: 'A gripping fantasy novel set in a world where dragons exist and the stakes of',rating:"★★★★☆", price: '$59.99', category: 'action', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQORKZIako9nHtf7ykmv1mpXbo990yD6_lgeO3S-9EX3P1h2LiIn39DV5jo-l8CWbJQESY&usqp=CAU" },
    { id: 6, title: 'The Invisible Life of Addie LaRue', description: 'This enchanting tale follows a young woman who makes a Faustian bargain to',rating:"★★★★☆", price: '$69.99', category: 'drama', image: "https://www.amazon.com/images/P/B084357H23.01.LZZZZZZZ.jpg" },
  ];

const Ourproduct = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filterProducts = (category) => {
      setSelectedCategory(category);};
      const filteredProducts = selectedCategory === 'all'
      ? products
      : products.filter(product => product.category === selectedCategory);
  

  return (
    <div className="product-section">
    <h2 className="section-title">Our Products</h2>
    <div className="filter-menu">
      <button className="filter-button" onClick={() => filterProducts('all')}>All</button>
      <button className="filter-button" onClick={() => filterProducts('fantasy')}>Fantasy</button>
      <button className="filter-button" onClick={() => filterProducts('action')}>Action</button>
      <button className="filter-button" onClick={() => filterProducts('drama')}>Drama</button>
    </div>

    <div className="product-container">
      {filteredProducts.map(product => (
        <div className="product-card" key={product.id} data-category={product.category}>
          <img  className="imgp"src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>{product.rating}</p>
          <span>{product.price}</span>
          
        </div>
      ))}
    </div>
  </div>
);
};


export default Ourproduct
