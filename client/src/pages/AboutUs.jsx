import { Accordion, Carousel } from "flowbite-react";

export default function AboutUs() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white "> About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    </div>

      <div className="frame rounded-lg shadow-md">
        <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
          
    {/* Add picture here */}
    <div className="flex justify-center p-8 ">
      <img src="https://export-download.canva.com/eXeiI/DAGAGdeXeiI/6/0/0001-4215794907038593931.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20240421%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240421T151127Z&X-Amz-Expires=71136&X-Amz-Signature=700023ea9387ee2df07c20320c8490b28f265de327cc8cf75ecab5159de11a6c&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B filename%2A%3DUTF-8%27%27Copy%2520of%2520Pendekar%2520Siber%2520Banner%25203x1.png&response-expires=Mon%2C 22 Apr 2024 10%3A57%3A03 GMT" alt="About Us Banner" className="w-full max-w-6xl" />
    </div>

          <Accordion collapseAll>
            <Accordion.Panel>

{/* start part background */}
              <Accordion.Title><strong>Background of Pendekar Siber</strong></Accordion.Title>
              <Accordion.Content>
                <p style={{ textAlign: 'justify' }}className="mb-2 text-gray-500 dark:text-gray-400">
                The "Pendekar Siber" program comprised a series of interactive workshops and educational activities designed to engage children and enhance their understanding of cybersecurity. These workshops covered various topics, including safe internet practices, identifying and avoiding online threats, protecting personal information, and responsible digital citizenship. We incorporated age-appropriate teaching methods, incorporating games, role-playing, and real-life case studies to make the learning experience enjoyable and relatable. <br></br><br></br>
                Furthermore, we organized community awareness campaigns, where we conducted outreach sessions with parents, guardians, and educators. By involving the entire community, we aimed to foster a collaborative and supportive environment for children's online safety. We distributed informative brochures and held open forums, encouraging dialogue and addressing concerns related to cybersecurity.<br></br><br></br>
                Through the "Pendekar Siber" project, our goal was to empower children and equip them with the necessary skills to protect themselves in the digital world. Leveraging expertise and resources from relevant organizations, we aimed to maximize our impact. Together, we aimed to create a safer online environment for our community's children, ensuring they have the knowledge and confidence to navigate the internet securely.<br></br>
                </p>  
              </Accordion.Content>
            </Accordion.Panel>
{/* end part background */}

{/* start of part 1 with the slide gambor */}
            <Accordion.Panel>
            <Accordion.Title><strong>Pendekar Siber’s School Holiday Program & CyberParenting Talk</strong></Accordion.Title>
              <Accordion.Content>
              <p style={{ textAlign: 'justify' }}className="mb-2 text-gray-500 dark:text-gray-400">
                PROGRAM DETAILS<br></br><br></br>
                <strong>Title:</strong> Pendekar Siber’s School Holiday Program & CyberParenting Talk <br></br>
                <strong>Date & Day: </strong>16th December 2022, Friday<br></br>
                <strong>Venue:</strong> KICT Building <br></br>
                <strong>Time:</strong> 8.30 AM - 5.30 PM<br></br><br></br>
                
                On 16th December 2022, a school holiday programme was conducted in KICT in increasing the awareness of cybersafety among youth between the ages of 8-17 years old. Many activities were done in relation to the usage of the internet such as Explorace, Binary code activity, Creative content workshop & Cyber safety games.<br></br><br></br>
                At 9.00 AM - 10.00 AM, parents were invited to come and listen to CyberParenting Talk for a sharing session by Dr. Nurul Nuha. In this session, Dr Nuha engaged with parents in regards to the safety and the importance of monitoring the children. Majority of them were already aware in relation to this issue and finding ways to monitor their children at the same time balancing their freedom to explore safely. <br></br><br></br>
                </p>

                {/* part untuk gambar gambar */}
                <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-8">
                <Carousel slideInterval={7000}>
                  <img src="https://i.postimg.cc/gJf4GM92/9.png" alt="..." />
                  <img src="https://i.postimg.cc/c1nXFNYg/10.png" alt="..." />
                  <img src="https://i.postimg.cc/3RynMscq/11.png" alt="..." />
                  <img src="https://i.postimg.cc/L5LD5zRB/12.png" alt="..." />
                  <img src="https://i.postimg.cc/SNbV5t7Z/13.png" alt="..." />                
                </Carousel>
                </div>
              </Accordion.Content>
            </Accordion.Panel>
{/* end of part 1 with the slide gambor */}


 {/* start of part 2 with the slide gambor */}
 <Accordion.Panel>
            <Accordion.Title><strong>Jom Jadi Pendekar Siber at AYG Puchong </strong></Accordion.Title>
              <Accordion.Content>
              <p style={{ textAlign: 'justify' }}className="mb-2 text-gray-500 dark:text-gray-400">
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
                  <Carousel slideInterval={7000}>
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
              </Accordion.Content>
            </Accordion.Panel>
  {/* end of part 2 with the slide gambor */}

  {/* start of part 3 with the slide gambor */}
   <Accordion.Panel>
            <Accordion.Title><strong>The Pendekar Siber Youth Program </strong></Accordion.Title>
              <Accordion.Content>
              <p style={{ textAlign: 'justify' }}className="mb-2 text-gray-500 dark:text-gray-400">
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
                  <Carousel slideInterval={7000}>
                    <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
                    <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
                    <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
                    <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                    <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
                  </Carousel>
                </div>
              </Accordion.Content>
            </Accordion.Panel>
  {/* end of part 3 with the slide gambor */}

  {/* start of part 4 with the slide gambor */}
     <Accordion.Panel>
            <Accordion.Title><strong>Site Visit to Bank Islam </strong></Accordion.Title>
              <Accordion.Content>
              <p style={{ textAlign: 'justify' }}className="mb-2 text-gray-500 dark:text-gray-400">
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
                  <Carousel slideInterval={7000}>
                    <img src="https://i.postimg.cc/13JH8RxT/14.png" alt="..." />
                    <img src="https://i.postimg.cc/9FP1jtLc/15.png" alt="..." />
                    <img src="https://i.postimg.cc/NjgDG9nm/16.png" alt="..." />
                    <img src="https://i.postimg.cc/tgcNzr4N/17.png" alt="..." />
                    <img src="https://i.postimg.cc/TP1cg8fP/18.png" alt="..." />
                    <img src="https://i.postimg.cc/85rBXhFQ/19.png" alt="..." />
                    <img src="https://i.postimg.cc/j206pLNW/20.png" alt="..." />
                  </Carousel>
                </div>
              </Accordion.Content>
            </Accordion.Panel>
  {/* end of part 4 with the slide gambor */}

  {/* part penutup, jangan delete */}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
