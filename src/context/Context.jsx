/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useContext, createContext, useReducer } from "react";
import { userReducer ,jobsReducer} from "./Reducers";
import {users} from "../constants/users"
import {jobs} from "../constants/jobs"
const User = createContext();
const Context = ({ children }) => {
  const [userState, userDispatch] = useReducer(userReducer, 
//     {
//     fullName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     resumeLink: "",
//     isLogin:false,
//     userType: {
//       isCandidate: false,
//       isReferrer: false,
//     },
//   }
   users
  );
  const [jobsState,jobsDispatch] = useReducer(jobsReducer,jobs)
  return (
    <User.Provider value={{ userState, userDispatch,jobsState,jobsDispatch }}>
      {children}
    </User.Provider>
  );
};
export default Context;

export const UserState =()=>{
    return useContext(User);
} 
