import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs'; // Import the arrow icon from react-icons library

const CyberbullyingPage = () => {
  const whatRef = useRef(null);
  const impactRef = useRef(null);
  const controlsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <div className="container mx-auto p-8">
    <div className="frame rounded-lg shadow-md p-8">
      <Link to="/CyberSafetyModule" className="inline-block rounded-lg py-1 px-2 bg-blue-500 text-white hover:bg-blue-600 transition duration-300 mb-8">
        <BsArrowLeft className="inline-block mr-2" /> Back to CyberSafety Modules
      </Link>
      <div className="text-center bg-blue-800 py-3">
    <h1 className="text-4xl font-bold text-white"> CYBERBULLYING</h1>
  </div><br></br>
      <nav className="mb-8">
        <ul className="flex justify-center space-x-4">
          <li onClick={() => scrollToSection(whatRef)}>
            <Link to="#" className="navigation-link">What</Link>
          </li>
          <li onClick={() => scrollToSection(impactRef)}>
            <Link to="#" className="navigation-link">Impact</Link>
          </li>
          <li onClick={() => scrollToSection(controlsRef)}>
            <Link to="#" className="navigation-link">Controls</Link>
          </li>
        </ul>
      </nav>
        <section ref={whatRef} className="mb-8">
          <h2 className="text-3xl font-bold mb-4">What is Cyberbullying</h2>
          <p style={{ textAlign: 'justify' }}><strong>Cyberbullying is a pervasive issue in today's digital age, characterized by the use of electronic communication to harass, intimidate, or harm others. It takes various forms, including spreading rumors, sharing embarrassing or manipulated photos or videos, or sending threatening messages.<br></br><br></br>Unlike traditional bullying, cyberbullying can occur 24/7 and reach a wide audience instantly, making it particularly insidious and difficult to escape. The fact is that cyberbullying happens more often than we think, and some of the most severe cases lead to the loss of lives.</strong><br></br><br></br></p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/niaDJdEXk9U?si=55vpP579MGTjZ1qe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><br></br><br></br>
          <p style={{ textAlign: 'justify' }}><strong>Here are some common types of cyberbullying: </strong></p><br></br>

          <ul>
  <li>
   <strong> 1. Social Media Bullying:</strong>
    <ul>
      <li style={{ marginLeft: '20px' }}>- This happens on platforms like Facebook, Instagram, or Twitter.</li>
      <li style={{ marginLeft: '20px' }}>- People might post mean comments, make fun of others, or share embarrassing pictures or stories about them.</li>
      <li style={{ marginLeft: '20px' }}>- This kind of bullying can be really hurtful because it's visible to a lot of people and can spread quickly.</li>
      <li style={{ marginLeft: '20px' }}>- For example, someone spreading rumors about you to all your friends online.</li>
    </ul>
  </li>
</ul>
<ul>
  <li>
    <br></br><strong>2. Doxing:</strong>
    <ul>
      <li style={{ marginLeft: '20px' }}>- This is when someone shares personal information about another person without their permission. </li>
      <li style={{ marginLeft: '20px' }}>- This could include things like their home address, phone number, or even financial details.</li>
      <li style={{ marginLeft: '20px' }}>- Doxing can be dangerous because it can make the person vulnerable to harassment or even real-life threats.</li>
      <li style={{ marginLeft: '20px' }}>- For example, if someone shares your address online, strangers might show up at your house or bother you with unwanted calls.</li>
    </ul>
  </li>
</ul>
<ul>
  <li>
    <br></br><strong>3. Sexting Coercion:</strong>
    <ul>
      <li style={{ marginLeft: '20px' }}>- This is when someone pressures another person into sending intimate photos or videos, and then shares them without their consent.</li>
      <li style={{ marginLeft: '20px' }}>- It's a form of blackmail and can be incredibly damaging.</li>
      <li style={{ marginLeft: '20px' }}>- Imagine trusting someone with a private photo, only for them to betray that trust by sharing it with others.</li>
      <li style={{ marginLeft: '20px' }}>- This can cause immense embarrassment and distress, and it's a serious violation of privacy.</li>
    </ul>
  </li>
</ul>
<ul>
  <li>
    <br></br><strong>4. Group Attacks:</strong>
    <ul>
      <li style={{ marginLeft: '20px' }}>- Instead of just one person bullying someone online, a whole group might join in.</li>
      <li style={{ marginLeft: '20px' }}>- They might team up to send mean messages, spread rumors, or even organize campaigns to ruin someone's reputation.</li>
      <li style={{ marginLeft: '20px' }}>- This can happen for various reasons, like disagreements or just because they want to feel powerful.</li>
      <li style={{ marginLeft: '20px' }}>- Being targeted by a group can be really overwhelming and make the person feel isolated.</li><br></br>
    </ul>
  </li>
</ul><br></br>
<p style={{ textAlign: 'justify' }}>  <strong>Cyberbullying has drastically increased in recent years, with the wide use of social media and the internet. With more children being on the internet and more adults, both male and female, being involved in cyberbullying cases. </strong></p><br></br>
<ul>
  <li>
  <strong> Below are a few instances of cyberbullying that occurred in Malaysia: </strong>
    <ul>
      <li style={{ marginLeft: '20px' }}><br></br><a href="https://www.sinardaily.my/article/177853/focus/national/mother-of-three-believed-to-have-committed-suicide-after-alleged-cyber-bullying">a) Mother of three believed to have committed suicide after alleged cyber bullying.</a> <br></br>gambar</li>
      <li style={{ marginLeft: '20px' }}><br></br><a href="https://amp.theguardian.com/world/2019/may/15/teenage-girl-kills-herself-after-instagram-poll-in-malaysia">b) Teenage girl kills herself ‘after Instagram poll’ in Malaysia.</a> <br></br>gambar</li>
      <li style={{ marginLeft: '20px' }}><br></br><a href="https://worldofbuzz.com/20yo-girl-from-penang-committed-suicide-after-fb-page-spread-fake-info-cyberbullied-her">c) 20 years old girl from Penang committed suicide after Facebook Page spread fake info and cyberbullied her.</a> <br></br>gambar</li><br></br><br></br><br></br>
      </ul>
  </li>
