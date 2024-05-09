import React from 'react';
import { data } from '../restApi.json'; // Import data from JSON file

// Qualities component
const Qualities = () => {
  return (
    <>
      {/* Qualities section */}
      <section className='qualities' id='qualities'>
        <div className="container">
          {/* Map through qualities data to display each quality */}
          {data[0].ourQualities.map(element => (
            <div className='card' key={element.id}>
              <img src={element.image} alt={element.title} /> {/* Quality image */}
              <p className='title'>{element.title}</p> {/* Quality title */}
              <p className='description'>{element.description}</p> {/* Quality description */}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Qualities;
