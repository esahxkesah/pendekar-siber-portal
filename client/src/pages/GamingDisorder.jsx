import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs'; // Import the arrow icon from react-icons library

const GamingDisorderPage = () => {
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
      <Link to="/CyberSafetyModule" className="inline-block rounded-lg py-3 px-3 bg-blue-500 text-white hover:bg-blue-600 transition duration-300 mb-8">
        <BsArrowLeft className="inline-block mr-2" /> Back to CyberSafety Modules
      </Link>

      <div className="text-center bg-blue-800 py-3">
    <h1 className="text-4xl font-bold text-white"> GAMING DISORDER</h1>
  </div><br></br>
  <nav className="mb-8">
        <ul className="flex justify-center space-x-4">
          <li onClick={() => scrollToSection(whatRef)}>
            <Link to="#" className="navigation-link" style={{ fontWeight: 'bold', fontSize: 'larger', textDecoration: 'underline' }}>What</Link>
          </li>
          <li onClick={() => scrollToSection(impactRef)}>
            <Link to="#" className="navigation-link" style={{ fontWeight: 'bold', fontSize: 'larger', textDecoration: 'underline' }}>Impact</Link>
          </li>
          <li onClick={() => scrollToSection(controlsRef)}>
            <Link to="#" className="navigation-link" style={{ fontWeight: 'bold', fontSize: 'larger', textDecoration: 'underline' }}>Controls</Link>
          </li>
        </ul>
      </nav>
      <section ref={whatRef} className="mb-8">
      <h2 className="text-3xl font-bold mb-4 text-center" >What is Gaming Disorder</h2>

  <p style={{ textAlign: 'justify' }}>
    <strong>Gaming disorder is a mental health condition recognized by the World Health Organization (WHO) characterized by a pattern of persistent and recurrent gaming behavior, either online or offline, that leads to significant impairment or distress. This disorder typically involves a loss of control over gaming, prioritizing gaming over other activities, and continuing to play despite negative consequences.</strong>
  </p><br></br>
  <iframe width="100%" height="500" src="https://www.youtube.com/embed/lJ71KAO0mtc?si=7VvibMn2qn2-BrXf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><br></br><br></br>
  <p style={{ textAlign: 'justify' }}><strong> Here's why gaming disorder can happen:</strong></p>

  <ol>
    <li>
      <strong><br></br>1. Escape and Coping Mechanism</strong>
      <ul>
        <li>- Gaming can serve as a form of escape from real-life stressors or problems.</li>
        <li>- Individuals may turn to gaming as a coping mechanism to deal with anxiety, depression, loneliness, or other emotional difficulties.</li>
        <li>- The immersive nature of video games provides a temporary reprieve from real-world challenges, making it appealing to those seeking relief.</li>
      </ul>
    </li>
    <li>
      <strong><br></br>2. Social Connection</strong>
      <ul>
        <li>- Online gaming platforms allow players to interact with others in virtual environments.</li>
        <li>- For individuals who struggle with social interactions in real life, gaming can provide a sense of belonging and social connection.</li>
        <li>- The desire to maintain these virtual relationships can drive excessive gaming behavior.</li>
      </ul>
    </li>
    <li>
      <strong><br></br>3. Personality and Psychological Factors</strong>
      <ul>
        <li>- Certain personality traits, such as impulsivity, sensation-seeking, or a predisposition to addiction, may increase the likelihood of developing gaming disorder.</li>
        <li>- Additionally, underlying psychological issues, such as low self-esteem, poor coping skills, or difficulties in regulating emotions, can contribute to excessive gaming as a means of self-soothing or avoidance.</li>
      </ul>
    </li>
    <li>
      <strong><br></br>4. Environmental Factors</strong>
      <ul>
        <li>- Environmental factors, such as easy access to gaming devices, peer influence, parental attitudes toward gaming, and cultural norms surrounding gaming, can also play a role in the development of gaming disorder.</li>
        <li>- A permissive or enabling environment may facilitate the escalation of gaming behavior.</li>
      </ul>
    </li>
    <li>
      <strong><br></br>5. Reward System Activation</strong>
      <ul>
        <li>- Video games often incorporate reward systems that stimulate the release of dopamine in the brain, the neurotransmitter associated with pleasure and reward.</li>
        <li>- For some individuals, this constant reinforcement can lead to addictive behavior, as they seek to replicate the pleasurable experience through continued gaming.</li><br></br><br></br><br></br>
      </ul>
    </li>
  </ol>
</section>

<section ref={impactRef} className="mb-8">
  <h2 className="text-3xl font-bold mb-4 text-center">Impact of Gaming Disorder</h2>
  <p style={{ textAlign: 'justify' }}>
    <strong>It's important to note that not everyone who plays video games excessively will develop gaming disorder. The condition typically involves a pattern of persistent and recurrent gaming behavior that escalates to the point of impairment or distress. It can have significant impacts on various aspects of an individual's life, affecting their physical, mental, social, and academic or occupational well-being. Early recognition and intervention are crucial in addressing gaming disorder and mitigating its adverse effects.</strong> </p><br></br>
  <p style={{ textAlign: 'justify' }}>
   <strong> Here are some of the key impacts of gaming disorder:
  </strong></p>
  <ol>
    <li>
      <strong><br></br>1. Physical Health Effects</strong>
      <ul>
        <li>- Excessive gaming can lead to physical health problems due to prolonged periods of sedentary behavior.</li>
        <li>- Individuals with gaming disorders may experience issues such as obesity, repetitive strain injuries (e.g., carpal tunnel syndrome), musculoskeletal problems, poor sleep quality or insomnia, eye strain, and headaches.</li>
      </ul>
    </li>
    <li>
      <strong><br></br>2. Mental Health Impacts</strong>
      <ul>
        <li>- Gaming disorder is associated with a range of mental health issues, including increased levels of stress, anxiety, depression, and feelings of loneliness or isolation.</li>
        <li>- Excessive gaming can exacerbate existing mental health conditions or contribute to the development of new ones, as individuals may use gaming as a maladaptive coping mechanism to escape from real-life problems.</li>
      </ul>
    </li>
    <li>
      <strong><br></br>3. Social Consequences</strong>
      <ul>
        <li>- Excessive gaming can lead to social withdrawal and isolation, as individuals prioritize gaming over spending time with friends, family, or engaging in other social activities.</li>
        <li>- This can strain interpersonal relationships, lead to conflicts with loved ones, and result in feelings of loneliness or alienation.</li>
      </ul>
    </li>
    <li>
      <strong><br></br>4. Academic or Occupational Dysfunction</strong>
      <ul>
        <li>- Gaming disorder can negatively impact academic performance or occupational functioning.</li>
        <li>- Excessive gaming may lead to poor concentration, decreased productivity, neglect of responsibilities, and absenteeism from school or work.</li>
      </ul>
    </li>
    <li>
      <strong><br></br>5. Financial Burden</strong>
      <ul>
        <li>- Gaming disorder can impose a significant financial burden on individuals and their families.</li>
        <li>- Spending excessive amounts of money on video games, in-game purchases, subscriptions, or gaming-related merchandise can lead to financial instability, debt, and economic hardship.</li>
      </ul>
    </li>
    <li>
      <strong><br></br>6. Impairment in Daily Functioning</strong>
      <ul>
        <li>- Perhaps most significantly, gaming disorder can impair an individual's ability to function effectively in their daily life.</li>
        <li>- This includes difficulties in maintaining personal hygiene, managing household chores, fulfilling familial responsibilities, and participating in meaningful social interactions.</li><br></br><br></br><br></br>
      </ul>
    </li>
  </ol>
</section>

<section ref={controlsRef} className="mb-8">
  <h2 className="text-3xl font-bold mb-4 text-center">Controls for Gaming Disorder</h2>
  <p style={{ textAlign: 'justify' }}>
    <strong>Individual, familial, societal, and regulatory measures need to work collaboratively to prevent and reduce the occurrence of gaming disorder, promoting the well-being and resilience of individuals and communities in the digital age.</strong> </p><br></br>
  <p style={{ textAlign: 'justify' }}>
    <strong>Here are some strategies that can help mitigate the risk of gaming disorder:</strong> </p><br></br>
  <ol>
    <li>
      <strong>1. Promote Balanced Lifestyles</strong>
      <ul>
        <li>- Encourage individuals, particularly children and adolescents, to engage in a variety of activities beyond gaming, such as outdoor play, sports, hobbies, socializing with friends, reading, or creative pursuits.</li>
        <li>- Emphasize the importance of maintaining a balanced lifestyle that includes physical activity, social interaction, and relaxation.</li>
      </ul>
    </li>
    <li>
      <strong><br></br>2. Set Screen Time Limits</strong>
      <ul>
        <li>- Establish clear guidelines for screen time and gaming usage, taking into account age-appropriate recommendations.</li>
        <li>- Set limits on the amount of time spent playing video games each day and encourage breaks to prevent prolonged gaming sessions.</li>
      </ul>
    </li>
    <li>
      <strong><br></br>3. Foster Open Communication</strong>
      <ul>
        <li>- Maintain open and non-judgmental communication with family members, especially children and teenagers, about gaming habits and concerns.</li>
        <li>- Encourage dialogue about the benefits and risks of gaming, and establish a supportive environment where individuals feel comfortable discussing their gaming experiences and seeking help if needed.</li>
      </ul>
    </li>
    <li>
      <strong><br></br>4. Educate About Responsible Gaming</strong>
      <ul>
        <li>- Provide education and information about responsible gaming practices, including the importance of taking breaks, setting boundaries, balancing gaming with other activities, and recognizing signs of excessive gaming behavior.</li>
        <li>- Teach individuals how to identify problematic gaming patterns and seek assistance when necessary.</li>
      </ul>
    </li>
    <li>
      <strong><br></br>5. Encourage Healthy Coping Strategies</strong>
      <ul>
        <li>- Teach healthy coping mechanisms for managing stress, anxiety, boredom, and other emotions without relying solely on gaming.</li>
        <li>- Encourage the development of adaptive coping skills, such as exercise, mindfulness, hobbies, creative expression, spending time with loved ones, or seeking professional support when needed.</li>
      </ul>
    </li>
    <li>
      <strong><br></br>6. Seek Professional Support</strong>
      <ul>
        <li>- If gaming-related concerns arise, seek guidance and support from mental health professionals, counselors, or addiction specialists who are experienced in addressing gaming disorders.</li>
        <li>- Early intervention and treatment can help individuals develop healthier gaming habits and address underlying issues contributing to problematic gaming behavior.</li>
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

export default GamingDisorderPage;
