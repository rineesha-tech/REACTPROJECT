import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

function HomePage() {

    const navigate = useNavigate()
  return (
    <div>
      <header>
        <div class="logo">
            <h1>Restaurant Manager</h1>
        </div>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li onClick={() => navigate('/login')}><a>LogOut</a></li>
            </ul>
        </nav>
    </header>

   
    <section id="home" class="welcome-banner">
        <div class="banner-content">
            <h2>Welcome to Our Restaurant Management System</h2>
            <p>Manage your restaurant operations with ease and efficiency.</p>
            <a href="#menu" class="cta-button">View Menu</a>
        </div>
    </section>

    
    <section id="menu" class="menu-section">
        <h2>Our Featured Menu</h2>
        <div class="menu-items">
            <div class="menu-item">
                <img src="https://1.bp.blogspot.com/-1Gt6YfdFkXo/Xv2HtjA3WEI/AAAAAAAANlY/W_zLO6X9-HEcCnXcWk5Vwp_zLJVs-_-8gCK4BGAsYHg/s3009/IMG_20200630_122924.jpg" alt="Dish 1" />
                <h3>Drums Of Heaven</h3>
                <p> Drums of Heaven are basically Chicken Lollipops tossed in a sweet, spicy sauce. The key to an amazing recipe is in the sauce which has to have the right balance of sweet and spicy.</p>
            </div>
            <div class="menu-item">
                <img src="https://homemadebakers.in/wp-content/uploads/2020/10/chicken-pizza-400x400.jpg" alt="Dish 2" />
                <h3>Mexican Pizza</h3>
                <p> A traditional Mexican pizza comes with a base of beans, a protein like chorizo or ground beef, and a light salsa sauce. The top layer is typically melted cheese and diced tomatoes.</p>
            </div>
            <div class="menu-item">
                <img src="https://frozenbottle.com/cdn/shop/files/TiramisuCake.jpg?v=1686906875" alt="Dish 3" />
                <h3>Coffee Tiramisu</h3>
                <p>Tiramisu is an Italian dessert made of ladyfinger pastries dipped in coffee, layered with a whipped mixture of eggs, sugar, and mascarpone and flavoured with cocoa.</p>
            </div>
        </div>
    </section>

   
    <section id="about" class="about-section">
        <h2>About Us</h2>
        <p>Our restaurant management system is designed to simplify your operations, allowing you to focus on what matters most—delivering a great dining experience to your customers.</p>
        <p>We offer a variety of tools to manage your menu, staff, reservations, and more.</p>
    </section>

   
    <footer>
        <p>&copy; 2024 Restaurant Manager. All rights reserved.</p>
        <div class="social-media">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
        </div>
    </footer>
    </div>
  );
}

export default HomePage;
