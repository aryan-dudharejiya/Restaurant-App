import React from "react";
import aboutImage from "../assets/about.jpg"; // Import image
import Footer from "../components/Footer"; // Import Footer component

// About component
const About = () => {
  return (
    <div>
      {/* About section */}
      <section className="py-3 py-md-5">
        <div className="container">
          {/* Row for aligning content */}
          <div className="row align-items-center gy-3 gy-md-4 gy-lg-0">
            {/* Column for image */}
            <div className="col-12 col-lg-6 col-xl-5">
              {/* Image */}
              <img
                className="img-fluid rounded"
                loading="lazy"
                src={aboutImage}
                alt="About Our Restaurant"
              />
            </div>
            {/* Column for text content */}
            <div className="col-12 col-lg-6 col-xl-7">
              {/* Nested row for additional content */}
              <div className="row justify-content-center justify-content-xl-start">
                <div className="col-12 col-xl-10">
                  {/* Main heading */}
                  <h2 className="mb-3">Welcome to Take It Cheesy</h2>
                  {/* Lead paragraph */}
                  <p className="lead fs-4 text-secondary mb-3">
                    We are passionate about delivering exceptional dining
                    experiences.
                  </p>
                  {/* Main paragraphs */}
                  <p className="mb-4">
                    At Take It Cheesy, we strive to create memorable moments
                    through delicious food, warm hospitality, and a welcoming
                    ambiance. Our menu is carefully curated to cater to diverse
                    tastes, featuring a fusion of flavors from around the world.
                  </p>
                  <p className="mb-4">
                    Our restaurant is located in a vibrant neighborhood, making
                    it a perfect destination for food enthusiasts and families
                    alike. Enjoy our cozy indoor seating or dine al fresco in
                    our garden area.
                  </p>
                  {/* Nested row for location and opening hours */}
                  <div className="row gy-4 gy-md-0 gx-xxl-5">
                    {/* Location */}
                    <div className="col-12 col-md-6">
                      <div className="d-flex align-items-center">
                        <div className="me-4 text-primary">
                          {/* Location icon */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="#B30000"
                            className="bi bi-geo-alt"
                            viewBox="0 0 16 16"
                          >
                            <path d="M11.295 2.255a1.5 1.5 0 0 1 2.317 1.878l-4.2 9a1.5 1.5 0 0 1-2.742 0l-4.2-9a1.5 1.5 0 1 1 2.317-1.878L8 10.327l3.295-7.072a1.5 1.5 0 0 1 2.317 1.878l-4.2 9a1.5 1.5 0 0 1-2.742 0l-4.2-9a1.5 1.5 0 1 1 2.317-1.878L8 10.327z" />
                          </svg>
                        </div>
                        {/* Location content */}
                        <div>
                          <h2 className="h4 mb-3">Location</h2>
                          <p className="text-secondary mb-0">
                            Visit our restaurant and enjoy our culinary delights.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Opening hours */}
                    <div className="col-12 col-md-6">
                      <div className="d-flex align-items-center">
                        <div className="me-4 text-primary">
                          {/* Clock icon */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="#B30000"
                            className="bi bi-clock"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zm0 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm.5 4.5a.5.5 0 0 1 .5.5v2.75l2.375 1.425a.5.5 0 1 1-.5.866L8 9.522V5.5z" />
                          </svg>
                        </div>
                        {/* Opening hours content */}
                        <div>
                          <h2 className="h4 mb-3">Opening Hours</h2>
                          <p className="text-secondary mb-0">
                            We are open 24/7. So you can visit any time.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Render Footer component */}
      <Footer />
    </div>
  );
};

export default About;
