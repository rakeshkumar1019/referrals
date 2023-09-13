import { useState } from "react";
import {Link} from "react-router-dom"
import { ArrowRight } from "lucide-react";
import AlertBanner from "../components/AlertBanner";
import { UserState } from "../context/Context";

const CandidateSignUp = () => {
  const {userState,userDispatch} = UserState()
  const [message,setMessage] = useState("")
  const [candidate,setCandidate] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    resumeLink: "",
  })
  const handleSubmit = (e)=>{
    e.preventDefault();
    const {password,confirmPassword} = candidate;
    const isEmptyFileds = Object.values(candidate).filter((candt)=> (candt === ''))
    if(password!==confirmPassword){
      setMessage("Password & Confirm Password Does't Match!")
    }else if(isEmptyFileds.length > 0 ){
      setMessage("No filed should be empty");
    }else{
      setMessage("")
    }
    // console.log(userState)
    // userDispatch({type:'CREATE_CANDIDATE_ACCOUNT',paylaod:candidate})
  }
  const handleChange = (e)=>{
     const {name,value} = e.target;
     setCandidate({
      ...candidate,
      [name]:value
     })
  }
  return (
    <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          {message? <AlertBanner message={message}/>:null}
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Create Candidate  Account
          </h2>
          <p className="mt-2 text-center text-base text-gray-600">
            Already have an account?{" "}
            <Link to="/signin">
            <span
              className="font-medium text-black transition-all duration-200 hover:underline"
            >
              Sign In
            </span>
            </Link>
          </p>
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Full Name{" "}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Full Name"
                    name="fullName"
                    id="fullName"
                    value={candidate.fullName}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Email address{" "}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
                    name="email"
                    id="email"
                    value={candidate.email}
                    onChange={handleChange}

                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Password{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    name="password"
                    id="password"
                    value={candidate.password}
                    onChange={handleChange}

                  ></input>
                </div>
              </div>
              <span className="font-light text-xs  line-clamp-2">
               A minimum of 8 characters must be used with 1 uppercase, 1 lowercase, 1 number, & 1 special character.
              </span>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Confirm Password{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder=" Confirm Password"
                    name="confirmPassword"
                    id="confirmPassword"
                    value={candidate.confirmPassword}
                    onChange={handleChange}

                  ></input>
                </div>
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Resume Link{" "}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Resume Link"
                    name="resumeLink"
                    id="resumeLink"
                    value={candidate.resumeLink}
                    onChange={handleChange}

                  ></input>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Create Account <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
         
        </div>
      </div>
    </section>
  );
};

export default CandidateSignUp;
