import AuthLayout from "../../Layout/AuthLayout";
import { useForm } from "react-hook-form";
import http from "../../services/httpService";
import { apiEndpoint } from "../../constants/defaultValues";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  // importing utilities from react-hook-form

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      Username: "",
      Email: "",
      Password: "",
    },
  });

  // Form Subimssion Function

  const onSubmit = async (datas) => {
    try {
      // Getting jwt token from request

      const { data } = await http.post(apiEndpoint + "/admin-register", datas);
      console.log(data);
      if (data) {
        localStorage.setItem("token", JSON.stringify(data));
        window.location = "/";
      }
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  return (
    <AuthLayout>
      <div className="register-page container">
        <ToastContainer />

        <h1 className="authpage-title mb-2">Register</h1>

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

          {/* Email input -starts */}

          <div className="form-group">
            <input
              {...register("Email", { required: "Email is required!" })}
              type="email"
              className="form-control regular"
              id="registerEmailField"
              placeholder="Enter Email"
            />
          </div>

          {/* Email input -ends */}

          {errors.Email?.message}

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

          {/* Password input -starts */}

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

            {/* Form buttons -ends */}
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Register;

// const form = new FormData();
// form.append("Email", data.Email);
// form.append("Username", data.Username);
// form.append("Password", data.Password);
// if (data.Images) {
//   for (let i = 0; i < data.Images.length; i++) {
//     form.append("Images", data.Images[i]);
//   }
// }
