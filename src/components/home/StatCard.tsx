import type { ReactElement } from "react";

interface StatCardProps {
  title: string;
  value: number;
  increment: number;
  icon: ReactElement;
}
const StatCard = ({ title, value, increment, icon }: StatCardProps) => {
  return (
    <div className="flex flex-col space-y-4 rounded-xl border border-gray-200 bg-white hover:bg-primary-light-1 hover:shadow-md hover:shadow-primary/20 hover:translate-y-0.5  transition-all duration-300 ease-in-out p-4">
      <div className="flex items-center justify-between">
        <p className="uppercase tracking-wide">{title}</p>
        <div className="h-10 w-10 rounded-lg bg-[#E2F0F3] flex items-center justify-center">
          <div className="flex justify-center items-center">{icon}</div>
        </div>
      </div>
      <h4 className="font-extrabold text-2xl">{value}</h4>
      <p className="text-sm flex gap-x-2 items-center text-primary">
        {" "}
        +{increment}% from last week
      </p>
    </div>
  );
};

export default StatCard;
