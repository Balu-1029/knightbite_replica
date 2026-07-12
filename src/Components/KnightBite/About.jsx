import './about.css';

import banner from '../../assets/images/banner.webp';
import food1 from '../../assets/images/app-menu.webp';
import food2 from '../../assets/images/burger.webp';

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="about-container">
        <img src={banner} alt="About Banner" />

        <div className="about-overlay">
          <h1>
            Taste The Bite is a cloud kitchen that delivers delicious food
            with equal emphasis on quality, technology, and fast delivery.
          </h1>
        </div>
      </section>

      {/* About Content */}

      <section className="about-box">

        <div className="about-row">

          <div className="about-text">
            <p>
              Customers quickly connected with our seamless ordering
              experience, smart interface, and fast delivery system.
              Every meal is prepared with fresh ingredients and delivered
              hot to your doorstep.
            </p>
          </div>

          <div className="about-image">
            <img src={food1} alt="Food" />
          </div>

        </div>

        <div className="about-row reverse">

          <div className="about-image">
            <img src={food2} alt="Fast Food" />
          </div>

          <div className="about-text">
            <p>
              Going forward, Taste The Bite aims to expand across new cities,
              delivering consistent quality, speed, and customer experience
              while making every order memorable.
            </p>
          </div>

        </div>

      </section>

      {/* Footer */}

      <footer className="about-footer">
        <h4>© 2026 Taste The Bite. All Rights Reserved.</h4>
      </footer>
    </>
  );
};

export default About;
