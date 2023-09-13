import {
  BrowserRouter,
  Routes,
  Route,
  } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import Navbar from './components/Navbar'
import JobBoard from './pages/JobBoard'
import Internships from './pages/Internships'
import SignUp from './pages/SignUp'
import CandidateSignUp from './pages/CandidateSignUp'
import ReferrerSingUp from './pages/ReferrerSingUp'
import SignIn from './components/SignIn'
import ReferrarDashboard from './pages/ReferrarDashboard'
import CandidateDashboard from './pages/CandidateDashboard'
import Companies from './pages/Companies'
function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<LandingPage/>} />
        <Route path="/referrer/dashboard" exact element={<ReferrarDashboard/>} />
        <Route path="/candidate/dashboard" exact element={<CandidateDashboard/>} />

        <Route path="/signup" exact element={<SignUp/>} />
        <Route path="/signin" exact element={<SignIn/>} />
        <Route path="/signup/candidate" exact element={<CandidateSignUp/>} />
        <Route path="/signup/referrer" exact element={<ReferrerSingUp/>} />

        <Route path="/job-board" exact element={<JobBoard/>} />
        <Route path="/internships" exact element={<Internships/>} />
        <Route path="/companies" exact element={<Companies/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
