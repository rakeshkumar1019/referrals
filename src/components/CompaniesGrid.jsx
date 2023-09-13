import { useState } from "react";
import Model from "./Model";

/* eslint-disable react/prop-types */
const CompaniesGrid = ({ jobs }) => {
    const [isReferralRequested,setIsReferralRequested] = useState(false)
    const [selectedCompany,setSelectedCompany] = useState({})
    const handleSelecetedCompany= (job)=>{
      setIsReferralRequested(!isReferralRequested);
      setSelectedCompany(job)
    }
    const handleModelClose = ()=>{
        setIsReferralRequested(false)
    }
  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="sm:w-1/2 xl:w-1/3 mx-auto text-center mb-6 md:mb-12">
          <h2 className="text-xl font-semibold md:text-2xl md:leading-tight text-gray-800 dark:text-gray-200">
            You have the flexibility to choose from any of the companies below
            to receive a referral.
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 lg:gap-6">
          {jobs?.map((job,idx) => (
            <div
              key={idx}
              className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800"
            >
              <img
                className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-800 dark:text-gray-200"
                src={job.companyLogo}
              />
              <h3 className="text-center">{job.companyName}</h3>
              
              <div className="grid justify-items-center mt-1">
                <button
                  type="button"
                  onClick={()=>handleSelecetedCompany(job)}
                  className="rounded-xs bg-slate-500 px-3 py-1 text-xs font-semibold text-white hover:bg-slate-900 "
                >
                  Request Referral
                </button>
              </div>
            </div>
          ))}
        </div>
        <Model job={selectedCompany}  isOpen={isReferralRequested} handleClose={handleModelClose}/>

      </div>
    </>
  );
};

export default CompaniesGrid;
