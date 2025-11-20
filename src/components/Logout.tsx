import Generic from "./Generic";
import { MdLogout } from "react-icons/md";

const Logout = () => {
  return (
    <Generic
      heading="Reports"
      subHeading="View the detailed report here"
      title="Report page under construction"
      subTitle="Reports with visualization"
      icon={<MdLogout className="text-primary" />}
    />
  );
};

export default Logout;
