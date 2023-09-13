import CompaniesGrid from "../components/CompaniesGrid"
import { UserState } from "../context/Context"
const Companies = () => {
  const { jobsState } = UserState();

  return (
    <div>
      <CompaniesGrid jobs={jobsState}/>
    </div>
  )
}

export default Companies
