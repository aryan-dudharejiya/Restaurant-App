import React from 'react';
import { data } from '../restApi.json'; // Import data from JSON file

// WhoAreWe component
const WhoAreWe = () => {
  return (
    // "Who Are We" section
    <section className='who_are_we' id='who_are_we'>
      <div className="container">
        {/* Text banner */}
        <div className="text_banner">
          {/* Render first two elements from 'who_we_are' array */}
          {data[0].who_we_are.slice(0, 2).map(element => (
            <div className="card" key={element.id}>
              <h1 className='heading' style={{ fontWeight: "300" }}>{element.number}</h1>
              <p>{element.title}</p>
            </div>
          ))}
        </div>
        {/* Image banner */}
        <div className="image_banner">
          <img className='gradient_bg' src="center.svg" alt="gradientBg" /> {/* Gradient background */}
          <img src="whoweare.png" alt="food" /> {/* Image depicting food */}
        </div>
        {/* Additional text banner */}
        <div className="text_banner">
          {/* Render remaining elements from 'who_we_are' array */}
          {data[0].who_we_are.slice(2).map(element => (
            <div className="card" key={element.id}>
              <h1 className='heading' style={{ fontWeight: "300" }}>{element.number}</h1>
              <p>{element.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
