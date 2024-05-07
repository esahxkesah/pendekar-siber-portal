import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { Carousel } from 'flowbite-react';

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
        <h1 style={{  paddingBottom: "40px" }} className="text-3xl font-bold text-center text-gray-900 dark:text-white ">About Us</h1>
      </div>

      {/* Navigation */}
      <nav className="mb-14">
        <ul className="flex justify-center space-x-8">
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
                color: 'darkblue' // Text color set to dark blue
              }}
              onClick={() => scrollToSection(event1Ref)}> Pendekar Siber’s <br></br>School Holiday Program 
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
                color: 'darkblue' // Text color set to dark blue
              }}
              onClick={() => scrollToSection(event1Ref)}> Jom Jadi Pendekar Siber <br></br>at AYG Puchong
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
                color: 'darkblue' // Text color set to dark blue
              }}
              onClick={() => scrollToSection(event1Ref)}> The Pendekar Siber <br></br>Youth Program
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
                color: 'darkblue' // Text color set to dark blue
              }}
              onClick={() => scrollToSection(event1Ref)}> Site Visit to Bank Islam
            </button>
            </li>
          
        </ul>
      </nav>
      
      <div className="frame rounded-lg shadow-md p-8">


        <section ref={event1Ref} className="mb-8" style={{  paddingBottom: "40px" }}  >
          <h2 className="text-2xl font-bold mb-4" style={{ textAlign: 'left', paddingLeft: "80px" }}>Pendekar Siber’s School Holiday Program & CyberParenting Talk</h2>
          <p style={{ textAlign: 'justify' ,  paddingLeft: "80px" , paddingRight: "80px" }}className="mb-2 text-gray-500 dark:text-gray-400">
                PROGRAM DETAILS<br></br><br></br>
                <strong>Title:</strong> Pendekar Siber’s School Holiday Program & CyberParenting Talk <br></br>
                <strong>Date & Day: </strong>16th December 2022, Friday<br></br>
                <strong>Venue:</strong> KICT Building <br></br>
                <strong>Time:</strong> 8.30 AM - 5.30 PM<br></br><br></br>
                
                On 16th December 2022, a school holiday programme was conducted in KICT in increasing the awareness of cybersafety among youth between the ages of 8-17 years old. Many activities were done in relation to the usage of the internet such as Explorace, Binary code activity, Creative content workshop & Cyber safety games.<br></br><br></br>
                At 9.00 AM - 10.00 AM, parents were invited to come and listen to CyberParenting Talk for a sharing session by Dr. Nurul Nuha. In this session, Dr Nuha engaged with parents in regards to the safety and the importance of monitoring the children. Majority of them were already aware in relation to this issue and finding ways to monitor their children at the same time balancing their freedom to explore safely. 
                </p>
                
                {/* part untuk gambar gambar */}
                <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-8">
                <Carousel slideInterval={5000} style={{paddingRight: "100px"  , paddingLeft: "100px" }}>
                  <img src="https://i.postimg.cc/mDDw2Fv2/9.png"  alt="..." />
                  <img src="https://i.postimg.cc/k5MZKG0L/10.png" alt="..." />
                  <img src="https://i.postimg.cc/kgmLMffJ/11.png" alt="..." />
                  <img src="https://i.postimg.cc/DystKtQp/12.png" alt="..." />
                  <img src="https://i.postimg.cc/zBckLGNw/13.png" alt="..." />                
                </Carousel>
                </div>
        </section><hr style={{ border: '1px solid #ccc'}}/>
        
        <section ref={event2Ref} className="mb-8" style={{  paddingTop: "60px", paddingBottom: "40px" }} >
        <h2 className="text-2xl font-bold mb-4" style={{ textAlign: 'left', paddingLeft: "80px" }}>Jom Jadi Pendekar Siber at AYG Puchong</h2>
          <p style={{ textAlign: 'justify' , paddingLeft: "80px" , paddingRight: "80px" }}className="mb-2 text-gray-500 dark:text-gray-400">
                PROGRAM DETAILS<br></br><br></br>
               <strong>Organizer:</strong>  Pendekar Siber (SCSH  3164) Section 22 Semester 2, 22/23<br></br>
               <strong>Collaborator:</strong>  AYG Puchong<br></br>
               <strong>Target Participants:</strong> 50 AYG Puchong B40 children <br></br>
               <strong>Date of Program:</strong>  27th May 2023 (Saturday)<br></br>
               <strong>Venue:</strong>  Dewan Pangsapuri Enggang, Bandar Kinrara, Puchong<br></br><br></br>

               Usrah in Action 2 (SCSH 3164) section 22 has advocated a programme with B40 kids in partnership with Adab Youth Garage to educate kids about cybersecurity and cybercrime as they are constantly around the internet and technology. Children will participate in engaging activities while learning about cybersecurity as part of this programme at the Adab Youth Garage branch in Puchong. By educating participants about potential risks and providing them with hard skills that can help them develop their creativity, the program's goal is to ensure that kids have a solid foundation in cybersecurity.<br></br><br></br>
               The event started with an icebreaker to get everyone energized and mingling, followed by a fun Explorace featuring cyber safety-themed games like paper plane races and charades. After a lunch break, there was a roleplay about cyberbullying, Cyber Safety Games, and a Canva workshop to create posters. We wrapped up with prizes and a group photo session to capture the day's memories before saying goodbye.

                </p>
                {/* part untuk gambar gambar */}
                <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-8">
                <Carousel slideInterval={5000} style={{paddingRight: "100px"  , paddingLeft: "100px" }}>
                  <img src="https://i.postimg.cc/rsrn4BG4/1.png" alt="..." />
                  <img src="https://i.postimg.cc/vZMq1S41/2.png" alt="..." />
                  <img src="https://i.postimg.cc/TPNC4dCm/3.png" alt="..." />
                  <img src="https://i.postimg.cc/DfJYRGVz/4.png" alt="..." />
                  <img src="https://i.postimg.cc/jqpkTjK4/5.png" alt="..." />
                  <img src="https://i.postimg.cc/523P8qzs/6.png" alt="..." />
                  <img src="https://i.postimg.cc/dtGNVKVP/7.png" alt="..." />
                  <img src="https://i.postimg.cc/TP3t0Lqf/8.png" alt="..." />   
                    </Carousel>
                </div>
        </section><hr style={{ border: '1px solid #ccc' }}/>

        <section ref={event3Ref} className="mb-8" style={{  paddingTop: "60px", paddingBottom: "40px" }} >
          <h2 className="text-2xl font-bold mb-4" style={{ textAlign: 'left', paddingLeft: "80px" }}>The Pendekar Siber Youth Program</h2>
          <p style={{ textAlign: 'justify', paddingLeft: "80px" , paddingRight: "80px" }}className="mb-2 text-gray-500 dark:text-gray-400">
                PROGRAM DETAILS<br></br><br></br>
                <strong>Organizer:</strong>  Pendekar Siber (SCSH  3164) Section 33 Semester 1, 23/24 <br></br>
               <strong>Collaborator:</strong>  SMK Seksyen 9 Shah Alam <br></br>
               <strong>Target Participants:</strong> 100 of 15-year-old students in SMK Shah Alam Seksyen 9 <br></br>
               <strong>Date of Program:</strong>  13th January 2024 (Saturday)<br></br>
               <strong>Venue:</strong>  SMK Seksyen 9 Shah Alam <br></br><br></br>
               
               The engagement activities at SMK Seksyen 9 Shah Alam provided valuable insights into students' understanding of cyber threats. Through modules like Cyber Talk, Ice Breaking, and Explorace, students demonstrated enthusiasm and engagement with cybersecurity concepts.<br></br><br></br>
                Despite challenges such as a short preparation period and the energetic nature of students, the program successfully exposed students to cyber threats and instilled practical knowledge to address them. During the Cyber Talk, students actively participated in discussions, while the Ice Breaking module showcased their understanding of cybersecurity terms through a guessing game. The Explorace module further emphasized students' awareness and application of cybersecurity principles.<br></br><br></br>
                Reflecting on the experience, we identified the need for more frequent exposure to cybersecurity matters among youth. While students demonstrated theoretical understanding, there was a gap in practical application. This underscores the importance of continuous education in cybersecurity.<br></br><br></br>
                In conclusion, the program left a lasting impact by enhancing students' awareness and understanding of cyber threats. Moving forward, sustaining this momentum through ongoing education and practical application is crucial for empowering students to navigate the digital world safely.
               </p>
                
                {/* part untuk gambar gambar */}
                <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-8">
                <Carousel slideInterval={5000} style={{paddingRight: "100px"  , paddingLeft: "100px" }}>
                    <img src="https://i.postimg.cc/1RVdpLdR/21.png" alt="..." />   
                    <img src="https://i.postimg.cc/RZ4bxqZq/22.png" alt="..." />
                    <img src="https://i.postimg.cc/Kzws6N1y/23.png" alt="..." />
                    <img src="https://i.postimg.cc/Rhtb4HtJ/24.png" alt="..." />
                    <img src="https://i.postimg.cc/7YvWXKv3/25.png" alt="..." />
                    <img src="https://i.postimg.cc/4NzF0pZr/26.png" alt="..." />     
                    <img src="https://i.postimg.cc/pLCcWxmC/27.png" alt="..." />
                    <img src="https://i.postimg.cc/0NNWr3ms/28.png" alt="..." />
                    <img src="https://i.postimg.cc/j5wM47Z3/29.png" alt="..." />
                </Carousel>
                </div>
        </section><hr style={{ border: '1px solid #ccc'}}/>

        <section ref={event4Ref} className="mb-8" style={{  paddingTop: "60px" }}  >
          <h2 className="text-2xl font-bold mb-4" style={{ textAlign: 'left', paddingLeft: "80px" }}>Site Visit to Bank Islam </h2>
          <p style={{ textAlign: 'justify', paddingLeft: "80px" , paddingRight: "80px" }}className="mb-2 text-gray-500 dark:text-gray-400">
                PROGRAM DETAILS<br></br><br></br>
                <strong>Organizer:</strong>  Pendekar Siber (SCSH  3164) Section 33 Semester 1, 23/24 <br></br>
               <strong>Collaborator:</strong>  Bank Islam <br></br>
               <strong>Target Participants:</strong> Usrah In Action 1 & 2 Pendekar Siber <br></br>
               <strong>Date of Program:</strong>  2nd June 2023 (Friday)<br></br>
               <strong>Venue:</strong>  Bank Islam HQ, Kuala Lumpur <br></br><br></br>
                
               The event at Bank Islam began with a gracious welcome, setting the stage for an enlightening day ahead. Pendekar Siber's session, featuring Harith, Aisyah, and Aneesa, delved into emerging cybersecurity threats, emphasizing the need for constant vigilance in the digital realm. Following this, Encik Abu Ubaidah Md Zain from Bank Islam's cybersecurity team provided a comprehensive overview of the institution's policies and tools, showcasing the robust measures in place to safeguard customer information and financial transactions.<br></br><br></br>
               The subsequent presentation by the E-channels Fraud Team, led by Puan Siti Rossimawati Semong, offered valuable insights into real-life cases of fraudulent activities encountered by Bank Islam's customers. These anecdotes underscored the critical importance of awareness and proactive measures in fraud prevention. Additionally, participants engaged in a lively Q&A session, seeking clarification and further information from the experts, fostering an atmosphere of collaborative learning.<br></br><br></br>
               En. Zaim's discussion on career opportunities within Bank Islam offered aspiring professionals a glimpse into the various roles and growth prospects available within the organization, inspiring attendees to consider a career in the dynamic banking sector. The event concluded with a reflection on the significance of continuous learning and the cultivation of a robust cybersecurity culture, leaving participants empowered with knowledge and determination to combat cyber threats effectively. Overall, the event provided a valuable platform for networking, learning, and exploration of career opportunities in cybersecurity and banking.
                </p>
                
                {/* part untuk gambar gambar */}
                <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-8">
                <Carousel slideInterval={5000} style={{paddingRight: "100px"  , paddingLeft: "100px" }}>
                    <img src="https://i.postimg.cc/BZRdkqF1/14.png" alt="..." />
                    <img src="https://i.postimg.cc/bw9WZkBQ/15.png" alt="..." />
                    <img src="https://i.postimg.cc/BtWcg7XX/16.png" alt="..." />
                    <img src="https://i.postimg.cc/XNrRsZrb/17.png" alt="..." />
                    <img src="https://i.postimg.cc/90wYyHX6/18.png" alt="..." />
                    <img src="https://i.postimg.cc/jj81XKK2/19.png" alt="..." />
                    <img src="https://i.postimg.cc/xCc4p7TR/20.png" alt="..." />            
                </Carousel>
                </div>
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
