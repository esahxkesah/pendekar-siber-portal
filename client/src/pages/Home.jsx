import React from 'react';
import Spline from '@splinetool/react-spline';
import { Button, Card } from "flowbite-react";
import { Link } from 'react-router-dom';
import cyberbullyingImage from "../assets/img/cyberbullying.png";
import gamingDisorderImage from "../assets/img/gaming_disorder.png";
import sexualExploitationImage from "../assets/img/sexual_exploitation.png";
import logopendekarsiber from "../assets/img/logo.png";
import sdg4 from "../assets/img/sdg4.png";
import sdg8 from "../assets/img/sdg8.png";
import sdg16 from "../assets/img/sdg16.png";

const Home = () => {
  return (
    <div className="home">
      <div className="spline-container">
        <Spline
          scene="https://prod.spline.design/udH95pM9RR-MP906/scene.splinecode"
          style={{ width: '%', height: '600px' }}
        />

        {/* YouTube Video */}
        <div className="max-w-screen mx-auto p-4" style={{ width: '100%', height: '600px' }}>
  <iframe
    width="100%" // Set width to 100% to fill the container
    height="100%" // Set height to 100% to fill the container
    src="https://www.youtube.com/embed/d54h5TBRzWE?si=3Z5Fgv2RKQin-xUo&autoplay=1"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</div>

      {/* Who is Pendekar Siber? */}
<div className="max-w-screen mx-auto p-4 flex">
  {/* Logo */}
  <img src={logopendekarsiber} alt="Technology" className="w-64 h-64 object-cover rounded-t-lg mr-8" style={{ display: 'block' }} />

  {/* Text Content */}
  <div className="py-4"> {/* Add padding to the top and bottom */}
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Who is Pendekar Siber?
    </h5>
    <p className="font-normal">
      It is in Malay language which means a cyber warrior. 

      A computer expert engaged in the defence of information systems against cyber attacks.|        
    </p>
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Why Pendekar Siber? 
    </h5>
    <p className="font-normal">
      Cyber well-being among the community,  practising resilient in cyber is pertinent to real world well-being

      Cybersecurity as a career option for SPM students and graduates from the field of ICT. It can also be extended to graduates from other fields

      Cyber literacy among the digital natives as having exposure to digital technology early in life does not guarantee they comply with ethical practices in the cyber world 
    </p>
  </div>
</div>

        
        {/* Yellow Container */}
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Aligning within SDGs</h1>
        <div className="bg-yellow-100 p-4 rounded-lg my-6 mx-auto max-w-3xl"> {/* Smaller container */}
          {/* Images */}
          <div className="flex justify-between">
            <div className="w-1/3 p-2"> {/* Add padding */}
              <img src={sdg4} alt="SDG4" className="w-full h-auto object-cover rounded-lg" /> {/* Adjust size if needed */}
            </div>
            <div className="w-1/3 p-2"> {/* Add padding */}
              <img src={sdg8} alt="SDG8" className="w-full h-auto object-cover rounded-lg" /> {/* Adjust size if needed */}
            </div>
            <div className="w-1/3 p-2"> {/* Add padding */}
              <img src={sdg16} alt="SDG16" className="w-full h-auto object-cover rounded-lg" /> {/* Adjust size if needed */}
            </div>
          </div>
        </div>
           {/* Yellow Container */}
           <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Maqasid Syariah</h1>
        <div className="bg-yellow-100 p-4 rounded-lg my-6 mx-auto max-w-3xl"> {/* Smaller container */}
          {/* Images */}
          <div className="flex justify-between">
            <div className="w-1/3 p-2"> {/* Add padding */}
              <img src={sdg4} alt="SDG4" className="w-full h-auto object-cover rounded-lg" /> {/* Adjust size if needed */}
            </div>
            <div className="w-1/3 p-2"> {/* Add padding */}
              <img src={sdg8} alt="SDG8" className="w-full h-auto object-cover rounded-lg" /> {/* Adjust size if needed */}
            </div>
            <div className="w-1/3 p-2"> {/* Add padding */}
              <img src={sdg16} alt="SDG16" className="w-full h-auto object-cover rounded-lg" /> {/* Adjust size if needed */}
            </div>
          </div>
        </div>

      </div>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">CyberSafety Modules</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cyberbullying Module */}
          <Card>
            <img src={cyberbullyingImage} alt="Cyberbullying" className="w-full h-64 object-cover rounded-t-lg" />
            <div className="card-body p-4">
              <h5 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Cyberbullying
              </h5>
              <p className="text-gray-700 dark:text-gray-400">
                Learn about cyberbullying prevention and response.
              </p>
              <Link to="/cyberbullying">
                <Button className="mt-4 btn-primary w-full">
                  Learn More
                </Button>
              </Link>
            </div>
          </Card>

          {/* Gaming Disorder Module */}
          <Card>
            <img src={gamingDisorderImage} alt="Gaming Disorder" className="w-full h-64 object-cover rounded-t-lg" />
            <div className="card-body p-4">
              <h5 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Gaming Disorder
              </h5>
              <p className="text-gray-700 dark:text-gray-400">
                Understand the signs and risks of gaming disorder.
              </p>
              <Link to="/gamingdisorder">
                <Button className="mt-4 btn-primary w-full">
                  Learn More
                </Button>
              </Link>
            </div>
          </Card>

          {/* Sexual Exploitation Module */}
          <Card>
            <img src={sexualExploitationImage} alt="Sexual Exploitation" className="w-full h-64 object-cover rounded-t-lg" />
            <div className="card-body p-4">
              <h5 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Online Sexual Exploitation
              </h5>
              <p className="text-gray-700 dark:text-gray-400">
                Explore resources to protect against sexual exploitation online.
              </p>
              <Link to="/SexualExploitation">
                <Button className="mt-4 w-full blue">
                  Learn More
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
