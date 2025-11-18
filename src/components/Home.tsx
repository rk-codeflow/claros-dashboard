import StatCard from "./StatCard";

const Home = () => {
  return (
    <div className="flex flex-col space-y-4 px-8 py-4">
      <div>
        <h3 className="text-md sm:text-lg md:text-2xl font-bold">Overview</h3>
        <p className="text-sm text-gray-600">
          Monitor your key metrics and analytics in real-time
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard />
        <StatCard />
        <StatCard />
      </div>
    </div>
  );
};

export default Home;