</ul>
        </section>
        <section ref={impactRef} className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Impact of Cyberbullying</h2>
  <p style={{ textAlign: 'justify' }}>
    <strong>Cyberbullying goes beyond individual victims, affecting communities, physical health, mental well-being, education, and cybersecurity. It has significant implications for both individuals and society at large.</strong>
  </p>
  <ul>
    <li>
      <strong><br></br>1. Mental Health:</strong>
      <ul>
        <li style={{ marginLeft: '20px' }}>- Cyberbullying is strongly linked to mental health issues such as depression, anxiety, and low self-esteem.</li>
        <li style={{ marginLeft: '20px' }}>- Victims may experience feelings of helplessness, shame, and isolation, which can exacerbate underlying mental health conditions or lead to the development of new ones.</li>
        <li style={{ marginLeft: '20px' }}>- In severe cases, victims may feel overwhelmed by the relentless harassment and abuse, seeing no way out of their situation.</li>
        <li style={{ marginLeft: '20px' }}>- The emotional pain inflicted by cyberbullying can become unbearable, leading some individuals to contemplate suicide or engage in self-harm as a means of coping with their distress.</li>
      </ul>
    </li>
    <li>
      <strong><br></br>2. Physical Health:</strong>
      <ul>
        <li style={{ marginLeft: '20px' }}>- While cyberbullying primarily affects mental well-being, the stress and anxiety it generates can manifest physically.</li>
        <li style={{ marginLeft: '20px' }}>- Chronic stress from cyberbullying can lead to headaches, muscle tension, fatigue, and sleep disturbances.</li>
        <li style={{ marginLeft: '20px' }}>- The stress can also impact the digestive system, leading to gastrointestinal issues such as stomachaches, nausea, diarrhea, or irritable bowel syndrome (IBS).</li>
        <li style={{ marginLeft: '20px' }}>- Prolonged exposure to stress hormones like cortisol can also weaken the immune system, making individuals more susceptible to illnesses.</li>
      </ul>
    </li>
    <li>
      <strong><br></br>3. Community Impact:</strong>
      <ul>
        <li style={{ marginLeft: '20px' }}>- Cyberbullying can fracture communities by creating an atmosphere of fear and distrust.</li>
        <li style={{ marginLeft: '20px' }}>- When individuals feel unsafe or targeted online, they may withdraw from community engagement, both online and offline.</li>
        <li style={{ marginLeft: '20px' }}>- This withdrawal can diminish social cohesion, making it challenging to build strong community bonds and collaborate on shared goals or initiatives.</li>
      </ul>
    </li>
    <li>
      <strong><br></br>4. Educational and Professional Consequences:</strong>
      <ul>
        <li style={{ marginLeft: '20px' }}>- Cyberbullying can disrupt academic and professional pursuits by undermining victims' focus, confidence, and motivation.</li>
        <li style={{ marginLeft: '20px' }}>- Students may struggle to concentrate in school, leading to decreased academic performance.</li>
        <li style={{ marginLeft: '20px' }}>- Similarly, employees experiencing cyberbullying at work may find it challenging to fulfill their job responsibilities, jeopardizing their career advancement opportunities.</li>
      </ul>
    </li>
    <li>
      <strong><br></br>5. Cybersecurity Concerns:</strong>
      <ul>
        <li style={{ marginLeft: '20px' }}>- Cyberbullying raises significant cybersecurity risks, especially when personal information is exploited or exposed.</li>
        <li style={{ marginLeft: '20px' }}>- Victims may become targets of identity theft, cyberstalking, or online harassment if their private data is compromised during cyberbullying incidents.</li>
        <li style={{ marginLeft: '20px' }}>- This underscores the importance of safeguarding personal information and practicing digital hygiene to mitigate cybersecurity threats.</li><br></br><br></br><br></br>
      </ul>
    </li>
  </ul>
        </section>
        <section ref={controlsRef} className="mb-8">
  <h2 className="text-3xl font-bold mb-4">Controls for Cyberbullying</h2>
  <p style={{ textAlign: 'justify' }}><strong>Preventing cyberbullying requires an approach that addresses various aspects of individual behavior, community dynamics, and societal norms. It underscores the importance of proactive measures to prevent and address cyberbullying effectively, promoting a safer and more inclusive online environment for all.</strong></p><br></br>
  <p style={{ textAlign: 'justify' }}><strong>
    Here are some controls that can be implemented to prevent cyberbullying:
    </strong> </p><br></br>
  <ol>
    <li>
      <strong>1. Education and Awareness:</strong>
      <ul>
        <li>- Educating individuals about the consequences of cyberbullying and promoting digital literacy are essential preventive measures.</li>
        <li>- Community-wide awareness campaigns can highlight the impact of cyberbullying on mental health, physical well-being, and community cohesion, encouraging individuals to recognize and report instances of online abuse.</li>
        <li>- By fostering empathy, respect, and responsible online behavior, education initiatives empower individuals to become positive agents of change within their communities.</li>
      </ul>
    </li>
    <li>
      <strong><br></br>2. Community Engagement:</strong>
      <ul>
        <li>- Building strong, connected communities is key to preventing cyberbullying.</li>
        <li>- Community organizations, schools, and local authorities can facilitate opportunities for positive social interactions, fostering a sense of belonging and support among residents.</li>
        <li>- By promoting inclusivity, diversity, and mutual respect, communities can create a supportive environment that discourages cyberbullying and promotes healthy online interactions.</li>
      </ul>
    </li>
    <li>
      <strong><br></br>3. Regulatory Measures:</strong>
      <ul>
        <li>- Implementing clear policies and regulations against cyberbullying is essential to deter perpetrators and hold them accountable for their actions.</li>
        <li>- Schools, workplaces, and online platforms should have robust anti-bullying policies that outline consequences for cyberbullying behavior.</li>
        <li>- Additionally, legal frameworks should be strengthened to address gaps in cyberbullying legislation, ensuring that perpetrators can be prosecuted and victims can access justice and support.</li>
      </ul>
    </li>
    <li>
      <strong><br></br>4. Peer Support and Intervention:</strong>
      <ul>
        <li>- Empowering bystanders to intervene and support victims of cyberbullying is crucial for prevention efforts.</li>
        <li>- Community-based programs can train individuals, particularly youth, to recognize the signs of cyberbullying and intervene safely and effectively.</li>
        <li>- Encouraging bystanders to speak out against online abuse, offer support to victims, and report incidents to appropriate authorities helps create a culture of solidarity and collective responsibility within communities.</li>
      </ul>
    </li>
    <li>
      <strong><br></br>5. Communicate with trusted individuals:</strong>
      <ul>
        <li>- For children that are experiencing cyberbullying, talking to parents or guardians is essential because they can provide a safe space for children to express their feelings, offer practical advice on staying safe online, and intervene if necessary by reporting the bullying to appropriate authorities or platforms.</li>
        <li>- Similarly, adults facing cyberbullying can seek support from friends, family members, or trusted colleagues.</li>
        <li>- Discussing the situation with someone who cares can provide emotional support, help in devising strategies to cope with the bullying, and encourage seeking professional assistance if needed.</li>
        <li>- These conversations foster a sense of empowerment, validation, and connection, ultimately contributing to a safer online environment for everyone.</li>
      </ul>
    </li>
  </ol>
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

export default CyberbullyingPage;
