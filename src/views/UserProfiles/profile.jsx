import { useForm } from "react-hook-form";
import AppLayout from "../../Layout/AppLayout";
import http from "../../services/httpService";
import { apiEndpoint } from "../../constants/defaultValues";

const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const form = new FormData();
      form.append("User", "jahid");
      if (data.Images) {
        for (let i = 0; i < data.Images.length; i++) {
          form.append("Images", data.Images[i]);
        }
      }
      await http
        .post(apiEndpoint + "/admin-register" + "/profile-picture", form)
        .then((window.location = "/"));
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <AppLayout>
        <h1>Profile</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <input
              {...register("Images")}
              className="form-control"
              type="file"
              id="formFile"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button
            type="reset"
            className="btn btn-primary"
            onClick={() => reset()}
          >
            Reset
          </button>
        </form>
      </AppLayout>
    </div>
  );
};

export default Profile;
