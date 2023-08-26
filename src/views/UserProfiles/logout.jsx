const Logout = () => {
  localStorage.clear(), (window.location = "/auth/user");
};

export default Logout;
