import Generic from "./Generic";
import { MdLogout } from "react-icons/md";

const Logout = () => {
  return (
    <Generic
      heading="Logout"
      subHeading="Manage logout from here"
      title="Logout page under construction"
      subTitle="Logout"
      icon={<MdLogout className="text-primary" />}
    />
  );
};

export default Logout;
