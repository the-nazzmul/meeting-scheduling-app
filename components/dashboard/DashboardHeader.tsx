import UserDropdown from "../UserDropdown";

const DashboardHeader = () => {
  return (
    <div className="flex justify-end p-4 shadow-md bg-gradient-to-r from-white to-gray-300">
      <UserDropdown inDashboard />
    </div>
  );
};

export default DashboardHeader;
