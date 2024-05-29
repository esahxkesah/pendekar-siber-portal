import React from 'react';
import Spline from '@splinetool/react-spline';
import { Button, Card, Accordion } from "flowbite-react";
import { Link } from 'react-router-dom';
import cyberbullyingImage from "../assets/img/cyberbullying.png";
import gamingDisorderImage from "../assets/img/gaming_disorder.png";
import sexualExploitationImage from "../assets/img/sexual_exploitation.png";
import logopendekarsiber from "../assets/img/logo.png";
import sdg4 from "../assets/img/sdg4.png";
import sdg8 from "../assets/img/sdg8.png";
import sdg16 from "../assets/img/sdg16.png";
import sdg12 from "../assets/img/sdg12.png";
import careers from "../assets/img/careers.png";
import holland from "../assets/img/holland.png";
import faith from "../assets/img/faith.png";
import life from "../assets/img/life.png";
import intellect from "../assets/img/intellect.png";
import lineage from "../assets/img/lineage.png";
import wealth from "../assets/img/wealth.png";
import didyouknow from "../assets/img/didyouknow.png";

const Home = () => {
  return (
    <div className="home">
      <div className="spline-container">
        <Spline
          scene="https://prod.spline.design/udH95pM9RR-MP906/scene.splinecode"
          style={{ width: '%', height: '600px' }}
        />

              {/* Who is Pendekar Siber? */}
<div className="max-w-screen mx-auto p-4 flex">
  {/* Logo
  <img src={logopendekarsiber} alt="Technology" className="w-64 h-64 object-cover rounded-t-lg mr-8" style={{ display: 'block' }} /> */}

<div className="bg-blue-100 p-4 rounded-lg my-6 mx-auto max-w-3xl shadow-lg">
  {/* Text Content */}
  <div className="py-4 bg-blue-100 text-center rounded-lg"> {/* Add padding, blue background, center text, and rounded corners */}
    <h5 className="text-3xl font-bold tracking-tight text-black"> {/* Adjust text color for contrast */}
      Who is Pendekar Siber?
    </h5>
    <p className="text-xl font-normal text-black my-4  p-2 rounded"> {/* Adjust text color, add vertical margin, white background, padding, and rounded corners */}
      A computer expert engaged in the defence of information systems against cyber attacks.
    </p>
    <h5 className="text-3xl font-bold tracking-tight text-black">
      Why Pendekar Siber? 
    </h5>
    <p className="text-xl font-normal text-black my-4  p-2 rounded"> {/* Adjust text color, add vertical margin, white background, padding, and rounded corners */}
      Cyber well-being among the community, practising resilience in cyber is pertinent to real world well-being.
      <br /><br />
      Cybersecurity as a career option for SPM students and graduates from the field of ICT. It can also be extended to graduates from other fields.
      <br /><br />
      Cyber literacy among the digital natives as having exposure to digital technology early in life does not guarantee they comply with ethical practices in the cyber world.
    </p>
  </div>
</div>


</div>

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
    className="shadow-lg"
  ></iframe>
</div>



        
  {/* Yellow Container */}
  <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Aligning within SDGs</h1>
  <div className="bg-yellow-100 p-4 rounded-lg my-6 mx-auto max-w-3xl shadow-lg"> {/* Smaller container */}
    {/* Images */}
    <div className="flex justify-between">
      <div className="w-1/3 p-2"> {/* Add padding */}
        <img src={sdg4} alt="SDG4" className="w-full h-auto object-cover rounded-lg" /> {/* Adjust size if needed */}
      </div>
      <div className="w-1/3 p-2"> {/* Add padding */}
        <img src={sdg8} alt="SDG8" className="w-full h-auto object-cover rounded-lg" /> {/* Adjust size if needed */}
      </div>
      <div className="w-1/3 p-2"> {/* Add padding */}
        <img src={sdg12} alt="SDG12" className="w-full h-auto object-cover rounded-lg" /> {/* Adjust size if needed */}
      </div>
      <div className="w-1/3 p-2"> {/* Add padding */}
        <img src={sdg16} alt="SDG16" className="w-full h-auto object-cover rounded-lg" /> {/* Adjust size if needed */}
      </div>
    </div>
  </div>

  {/* Yellow Container */}
  <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Aligning within
  Maqasid Syariah</h1>

  <div className="bg-yellow-100 p-4 rounded-lg my-6 mx-auto max-w-3xl shadow-lg">
  {/* Row 1 */}
  <div className="flex items-center my-4">
    <div className="w-1/3 p-2">
      <img src={faith} alt="faith" className="w-48 h-auto object-cover rounded-lg" />
    </div>
    <div className="w-2/3 p-2">
      <h2 className="text-3xl font-semibold text-gray-900 ">1. Protection of Faith</h2>
      <p className="text-2xl text-gray-700 "> Avoid cyber propaganda that may affect our Islamic faith</p>
    </div>
  </div>

  {/* Row 2 */}
  <div className="flex items-center my-4">
    <div className="w-1/3 p-2">
      <img src={life} alt="life" className="w-48 h-auto object-cover rounded-lg" />
    </div>
    <div className="w-2/3 p-2">
      <h2 className="text-3xl font-semibold text-gray-900 ">2. Protection of Life</h2>
      <p className="text-2xl text-gray-700">  Educate each other about the personal cybersafety, mental health & national security</p>
    </div>
  </div>

  {/* Row 3 */}
  <div className="flex items-center my-4">
    <div className="w-1/3 p-2">
      <img src={intellect} alt="intellect" className="w-48 h-auto object-cover rounded-lg" />
    </div>
    <div className="w-2/3 p-2">
      <h2 className="text-3xl font-semibold text-gray-900 ">3. Protection of Intellect</h2>
      <p className="text-2xl text-gray-700">Avoid fake news, always check the validity of the info before sharing them (Surah Al Hujurat:6).</p>
    </div>
  </div>

  {/* Row 4 */}
  <div className="flex items-center my-4">
    <div className="w-1/3 p-2">
      <img src={lineage} alt="lineage" className="w-48 h-auto object-cover rounded-lg" />
    </div>
    <div className="w-2/3 p-2">
      <h2 className="text-3xl font-semibold text-gray-900 ">4. Protection of Lineage </h2>
      <p className="text-2xl text-gray-700 ">  Educate our children about cyberethics, cybersafety & cybersecurity</p>
    </div>
  </div>

  {/* Row 5 */}
  <div className="flex items-center my-4">
    <div className="w-1/3 p-2">
      <img src={wealth} alt="wealth" className="w-48 h-auto object-cover rounded-lg" />
    </div>
    <div className="w-2/3 p-2">
      <h2 className="text-3xl font-semibold text-gray-900 ">5. Protection of Wealth</h2>
      <p className="text-2xl text-gray-700 "> Avoid monetary losses due to cybersecurity attacks and financial fraud</p>
    </div>
  </div>
</div>

{/* Yellow Container */}
<div className="bg-blue-100 p-4 rounded-lg my-6 mx-auto max-w-3xl shadow-lg">
  {/* Content */}
  <div className="flex items-center justify-between">
    {/* Left side: Images */}
    <div className="w-1/3 p-2">
      <img src={didyouknow} alt="didyouknow" className="w-full h-auto object-cover rounded-lg" />
    </div>
    <div className="w-1/3 p-2">
      <img src={careers} alt="careers" className="w-full h-auto object-cover rounded-lg" />
    </div>  
    {/* Right side: Text and Button */}
    <div className="w-2/3 p-2">
      {/* Short text */}
      <p className="text-3xl font-bold text-center text-gray-900 pb-5">
        Discover careers in cybersecurity!
      </p>
      <p className="text-xl text-center text-gray-700 mb-4">
        Did you know that cybersecurity is in very high demand? Check out more!
      </p>
      <div className="flex justify-center">
        <Link to="/cybersecuritycareer">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" style={{ width: '200px', height: '50px' }}>
            Explore
          </button>
        </Link>
      </div>
    </div>
  </div>
</div>

      </div>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">CyberSafety Modules</h1>
        <div className
="grid grid-cols-1 md:grid-cols-3 gap-6">
{/* Cyberbullying Module */}
<Card className="shadow-lg"> {/* Added shadow */}
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
<Card className="shadow-lg"> {/* Added shadow */}
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
<Card className="shadow-lg"> {/* Added shadow */}
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
