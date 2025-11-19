import { useEffect, useState } from "react";
import StatCard from "./StatCard";
import { FaUsersCog } from "react-icons/fa";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { FaHeartCrack } from "react-icons/fa6";

const Home = () => {
  const [stats, setstats] = useState({
    totalUsers: 3200,
    activeUsers: 2000,
    inactiveUsers: 500,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setstats((prev) => ({
        totalUsers: prev.totalUsers + Math.floor(Math.random() + 5 - 2),
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 5 + 10),
        inactiveUsers: prev.inactiveUsers + Math.floor(Math.random() * 15 - 5),
      }));
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex flex-col space-y-10 px-8 py-4">
      <div>
        <h3 className="text-md sm:text-lg md:text-2xl font-bold">Overview</h3>
        <p className="text-sm text-gray-600">
          Monitor your key metrics and analytics in real-time
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          title="total users"
          value={stats.totalUsers}
          increment={Math.ceil(Math.random() * 3)}
          icon={<FaUsersCog fontSize={22} color="#00b4ad" />}
        />

        <StatCard
          title="total active users"
          value={stats.activeUsers}
          increment={Math.ceil(Math.random() * 10 + 2)}
          icon={<FaHeartCircleCheck fontSize={22} color="#00b4ad" />}
        />

        <StatCard
          title="total inactive users"
          value={stats.inactiveUsers}
          increment={Math.ceil(Math.random() + 5)}
          icon={<FaHeartCrack fontSize={22} color="#00b4ad" />}
        />
      </div>
    </div>
  );
};

export default Home;
