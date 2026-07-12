import { useState } from 'react';
import './home.css';

import heroImage from '../../assets/images/app-link-background.svg';
import playStore from '../../assets/images/google-play-badge.svg';
import appStore from '../../assets/images/ios-store.svg';
import features from '../../assets/images/features.jpeg';
import bannerImage from '../../assets/images/banner-1.webp';
import menuImage from '../../assets/images/banner-2.webp';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleContactSubmit = (event) => {
    event.preventDefault();
    setContactSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <>
      <section className="container">
        <img src={heroImage} alt="Hero Banner" />

        <div className="overlay">
          <h1>TAP INTO TASTE</h1>

          <div className="store">
            <a href="https://play.google.com/store" aria-label="Download on Google Play">
              <img src={playStore} alt="Google Play" />
            </a>

            <a href="https://www.apple.com/app-store/" aria-label="Download on the App Store">
              <img src={appStore} alt="App Store" />
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container2">
        <img src={features} alt="Features" />
      </section>

      {/* Banner 1 */}
      <section className="container3">
        <img src={bannerImage} alt="Enjoy Food" />

        <div className="overlay">
          <h1>ENJOY FOOD ENJOY LIFE</h1>
        </div>
      </section>

      {/* Banner 2 */}
      <section className="container4">
        <img src={menuImage} alt="Menu Banner" />

        <div className="overlay">
          <h1>PIZZAS, BURGERS, SHAKES AND MANY MORE</h1>

          <button className="menu-btn">
            <NavLink to='/menu' >SEE FULL MENU</NavLink>
          </button>
        </div>
      </section>

      {/* Contact */}
      <section className="contacts">

        <div className="contact">

          <h2>Contact Us</h2>

          <p>
            <strong>Email :</strong> tasxxxxxbite@gmail.com
          </p>

          <p>
            <strong>Phone :</strong> +91 98107XXXX
          </p>

          <p>
            <strong>Timings :</strong> Available from 9 AM to 11 PM
          </p>

          <h3>Main Branch</h3>

          <p>Chikkalsandra, Bengaluru - 560061</p>

          <h3>Locations</h3>

          <p>Bengaluru, Mysore, Udaygiri, Rishikesh</p>

        </div>

        <div className="connect">

          <h2>Get In Touch</h2>

          <form onSubmit={handleContactSubmit}>

            <input
              type="text"
              placeholder="Your Name"
              aria-label="Your name"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              aria-label="Your email"
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              aria-label="Phone number"
              required
            />

            <button type="submit">
              Submit
            </button>
            {contactSubmitted && (
              <p className="form-success" role="status">Thanks! We&apos;ll get in touch shortly.</p>
            )}

          </form>

        </div>

      </section>

      {/* Footer */}
      <footer className="footer">

        <h4>
          © 2026 Balaji Kota. This project is a frontend clone of KnightBite created solely for learning and portfolio purposes. It is not affiliated with or endorsed by KnightBite.
        </h4>

      </footer>
    </>
  );
};

export default Home;
