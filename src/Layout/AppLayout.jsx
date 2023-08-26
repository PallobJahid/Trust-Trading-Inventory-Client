import SideBar from "../container/nav/sideBar";
import TopNav from "../container/nav/topNav";
import { useLocation } from "react-router-dom";

const AppLayout = ({ children }) => {
  const path = useLocation();
  const pathname = path.pathname;
  return (
    <div>
      <TopNav />
      <div className="container row">
        <div className={pathname !== "/" ? "col-2-xl" : ""}>
          {path.pathname !== "/" ? <SideBar /> : ""}
        </div>
        <main className={pathname === "/" ? "col-10-xl" : ""}>
          <div>{children}</div>
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
