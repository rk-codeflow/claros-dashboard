import type { ReactElement } from "react";

interface GenericProps {
  heading: string;
  subHeading?: string;
  title?: string;
  subTitle?: string;
  icon?: ReactElement;
}

const Generic = ({
  heading,
  subHeading,
  title,
  subTitle,
  icon,
}: GenericProps) => {
  return (
    <div className="flex flex-col space-y-10 padding ">
      <div>
        <h3 className="text-md sm:text-lg md:text-2xl font-bold">{heading}</h3>
        <p className="text-sm text-gray-600">{subHeading}</p>
      </div>

      <div className="bg-white p-4 rounded-xl flex items-center justify-between border border-gray-200 hover:border-primary transition-all duration-500">
        <div>
          <h4 className="font-bold text-lg">{title}</h4>
          <p className="text-sm text-gray-400">{subTitle}</p>
        </div>
        <div className="h-10 w-10 rounded-lg bg-[#E2F0F3] flex items-center justify-center">
          <div className="flex justify-center items-center">{icon}</div>
        </div>
      </div>
    </div>
  );
};

export default Generic;
