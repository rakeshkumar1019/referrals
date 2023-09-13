import SmThreeCrads from "../components/SmThreeCrads";
import TableWithPagination from "../components/TableWithPagination";

const ReferrarDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <SmThreeCrads />
      <TableWithPagination heading="Assigned Referrals" />
      <TableWithPagination heading="Unclaimed Referrals" />
      <TableWithPagination heading="Confirmed Referrals" />

    </div>
  );
};

export default ReferrarDashboard;
