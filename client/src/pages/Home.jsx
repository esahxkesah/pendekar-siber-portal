import Spline from '@splinetool/react-spline';
import { Card, Button } from "flowbite-react"; // Import Button from Flowbite
import { Link } from 'react-router-dom'; // Import Link component from React Router
import cyberbullyingImage from "../assets/img/cyberbullying.png"; // Import images using require
import gamingDisorderImage from "../assets/img/gaming_disorder.png";
import sexualExploitationImage from "../assets/img/sexual_exploitation.png";
import logopendekarsiber from "../assets/img/logo.png";
const Home = () => {
  return (
    <div className="home">
      <div className="spline-container">
        <Spline
          scene="https://prod.spline.design/n9MW80faX04SdijK/scene.splinecode"
          style={{ width: '%', height: '600px' }} // Adjust the height as needed
        />
      <Card href="#" className="max-w-screen mx-auto">
      {/* Image */}
      <img src={logopendekarsiber} alt="Technology" className="w-64 h-64 object-cover rounded-t-lg mx-auto" style={{ display: 'block' }} />

      {/* Text Content */}
      <div className="p-4">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Who is Pendekar Siber?
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
        It is in Malay language which means a cyber warrior. 

        A computer expert engaged in the defence of information systems against cyber attacks.|        </p>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Why Pendekar Siber? 
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
        Cyber well-being among the community,  practising resilient in cyber is pertinent to real world well-being

Cybersecurity as a career option for SPM students and graduates from the field of ICT. It can also be extended to graduates from other fields

Cyber literacy among the digital natives as having exposure to digital technology early in life does not guarantee they comply with ethical practices in the cyber world </p>
      </div>
    </Card>
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
