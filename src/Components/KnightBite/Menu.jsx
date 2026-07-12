import { useState } from 'react';
import './menu.css';

import burgerImage from '../../assets/images/burger.webp';
import wrapImage from '../../assets/images/banner-2.webp';
import drinkImage from '../../assets/images/banner.webp';
import dessertImage from '../../assets/images/banner-1.webp';

import allIcons from '../../assets/images/food-strip.webp'
import dessertIcon from '../../assets/images/desserts-icon.png'
import burgerIcon from '../../assets/images/burger-icon.png'
import drinksIcon from '../../assets/images/drinks-icon.png'
import startersIcon from '../../assets/images/starters-icon.png'
import wrapIcon from '../../assets/images/wrap-icon.png'
import maincourseIcon from '../../assets/images/main-course-icon.png'
import addIcon from '../../assets/images/add-icon.svg'

const menuItems = [
  { name: 'Knight Chicken Burger', category: 'Burgers', dietary: 'Non-veg', price: 189, description: 'Crispy chicken, cheese and our signature sauce.', image: burgerImage },
  { name: 'Classic Veg Burger', category: 'Burgers', dietary: 'Veg', price: 149, description: 'A satisfying vegetarian bite with fresh crunch.', image: burgerImage },
  { name: 'Double Cheese Burger', category: 'Burgers', dietary: 'Veg', price: 179, description: 'A rich, cheesy burger made for big cravings.', image: burgerImage },
  { name: 'Fiery Chicken Wrap', category: 'Wraps', dietary: 'Non-veg', price: 179, description: 'Spiced chicken folded into a warm, soft wrap.', image: wrapImage },
  { name: 'Veggie Crunch Wrap', category: 'Wraps', dietary: 'Veg', price: 159, description: 'Fresh veggies and a tangy sauce in every bite.', image: wrapImage },
  { name: 'Loaded Fries', category: 'Fries / Starters', dietary: 'Veg', price: 129, description: 'Golden fries layered with seasoning and flavour.', image: wrapImage },
  { name: 'Crispy Chicken Bites', category: 'Fries / Starters', dietary: 'Non-veg', price: 169, description: 'Crunchy chicken bites with a bold seasoning.', image: burgerImage },
  { name: 'Knight Mojito', category: 'Drinks', dietary: 'Veg', price: 99, description: 'A chilled refresher for every late-night craving.', image: drinkImage },
  { name: 'Chocolate Shake', category: 'Drinks', dietary: 'Veg', price: 119, description: 'Smooth, rich and made for a sweet finish.', image: drinkImage },
  { name: 'Cold Coffee', category: 'Drinks', dietary: 'Veg', price: 109, description: 'Creamy cold coffee for a late-night boost.', image: drinkImage },
  { name: 'Brownie Blast', category: 'Desserts', dietary: 'Veg', price: 129, description: 'A decadent chocolate treat to end on a high.', image: dessertImage },
  { name: 'Chicken Rice Bowl', category: 'Main Course', dietary: 'Non-veg', price: 219, description: 'A hearty meal bowl packed with bold flavour.', image: wrapImage },
  { name: 'Veggie Rice Bowl', category: 'Main Course', dietary: 'Veg', price: 189, description: 'A filling bowl of vegetables and flavour.', image: wrapImage },
];

