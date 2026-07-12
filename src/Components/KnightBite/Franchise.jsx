import { useState } from 'react';
import './franchise.css';
import img1 from '../../assets/images/1.svg'
import img2 from '../../assets/images/2.svg'
import img3 from '../../assets/images/3.svg'
import img4 from '../../assets/images/4.svg'
import img5 from '../../assets/images/5.svg'
import footer1 from '../../assets/images/footer-1.svg'
import footer2 from '../../assets/images/footer-2.svg'
import footer3 from '../../assets/images/footer-3.svg'
import franchiseVideo from '../../assets/videos/franchise_playback.mp4'


const benefits = [
  ['Low Investment', 'No prime roadside location or expensive interiors needed. A hygienic kitchen space and an office desk are enough.',img1],
  ['Low Maintenance', 'Focus on the essentials: hygiene, rent, staff and storage while the Knight Bite model supports the rest.',img2],
  ['Basic Skillset', 'With basic training, anyone can confidently step into the role. Materials and guidance are provided.',img3],
  ['In-house POS', 'Manage and track orders with ease through an interconnected POS and customer support system.',img4],
  ['Good Profit Margin', 'A lower establishment cost than traditional restaurants creates room for a rewarding profit margin.',img5],
];

const Franchise = () => {
  const [submitted, setSubmitted] = useState(false);
  const submitForm = (event) => { event.preventDefault(); setSubmitted(true); };

  return (
    <main className="franchise-page">
      <section className="franchise-hero">
        <video
          className="franchise-hero__video"
          autoPlay
          loop
          muted
          playsInline
          aria-label="Knight Bite franchise video"
        >
          <source src={franchiseVideo} type="video/mp4" />
        </video>
        <div className="franchise-hero__content">
          <p>Grow with Knight Bite</p>
          <h1>Franchise with Knight Bite</h1>
          <h2>Get started with the modern way of doing business.</h2>
          <a href="#apply">Apply now</a>
        </div>
      </section>

      <section className="franchise-mission">
        <p className="franchise-kicker">Our purpose</p>
        <h2>Mission and Vision</h2>
        <div>
          <p><strong>Mission</strong> To deliver the best food with the ultimate customer service.</p>
          <p><strong>Vision</strong> To be the most favourite food chain brand in the country and the world.</p>
        </div>
      </section>

      <section className="franchise-benefits">
        <header>
          <p className="franchise-kicker">Why partner with us</p>
          <h2>Key benefits of a Knight Bite franchise</h2>
        </header>
        <div className="franchise-benefits__grid">
          {benefits.map(([title, text, img]) => (
            <article key={title}>
              <img src={img} alt="" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="franchise-apply" id="apply">
        <div className="franchise-apply__intro">
          <p className="franchise-kicker">Start the conversation</p>
          <h2>Apply here</h2>
          <p>Tell us a little about your plans and our team will get in touch.</p>
        </div>
        <form onSubmit={submitForm}>
          <input required type="text" placeholder="First name *" />
          <input required type="text" placeholder="Last name *" />
          <input required type="tel" placeholder="Contact number *" />
          <input required type="email" placeholder="Email address *" />
          <input required className="franchise-form__full" type="text" placeholder="Target market (State / City) *" />
          <select required defaultValue=""><option value="" disabled>No. of outlets planned *</option><option>1 outlet</option><option>2–5 outlets</option><option>More than 5 outlets</option></select>
          <textarea className="franchise-form__full" placeholder="Tell us about your plans" rows="4" />
          <label className="franchise-check franchise-form__full"><input type="checkbox" /> Request a brochure for the interested market</label>
          <button type="submit" className="franchise-form__full">Send request</button>
          {submitted && <p className="franchise-success franchise-form__full">Thank you! Your request has been submitted.</p>}
        </form>
      </section>

      <section className="franchise-contact">
        <p className="franchise-kicker">We’re here to help</p>
        <h2>Franchise queries</h2>
        <div>
          <a href="#apply"><img src={footer1} alt="" />Franchise brochure</a>
          <a href="tel:08047192034"><img src={footer2} alt="" />080 4719 2034</a>
          <a href="mailto:franchise@knight-bite.com"><img src={footer3} alt="" />franchise@knight-bite.com</a>
        </div>
      </section>
    </main>
  );
};

export default Franchise;
