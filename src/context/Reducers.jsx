export const userReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_CANDIDATE_ACCOUNT":
      return {
        ...state,
        fullName: action.paylaod.fullName,
        email: action.paylaod.email,
        password: action.paylaod.password,
        confirmPassword: action.paylaod.confirmPassword,
        resumeLink: action.paylaod.resumeLink,
        userType: {
          ...state.userType,
          isCandidate: true,
        },
      };

    case "CREATE_REFERRER_ACCOUNT":
      return "";
    case "USER_SIGNIN":
      return "";
    case "USER_LOGOUT":
      return "";
    default:
      return state;
  }
};

export const jobsReducer = (state,action)=>{
  switch(action.type){
     default:
      return state;
  }
  
}