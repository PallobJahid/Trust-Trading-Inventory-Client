import { Link } from "react-router-dom";
import AppLayout from "../../Layout/AppLayout";

const Dashboard = () => {
  return (
    <AppLayout>
      <div className="dashboard display-f justify-center align-center">
        <div className="navigation">
          {/* App Navigations - starts */}

          <ul className="display-f justify-center">
            <li>
              <Link to={"/sales"}>SALES</Link>
            </li>
            <li>
              <Link to={"/purchase"}>PURCHASE</Link>
            </li>
            <li>
              <Link to={"/products"}>PRODUCTS</Link>
            </li>
            <li>
              <Link to={"/report"}>REPORTS</Link>
            </li>
          </ul>

          {/* App Navigations - ends */}

          {/* Swithing to Monitor or Stocks -starts */}

          <div className="dashboard-swith-buttons display-f justify-center mt-2">
            <Link className="swith-button m-btn mr-1 font-lg" to={"/products"}>
              Switch to Monitor
            </Link>
            <Link
              className="swith-button s-btn ml-1 font-lg"
              to={"/products/stocks"}
            >
              Switch to stocks
            </Link>
          </div>

          {/* Swithing to Monitor or Stocks -ends */}
        </div>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
