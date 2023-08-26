import { Link } from "react-router-dom";
import TopNav from "../container/nav/topNav";
import { useLocation } from "react-router-dom";

const AuthLayout = ({ children }) => {
  const location = useLocation();
  return (
    <div>
      <TopNav />
      <div>
        {location.pathname === "/auth/user" ? (
          ""
        ) : (
          <Link className="auth-back-btn font-lg medium" to="/auth/user">
            Back to User-Page
          </Link>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default AuthLayout;
