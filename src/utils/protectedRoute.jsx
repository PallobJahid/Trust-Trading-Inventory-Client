import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  let auth = { token: localStorage.getItem("token") };
  return auth.token ? <Outlet /> : <Navigate to="/auth/user" />;
};

export default PrivateRoutes;