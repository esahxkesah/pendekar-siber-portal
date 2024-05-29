import { Link } from "react-router-dom";
import { BsArrowLeft } from 'react-icons/bs'; // Import the arrow icon from react-icons library


export default function Quiz1() {
  
    return (
      
      
      <div className="container mx-auto p-8">
      <div className="text-center py-3">

      <Link to="/CyberSafetyModule" className="inline-block rounded-lg py-3 px-3 bg-blue-500 text-white hover:bg-blue-600 transition duration-300 mb-8">
      <BsArrowLeft className="inline-block mr-2" />Back to CyberSafety Modules
      </Link>
        <h1 style={{  paddingBottom: "40px" }} className="text-3xl font-bold text-center ">Quiz 1 </h1>
        <h2 style={{  paddingBottom: "40px" }} className="text-3xl font-bold text-center ">
         Test your knowledge on Cyberbullying Module </h2>

      </div>
          <iframe src="https://fadff45e9549.quillforms.app/forms/correct-and-incorrect-science-quiz/" width="100%" height="600" style={{ border: '0' }}></iframe>
      
      </div>
    )
  }