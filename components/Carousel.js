import React, { useState } from 'react';

export function Carousel() {
  const [cart, setCart] = useState([]);

  const handleBuyNowClick = () => {
    setCart([...cart, { id: 1, name: 'Product Name' }]); // Example product details
    alert('Added to cart!');
  };

  return (
    <div className="carousel w-[1216px] h-[600px] relative">
      <div id="slide1" className="carousel-item relative w-full bg-slate-400">
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
          <a href="#slide4" className="btn btn-circle" aria-label="Previous Slide">❮</a>
          <a href="#slide2" className="btn btn-circle" aria-label="Next Slide">❯</a>
        </div>
        <div className="absolute bottom-5 left-5 bg-white p-4 shadow-lg">
          <div className="card bg-primary text-primary-content w-96">
            <div className="card-body w-[598px] h-[152px] ml-3 mb-3">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn" onClick={handleBuyNowClick}>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
