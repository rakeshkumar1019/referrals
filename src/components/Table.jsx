/* eslint-disable react/prop-types */
import { useState } from "react";
import Model from "./Model";

const Table = ({jobs}) => {
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
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        {/* <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
           {""}
          </div>
          <div>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add new Company
            </button>
          </div>
        </div> */}
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr className="divide-x divide-gray-200">
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        <span>Company</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        Job Title & Link
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        Tags
                      </th>

                      {/* <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        Role
                      </th> */}
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        Request a Referral
                      </th>
                      {/* <th scope="col" className="relative px-4 py-3.5">
                        <span className="sr-only">Edit</span>
                      </th>
                      <th scope="col" className="relative px-4 py-3.5">
                        <span className="sr-only">Delete</span>
                      </th> */}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {jobs.map((job,idx) => (
                      <tr
                        key={idx}
                        className="divide-x divide-gray-200"
                      >
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={job.companyLogo}
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {job.companyName}
                              </div>
                              <div className="text-sm text-gray-500">
                                {job.companyEmail}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 underline">
                            <a 
                            target="_blank"
                            rel="noreferrer"
                            href={job.jobLink}>
                            {job.jobTitle}
                            </a>
                          </div>
                          
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            {job.type}
                          </span>
                        </td>
                        {/* <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                          {person.role}
                        </td> */}
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                          <button
                            type="button"
                            onClick={()=>handleSelecetedCompany(job)}
                            className="inline-flex items-center rounded-xs bg-slate-500 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-900 "
                          >
                            Request Referral
                          </button>
                        </td>
                        {/* <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                          <a href="#" className="text-gray-500 hover:text-indigo-600">
                            Edit
                          </a>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                          <a href="#" className="text-gray-500 hover:text-indigo-600">
                            Delete
                          </a>
                        </td> */}
                      </tr>
                    ))}
                    <Model job={selectedCompany}  isOpen={isReferralRequested} handleClose={handleModelClose}/>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Table;
