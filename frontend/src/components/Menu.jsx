import React from 'react';
import { data } from '../restApi.json'; // Import menu data from JSON file

// Menu component
const Menu = () => {
  return (
    <>
      {/* Menu section */}
      <section className='menu' id='menu'>
        <div className="container">
          <div className="heading_section">
            {/* Section heading and description */}
            <h1 className="heading">POPULAR DISHES</h1>
            <p>Discover our most loved dishes that keep our customers coming back for more. From mouthwatering classics to chef's specialties, explore a curated selection of crowd-pleasers guaranteed to satisfy every palate.</p>
          </div>
          {/* Dishes container */}
          <div className="dishes_container">
            {/* Map through menu data to display dishes */}
            {data[0].dishes.map(element => (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} /> {/* Dish image */}
                <h3>{element.title}</h3> {/* Dish title */}
                <button>{element.category}</button> {/* Category button */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