const categories = [
  { name: 'All', icon: allIcons, color: '#d91d59' },
  { name: 'Burgers', icon: burgerIcon, color: '#dc3535' },
  { name: 'Fries / Starters', icon: startersIcon, color: '#e98a20' },
  { name: 'Main Course', icon: maincourseIcon, color: '#9b4f9e' },
  { name: 'Drinks', icon: drinksIcon, color: '#3187c7' },
  { name: 'Wraps', icon: wrapIcon, color: '#5d9d49' },
  { name: 'Desserts', icon: dessertIcon, color: '#c65b93' },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [dietaryFilter, setDietaryFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const visibleItems = menuItems.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesDietary = dietaryFilter === 'All' || item.dietary === dietaryFilter;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.trim().toLowerCase());

    return matchesCategory && matchesDietary && matchesSearch;
  });
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const addToCart = (item) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((cartItem) => cartItem.name === item.name);
      if (existingItem) {
        return currentCart.map((cartItem) => cartItem.name === item.name
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem);
      }
      return [...currentCart, { ...item, quantity: 1 }];
    });
    setOrderPlaced(false);
  };

  const changeQuantity = (name, amount) => {
    setCart((currentCart) => currentCart.flatMap((item) => {
      if (item.name !== name) return [item];
      const quantity = item.quantity + amount;
      return quantity > 0 ? [{ ...item, quantity }] : [];
    }));
  };

  const placeOrder = (event) => {
    event.preventDefault();
    setOrderPlaced(true);
    setCart([]);
    setIsCheckingOut(false);
  };

  return (
    <main className="menu-page">
      <section className="menu-hero">
        <img src={wrapImage} alt="Knight Bite food spread" />
        <div className="menu-hero__content">
          <p>Late-night cravings, sorted</p>
          <h1>The Knight Bite Menu</h1>
          <span>Pick your bite. We’ll bring the flavour.</span>
        </div>
      </section>

      <section className="menu-content">
        <div className="menu-discovery">
          <header className="menu-heading">
            <p className="menu-kicker">Explore our favourites</p>
            <h2>What are you craving?</h2>
          </header>

          <div className="menu-filters" role="tablist" aria-label="Menu categories">
            {categories.map((category) => (
              <button
                type="button"
                role="tab"
                aria-selected={activeCategory === category.name}
                className={activeCategory === category.name ? 'is-active' : ''}
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                style={{ '--category-color': category.color }}
              >
                <span className="menu-filter__icon">
                  <img src={category.icon} alt="" />
                </span>
                <span>{category.name}</span>
                {category.name !== 'All' && <img className="menu-filter__add" src={addIcon} alt="" />}
              </button>
            ))}
          </div>

          <div className="menu-tools">
            <label className="menu-search">
              <span className="sr-only">Search menu items</span>
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search burgers, wraps, drinks..."
              />
            </label>
            <div className="dietary-filters" aria-label="Dietary preference">
              {['All', 'Veg', 'Non-veg'].map((filter) => (
                <button
                  type="button"
                  key={filter}
                  className={dietaryFilter === filter ? 'is-active' : ''}
                  onClick={() => setDietaryFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="menu-grid">
          {visibleItems.map((item) => (
            <article className="menu-card" key={item.name}>
              <img src={item.image} alt={item.name} />
              <div className="menu-card__body">
                <div className="menu-card__meta"><p>{item.category}</p><span className={item.dietary === 'Veg' ? 'is-veg' : 'is-nonveg'}>{item.dietary}</span></div>
                <h3>{item.name}</h3>
                <span>{item.description}</span>
                <div className="menu-card__footer"><strong>₹{item.price}</strong><button type="button" onClick={() => addToCart(item)}>Add</button></div>
              </div>
            </article>
          ))}
        </div>
        {visibleItems.length === 0 && <p className="menu-empty">No menu items match your search. Try another item or filter.</p>}
      </section>

      <button className="cart-trigger" type="button" onClick={() => setIsCartOpen(true)} aria-label={`Open cart with ${cartCount} items`}>
        Cart <span>{cartCount}</span>
      </button>

      {isCartOpen && <button className="cart-backdrop" type="button" aria-label="Close cart" onClick={() => setIsCartOpen(false)} />}
      <aside className={`cart-drawer ${isCartOpen ? 'is-open' : ''}`} aria-label="Shopping cart" aria-hidden={!isCartOpen}>
        <header className="cart-drawer__header">
          <div><p>Your order</p><h2>Cart ({cartCount})</h2></div>
          <button type="button" onClick={() => setIsCartOpen(false)} aria-label="Close cart">×</button>
        </header>

        {orderPlaced ? (
          <div className="cart-success"><h3>Order confirmed!</h3><p>Your late-night bite is being prepared. This is a front-end demo, so no payment was taken.</p><button type="button" onClick={() => { setOrderPlaced(false); setIsCartOpen(false); }}>Continue browsing</button></div>
        ) : isCheckingOut ? (
          <form className="checkout-form" onSubmit={placeOrder}>
            <button type="button" className="checkout-back" onClick={() => setIsCheckingOut(false)}>← Back to cart</button>
            <h3>Checkout</h3>
            <label>Name<input required name="name" type="text" placeholder="Your name" /></label>
            <label>Phone<input required name="phone" type="tel" placeholder="Phone number" /></label>
            <label>Delivery address<textarea required name="address" rows="3" placeholder="House no., street, area" /></label>
            <p className="checkout-total">Total <strong>₹{cartTotal}</strong></p>
            <button type="submit">Place demo order</button>
          </form>
        ) : cart.length === 0 ? (
          <div className="cart-empty"><p>Your cart is empty.</p><button type="button" onClick={() => setIsCartOpen(false)}>Browse menu</button></div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => <article className="cart-item" key={item.name}>
                <img src={item.image} alt="" />
                <div><h3>{item.name}</h3><p>₹{item.price}</p><div className="cart-quantity"><button type="button" onClick={() => changeQuantity(item.name, -1)} aria-label={`Remove one ${item.name}`}>−</button><span>{item.quantity}</span><button type="button" onClick={() => changeQuantity(item.name, 1)} aria-label={`Add one ${item.name}`}>+</button></div></div>
              </article>)}
            </div>
            <div className="cart-summary"><p>Total <strong>₹{cartTotal}</strong></p><button type="button" onClick={() => setIsCheckingOut(true)}>Checkout</button></div>
          </>
        )}
      </aside>

      <section className="menu-order">
        <h2>Your midnight meal is a tap away.</h2>
        <p>Download the Knight Bite app and order your favourites until 4 am.</p>
        <a href="#top">Order on the app</a>
      </section>
    </main>
  );
};

export default Menu;
