import { Link } from "react-router-dom";
import AuthLayout from "../../Layout/AuthLayout";

const User = () => {
  return (
    <AuthLayout>
      <div className="userpage container">
        <div className="auth-switch">
          <ul>
            <li>
              <Link className="admin font-xl bold" to={"/auth/admin-login"}>
                Log in as a Admin
              </Link>
            </li>
            <li>
              <Link
                className="employee font-xl bold"
                to={"/auth/employee-login"}
              >
                Log in as a Employee
              </Link>
            </li>
            <li>
              <Link className="register font-xl bold" to={"/auth/register"}>
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </AuthLayout>
  );
};

export default User;
