import { useState,useEffect } from "react"
import HeroSearchSection from "../components/HeroSearchSection"
import SearchBarWithDropdown from "../components/SearchBarWithDropdown"
import Table from "../components/Table"
import { UserState } from "../context/context"
const JobBoard = () => {
  const {jobsState} = UserState();
  const [jobs,setJobs] = useState([])
  useEffect(()=>{
    const fullTimeJobs =  jobsState.filter((job)=>job.type === 'fulltime')
    setJobs(fullTimeJobs)
  },[])
  return (
    <div>
      <HeroSearchSection/>
      <SearchBarWithDropdown/>
      <Table jobs={jobs}/>
    </div>
  )
}

export default JobBoard
