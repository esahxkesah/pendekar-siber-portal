import React from 'react';
import backgroundImage from '../assets/img/giff.gif';
const Home = () => {
  return (
    <div className="home" style={{ 
      backgroundImage: `url(${backgroundImage})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      height: '100vh' 
    }}>
      <header>
        <h1>Welcome to our Landing Page</h1>
        <p>Discover amazing things here.</p>
      </header>
      <section>
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non neque eget nisi tincidunt malesuada.</p>
      </section>
      <section>
        <h2>Our Services</h2>
        <ul>
          <li>Service 1</li>
          <li>Service 2</li>
          <li>Service 3</li>
        </ul>
      </section>
      <footer>
        <p>&copy; 2024 Our Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
