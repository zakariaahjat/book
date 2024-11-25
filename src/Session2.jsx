import React, { useState } from "react";
import "./Session2.css";
const Session2 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
      { id: 1, title: "James by Percival Everett", price:"28.99$",rating:"★★★★☆", description: "A reimagining of Adventures of Huckleberry Finn, narrated by Jim, showcasing a powerful character with surprising details.", imgSrc: "https://m.media-amazon.com/images/I/51enToLFT1L._SL500_.jpg" },
      { id: 2, title: "Beautyland by Marie-Helene Bertino",price:"26.99$",rating:"★★★★☆ ", description: "A humorous yet poignant novel exploring the absurdities of modern life.",  imgSrc: "https://static01.nyt.com/images/2024/01/09/books/16marie-helene-bertino-cover/16marie-helene-bertino-cover-articleLarge.jpg?quality=75&auto=webp&disable=upscale"  },
      { id: 3, title: "Good Material by Dolly Alderton",price:"24.99$",rating:"★★★★☆", description: "Description: A touching exploration of love and friendship, blending humor with depth.", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvLBejv2T_VIQHrgNyKvI5CsjC0q1JUNohMA&s" },
      { id: 4, title: "Knife: Meditations After an Attempted Murder by Salman Rushdie",price:"30.99$",rating:"★★★★★", description: "A candid memoir reflecting on Rushdie's life and the aftermath of an assassination attempt.", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRplOfEJliPE5Tkj1F1jNxo7KWlpnqeyX-h4g&s" },
      { id: 5, title: "The Hunter by Tana French",price:"27.99$",rating:"★★★★☆", description: "A gripping psychological thriller about crime and morality.", imgSrc: "https://i.ebayimg.com/images/g/QgAAAOSwUoZmRoUU/s-l400.png" },
      { id: 6, title: "The Wide Wide Sea: Imperial Ambition by Hampton Sides",price:"28.99$",rating:"★★★★☆", description: "An exploration of Captain James Cook's life and voyages, filled with rich historical detail.", imgSrc: "https://i.ebayimg.com/images/g/ZGgAAOSwiAVmJF4h/s-l400.jpg" },
    ];
  
    const cardWidth = 300 + 20; // Card width + margin (adjust as needed)
  
    // Function to handle sliding cards
    const handleSlide = (direction) => {
      if (direction === "prev") {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
      } else if (direction === "next") {
        setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
      }
    };
  
    return (
      <div className="slider-container">
        <br/>
        <br/>
    <center> <h1 className="Tittles2">Best book sells</h1>
    <br/>
    <p className="ppps2">These books have made a significant impact in 2024, drawing in readers with their engaging themes and well-crafted narratives. <br/>
        You can explore more about them on platforms like Amazon or Goodreads for reader reviews and additional details.</p>
    </center>
    <br/>

      <br/>
      <br/>
        <div
          className="slider"
          style={{ transform: `translateX(${-currentIndex * cardWidth}px)` }}
        >
          {cards.map((card) => (
            <div className="cards2" key={card.id}>
              <img className="imgs2" src={card.imgSrc} alt={card.title} />
              <h3>{card.title}</h3>
              <p class="price">$19.99</p>
              <p class="rating">★★★★☆</p>
              <p>{card.description}</p>
              <br/>
             <center><div className="card-buttons">
              <button className="add-to-cart">Add to Cart</button>
            </div></center> 
            </div>
          ))}
        </div>
        <button className="prev" onClick={() => handleSlide("prev")}>&#10094;</button>
        <button className="next" onClick={() => handleSlide("next")}>&#10095;</button>
        <br/>
        <br/>
        <center><div >
              <button className="See-more">See More</button>
            </div></center> 
        <br/>
      </div>
    );
  };


export default Session2


  

