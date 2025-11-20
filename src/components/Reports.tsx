import { FaChartPie } from "react-icons/fa";
import Generic from "./Generic";

const Reports = () => {
  return (
    <Generic
      heading="Reports"
      subHeading="View the detailed report here"
      title="Report page under construction"
      subTitle="Reports with visualization"
      icon={<FaChartPie className="text-primary" />}
    />
  );
};

export default Reports;
