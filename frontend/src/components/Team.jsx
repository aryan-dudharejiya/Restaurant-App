import React from "react";
import { data } from "../restApi.json"; // Import data from JSON file

// Team component
const Team = () => {
  return (
    // Team section
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          {/* Section heading and description */}
          <h1 className="heading">OUR TEAM</h1>
          <p>Get the best food from the best chefs</p>
        </div>
        {/* Team members container */}
        <div className="team_container">
          {/* Map through team data to display each team member */}
          {data[0].team.map((element) => (
            <div className="card" key={element.id}>
              <img src={element.image} alt={element.name} /> {/* Team member image */}
              <h3>{element.name}</h3> {/* Team member name */}
              <p>{element.designation}</p> {/* Team member designation */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
