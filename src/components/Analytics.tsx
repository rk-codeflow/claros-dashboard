import Generic from "./Generic";
import { SiGoogleanalytics } from "react-icons/si";

const Analytics = () => {
  return (
    <Generic
      heading="Analytics"
      subHeading="View the detailed analytics here"
      title="Analytics page under construction"
      subTitle="Analytics chart with visualization"
      icon={<SiGoogleanalytics className="text-primary" />}
    />
  );
};

export default Analytics;
