import React from 'react';
import Spline from '@splinetool/react-spline';

const Home = () => {
  return (
    <div className="home">
      <div className="spline-container">
        <Spline
          scene="https://prod.spline.design/VDxne7-byuQVErtB/scene.splinecode"
          style={{ width: '100%', height: '600px' }} // Adjust the height as needed
        />
      </div>
    </div>
  );
};

export default Home;
