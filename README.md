# 🍔 Knight Bite Replica

## 📌 Project Overview

Knight Bite Replica is a responsive food-ordering interface inspired by the Knight Bite website. It recreates a modern late-night food brand experience with interactive browsing, menu filtering, a front-end cart, checkout feedback, and a franchise enquiry page.

The project demonstrates how **React, routing, component state, responsive CSS, and local media assets** can be combined to create a polished multi-page food-ordering user interface.

> This is an educational and portfolio project. It is not affiliated with, endorsed by, or an official service of Knight Bite.

---

## 🎯 Problem Statement

Build a responsive food-ordering website that allows visitors to:

* Explore brand, menu, and franchise pages
* Search and filter menu items
* Add products to a cart and complete a front-end checkout flow
* Use the website comfortably on desktop and mobile screens
* Switch between light and dark themes

---

## 🏗️ Technical Architecture

```text
Local Image / Video Assets → React Components → React Router → Interactive UI State → Vite Production Build → Vercel Deployment
```

### Workflow

1. Render route-based pages with React Router
2. Display local images, icons, and video through Vite assets
3. Filter menu data with component state
4. Manage cart items and checkout feedback on the client side
5. Persist the selected theme in browser local storage
6. Build and deploy the static React application to Vercel

---

## 🧩 Tech Stack

| Category | Tools Used |
| --- | --- |
| Frontend | React 19 |
| Routing | React Router 7 |
| Build Tool | Vite 8 |
| Styling | CSS and responsive media queries |
| Code Quality | Oxlint |
| Deployment | Vercel |

---

## ✅ Prerequisites

* Node.js `20.19+` or `22.12+`
* npm
* A modern web browser
* A Vercel account for deployment

---

## 🚀 Project Objectives

By working with this project, you can learn how to:

* Build a multi-page React application
* Create responsive navigation and mobile menus
* Manage UI state with React hooks
* Filter and search a product menu
* Create a front-end shopping cart flow
* Use local assets in a Vite project
* Deploy a React single-page application on Vercel

---

## 🔄 Application Flow

### 1️⃣ Navigation

* Browse Home, About, Menu, and Franchise pages
* Use the responsive hamburger menu on smaller screens
* Navbar remains readable while scrolling

### 2️⃣ Menu Discovery

* Browse menu categories
* Search menu items by name
* Filter items by Veg and Non-veg preference
* View item prices and dietary labels

### 3️⃣ Cart and Checkout

* Add menu items to the cart
* Increase or decrease quantities
* View the total amount
* Submit a front-end checkout form
* Receive an order-confirmation message

### 4️⃣ Forms and Theme

* Submit contact and franchise forms with browser validation
* Toggle light/dark mode
* Theme selection remains saved after refresh

---

## 📊 Features

✔ Responsive Home, About, Menu, and Franchise pages  
✔ Scroll-aware transparent navbar  
✔ Mobile hamburger navigation  
✔ Light/dark theme toggle with local storage persistence  
✔ Searchable menu with category and dietary filters  
✔ Menu prices, Veg/Non-veg labels, and local image assets  
✔ Front-end cart drawer and checkout experience  
✔ Contact and franchise form validation feedback  
✔ Vercel rewrite configuration for direct route access  

---

## 📁 Repository Structure

```text
knightbite_replica/
│
├── src/
│   ├── Components/KnightBite/  # React pages, navbar, and component styles
│   ├── assets/images/          # Local images, icons, logos, and app badges
│   ├── assets/videos/          # Franchise hero video
│   ├── App.jsx                 # Theme state and application shell
│   └── main.jsx                # React entry point
│
├── vercel.json                 # SPA route rewrites for Vercel
├── package.json                # Scripts and dependencies
└── README.md
```

---

## 🌐 Live Application

* 🚀 Vercel Deployment: **https://knightbite-v1.vercel.app/**

  ```text
  https://your-project-name.vercel.app
  ```

---

## 📈 Use Cases

* React portfolio project
* Front-end food-ordering UI demonstration
* Responsive design practice
* React Router learning project
* Client-side cart and filtering demonstration

---

## ⚠️ Current Limitations

* Checkout is a UI demonstration only; no payment or order data is sent.
* Contact and franchise forms display local success feedback only.
* Store badges lead to public store landing pages, not a published app listing.

---

## 🤝 Contribution

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a pull request

---

## 👨‍💻 Author

**Balaji Kota**  
Aspiring Python-Full Stack Developer | React | JavaScript | Responsive UI Design

---

## 📜 License

This project is intended for educational and portfolio purposes.
