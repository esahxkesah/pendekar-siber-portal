import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import CyberSafetyModule from "./pages/CyberSafetyModule"
import CyberSecurityCareer from "./pages/CyberSecurityCareer"
import Dashboard from "./pages/Dashboard"
import PersonalityTest from "./pages/PersonalityTest"
import Quiz from "./pages/Quiz"
import DiscussionForum from "./pages/DiscussionForum"
import Project from "./pages/Project"
import Header from "./components/Header"
import Footer from "./components/Footer"
import PrivateRoute from "./components/PrivateRoute"
import SexualExploitationPage from "./pages/SexualExploitation"
import GamingDisorderPage from "./pages/GamingDisorder"
import CyberbullyingPage from "./pages/Cyberbullying"
import CreatePost from "./pages/CreatePost"
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute"


export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/aboutus" element={<AboutUs/>}/>
      <Route path="/sign-in" element={<SignIn />}/>
      <Route path="/sign-up" element={<SignUp />}/>
      <Route element={<PrivateRoute/>}> 
        <Route path="/dashboard" element={<Dashboard />}/>
        </Route>
      <Route element={<OnlyAdminPrivateRoute/>}> 
        <Route path="/create-post" element={<CreatePost />}/>
        </Route>
      <Route path="/projects" element={<Project />}/>
      <Route path="/cybersafetymodule" element={<CyberSafetyModule />}/>
      <Route path="/cybersecuritycareer" element={<CyberSecurityCareer />}/>
     
      <Route path="/personalitytest" element={<PersonalityTest />}/>
      <Route path="/quiz" element={<Quiz />}/>
      <Route path="/discussionforum" element={<DiscussionForum />}/>
      <Route path="/cyberbullying" element={<CyberbullyingPage />}/>
      <Route path="/sexualexploitation" element={<SexualExploitationPage />}/>
      <Route path="/gamingdisorder" element={<GamingDisorderPage />}/>

    </Routes>
    <Footer/>
    </BrowserRouter>

      )
}
