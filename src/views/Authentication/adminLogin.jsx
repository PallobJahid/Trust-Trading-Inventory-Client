import AuthLayout from "../../Layout/AuthLayout";
import { useForm } from "react-hook-form";
import { apiEndpoint } from "../../constants/defaultValues";
import http from "../../services/httpService";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminLogin = () => {
  // importing utilities from react-hook-form

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      Username: "",
      Password: "",
    },
  });

  // Form Subimssion Function

  const onSubmit = async (data) => {
    try {
      // Getting jwt token from request

      const { data: token } = await http.post(
        apiEndpoint + "/admin-login",
        data
      );
      if (token) {
        localStorage.setItem("token", JSON.stringify(token));
        window.location = "/";
      }
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  return (
    <AuthLayout>
      <div className="admin-login-page">
        <ToastContainer />

        <h1 className="authpage-title mb-2">Admin Login</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Username input -starts */}

          <div className="form-group">
            <input
              {...register("Username", { required: "Username is required!" })}
              type="text"
              className="form-control regular"
              id="registerUsernameField"
              placeholder="Enter Username"
            />
          </div>

          {/* Username input -ends */}

          {errors.Username?.message}

          {/* Password input -starts */}

          <div className="form-group">
            <input
              {...register("Password", {
                required: "Password is required!",
                minLength: {
                  value: 5,
                  message: "minimum 5 characters required!",
                },
              })}
              type="password"
              className="form-control regular"
              id="registerPasswordField"
              placeholder="Password"
            />
          </div>

          {errors.Password?.message}

          {/* Password input -ends */}

          {/* Form buttons - starts */}

          <div className="mt-2">
            <button type="submit" className="input-btn btn-primary mr-1">
              Submit
            </button>

            <button
              type="submit"
              className="input-btn btn-nutral"
              onClick={() => reset()}
            >
              Reset
            </button>
          </div>

          {/* Form buttons -ends */}
        </form>
      </div>
    </AuthLayout>
  );
};

export default AdminLogin;
