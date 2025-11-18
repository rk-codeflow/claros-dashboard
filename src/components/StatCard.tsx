import { FaUsersCog } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { useState } from "react";

const StatCard = () => {
  const [stats, setstats] = useState({
    totalUsers: 3200,
    activeUsers: 2000,
    inactiveUsers: 500,
  });

  return (
    <div className="flex flex-col space-y-4 bg-white p-4">
      <div className="flex items-center justify-between">
        <p className="uppercase">total users</p>
        <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center">
          <FaUsersCog fontSize={22} />
        </div>
      </div>
      <h4 className="font-extrabold text-2xl">{stats.totalUsers}</h4>
      <p className="text-sm flex gap-x-2 items-center">
        {" "}
        <BsGraphUpArrow /> +12% from last week
      </p>
    </div>
  );
};

export default StatCard;
