const lists = [
  {
    id: 1,
    title: "State Management",
    subtitle: "Centralized state management with Redux Toolkit",
  },

  {
    id: 2,
    title: "API Integration",
    subtitle: "Fakestore API used for fetching products list",
  },

  {
    id: 3,
    title: "Advanced Filtering",
    subtitle: "Debounced filtering and pagination implemented",
  },
];
const Details = () => {
  return (
    <div className="bg-white p-4 rounded-xl flex flex-col space-y-4 hover:bg-primary-light-1 hover:shadow-md hover:shadow-primary/20 hover:translate-y-0.5  transition-all duration-300 ease-in-out border border-gray-200">
      <div>
        <h4 className="font-bold text-lg">About the project</h4>
        <p className="text-sm text-gray-400">Key features</p>
      </div>

      <div className="flex flex-col  space-y-4">
        {lists.map((list) => (
          <div className="flex gap-x-4 items-center" key={list.id}>
            <div className="h-2 w-2 rounded bg-primary"></div>
            <div>
              <h6 className="text-md font-medium">{list.title}</h6>
              <p className="text-sm text-gray-400">{list.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
