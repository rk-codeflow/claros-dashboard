const Loading = () => {
  return (
    <div className="padding flex flex-col space-y-4 items-center bg-yellow-300">
      <h2>Loading! please wait !!</h2>
      <div className="h-6 w-6 rounded-full border border-green-700 border-t-transparent animate-spin"></div>
    </div>
  );
};

export default Loading;
