import React, { useRef } from 'react';
import { Button } from "flowbite-react";
import { Link } from 'react-router-dom';
import news from "../assets/img/news.png";
import academic from "../assets/img/academic.png";
import holland from "../assets/img/holland.png";

const AboutUs = () => {
  const event1Ref = useRef(null);
  const event2Ref = useRef(null);
  const event3Ref = useRef(null);
  const event4Ref = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="container mx-auto p-8">
    <div className="text-center py-3">
      <h1 style={{ paddingBottom: "40px" }} className="text-3xl font-bold text-center ">Cybersecurity as a Career</h1>
   
    </div>

      {/* Navigation */}
      <nav className="mb-14">
        <ul className="flex justify-center space-x-8">
          <li>
            <button
              className="navigation-button  text-gray-900 dark:text-white" style={{
                fontWeight: 'bold',
                fontSize: '1.2rem',
                backgroundColor: '#f3f3f3', // Light gray background color
                padding: '10px 20px', // Padding for the button
                borderRadius: '8px', // Rounded corners
                border: 'none', // No border
                cursor: 'pointer', // Pointer cursor on hover
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Shadow border with dark gray color
                transition: 'background-color 0.3s ease', // Smooth transition for background color
                color: 'darkblue' }}
              onClick={() => scrollToSection(event1Ref)}> Demands & Growth <br></br> in industry
            </button>
          </li>

          <li>
            <button
              className="navigation-button" style={{
                fontWeight: 'bold',
                fontSize: '1.2rem',
                backgroundColor: '#f3f3f3', // Light gray background color
                padding: '10px 20px', // Padding for the button
                borderRadius: '8px', // Rounded corners
                border: 'none', // No border
                cursor: 'pointer', // Pointer cursor on hover
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Shadow border with dark gray color
                transition: 'background-color 0.3s ease', // Smooth transition for background color
                color: 'darkblue' }}
              onClick={() => scrollToSection(event2Ref)}> Holland Code  <br></br> Personality Test
            </button>
          </li>

          <li>
            <button
              className="navigation-button" style={{
                fontWeight: 'bold',
                fontSize: '1.2rem',
                backgroundColor: '#f3f3f3', // Light gray background color
                padding: '10px 20px', // Padding for the button
                borderRadius: '8px', // Rounded corners
                border: 'none', // No border
                cursor: 'pointer', // Pointer cursor on hover
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Shadow border with dark gray color
                transition: 'background-color 0.3s ease', // Smooth transition for background color
                color: 'darkblue' }}
              onClick={() => scrollToSection(event3Ref)}> Tips   <br></br> & Advices
            </button>
          </li>

          <li>
            <button
              className="navigation-button" style={{
                fontWeight: 'bold',
                fontSize: '1.2rem',
                backgroundColor: '#f3f3f3', // Light gray background color
                padding: '10px 20px', // Padding for the button
                borderRadius: '8px', // Rounded corners
                border: 'none', // No border
                cursor: 'pointer', // Pointer cursor on hover
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Shadow border with dark gray color
                transition: 'background-color 0.3s ease', // Smooth transition for background color
                color: 'darkblue'}}
              onClick={() => scrollToSection(event4Ref)}> Networking & <br></br> Resources
            </button>
            </li>

        
          
        </ul>

        
      </nav>
      
      <div className="frame rounded-lg shadow-md p-8">


        <section ref={event1Ref} className="mb-8" style={{  paddingBottom: "40px" }}  >
         
                
                {/* part untuk gambar gambar */}
       
                <div className="flex justify-center"> {/* Add padding */}
              <img src={academic} alt="academic" className="w-auto object-cover rounded-lg" />
            </div>
            <br></br>
            <div className="flex justify-center"> {/* Add padding */}
              <img src={news} alt="news" className="w-auto h-auto object-cover rounded-lg" />
            </div>

        </section><hr style={{ border: '1px solid #ccc' }}/>

        <section ref={event2Ref} className="mb-8" style={{ paddingTop: "20px", paddingBottom: "20px" }}>
  <h2 className="center text-2xl font-bold mb-4 " style={{ textAlign: 'left', paddingLeft: "80px" }}>Holland Code</h2>
  <p style={{ textAlign: 'justify', paddingLeft: "80px", paddingRight: "80px" }} className="mb-4">
  Integrating the Holland Code framework into exploring cybersecurity careers helps align personal traits with job roles. Developed by psychologist John L. Holland, this framework categorizes individuals into six personality types, each matching specific work environments. By applying these codes to cybersecurity, users can make informed career choices. For instance, "Realistic" types may excel in technical roles, while "Investigative" types thrive in analytical fields. "Artistic" individuals may enjoy creative roles, "Social" types collaborative ones, "Enterprising" ones managerial positions, and "Conventional" types organizational roles.
</p>

<div className="flex justify-center"> {/* Add padding */}
    <img src={holland} alt="holland" className="w-1/3 h-auto object-cover rounded-lg p-10" />
</div>


<div style={{ display: 'flex', justifyContent: 'center' }}>
  <Link to="/personalitytest">
    <Button style={{ width: '200px', height: '50px' }}>
      Take the Test
    </Button>
  </Link>
</div>



</section>
<hr style={{ border: '1px solid #ccc' }}/>




        <section ref={event3Ref} className="mb-8" style={{  paddingTop: "60px" }}  >
          <h2 className="text-2xl font-bold mb-4" style={{ textAlign: 'left', paddingLeft: "80px" }}>Tips & Advices</h2>
          <section className="mx-auto max-w-2xl">
          <p className="mb-4">In an age where digital technology permeates nearly every aspect of modern life, the need for cybersecurity professionals has never been more critical. As businesses, governments, and individuals become increasingly reliant on digital infrastructure, the risks associated with cyber threats continue to evolve and multiply. A career in cybersecurity offers not only job security but also the opportunity to safeguard vital information and infrastructure from malicious actors.</p>
          <h2 className="text-2xl font-bold mb-4">Why Choose a Career in Cybersecurity?</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>High Demand</li>
            <li>Competitive Salaries</li>
            <li>Constant Evolution</li>
            <li>Diverse Career Paths</li>
          </ul>
          <h2 className="text-2xl font-bold mb-4">Key Skills and Qualifications</h2>
          <p className="mb-4">While specific roles within cybersecurity may require different skill sets, there are several key skills and qualifications that are universally valued in the field:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Technical Proficiency</li>
            <li>Analytical Thinking</li>
            <li>Problem-Solving Abilities</li>
            <li>Communication Skills</li>
            <li>Certifications</li>
          </ul>
          <h2 className="text-2xl font-bold mb-4">Career Paths in Cybersecurity</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Cybersecurity Analyst</li>
            <li>Security Engineer</li>
            <li>Penetration Tester (Ethical Hacker)</li>
            <li>Security Consultant</li>
            <li>Incident Responder</li>
          </ul>
        </section>
                
               
        </section>

        <section ref={event4Ref} className="mb-8" style={{  paddingTop: "60px" }}  >
          <h2 className="text-2xl font-bold mb-4" style={{ textAlign: 'left', paddingLeft: "80px" }}>Networking & Resources</h2>
<section className="mx-auto max-w-2xl">
  <p className="mb-4">Networking and accessing resources are crucial steps in building a successful career in cybersecurity. Here are some tips to help you navigate this dynamic field:</p>
  <h2 className="text-2xl font-bold mb-4">Professional Networking</h2>
  <ul className="list-disc pl-6 mb-4">
    <li>Join cybersecurity professional organizations and forums.</li>
    <li>Attend industry conferences, workshops, and meetups.</li>
    <li>Participate in online communities and discussion groups.</li>
    <li>Connect with cybersecurity experts and professionals on social media platforms like LinkedIn.</li>
  </ul>
  <h2 className="text-2xl font-bold mb-4">Online Resources</h2>
  <ul className="list-disc pl-6 mb-4">
    <li>Explore online cybersecurity courses and training programs offered by reputable institutions and platforms like Coursera, edX, and Cybrary.</li>
    <li>Stay updated with the latest cybersecurity news, trends, and research through blogs, podcasts, and industry publications.</li>
    <li>Utilize open-source tools and resources for hands-on learning and skill development.</li>
    <li>Engage with online communities and forums to exchange knowledge, seek advice, and collaborate on projects.</li>
  </ul>
  <h2 className="text-2xl font-bold mb-4">Professional Certifications</h2>
  <p className="mb-4">Obtaining industry-recognized certifications can enhance your credibility and marketability in the cybersecurity field. Consider pursuing certifications such as:</p>
  <ul className="list-disc pl-6 mb-4">
    <li>CompTIA Security+</li>
    <li>Certified Information Systems Security Professional (CISSP)</li>
    <li>Certified Ethical Hacker (CEH)</li>
    <li>GIAC Security Essentials (GSEC)</li>
    <li>Certified Information Security Manager (CISM)</li>
  </ul>
</section>

        </section>

<button
          className="fixed bottom-8 right-8 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          onClick={scrollToTop}
        >
          Scroll to Top
        </button>
      </div>
      </div>
  );
};

export default AboutUs;
