import { Link } from "react-router-dom";
import data from "../constants/menu.js";

const ProfileDropdown = () => {
  return (
    <div className="dropdown">
      <ul className="list">
        {data.map((a) =>
          a.id === "userprofile"
            ? a.subs.map((b) => (
                <li key={b.label}>
                  <Link to={b.to}>{b.label}</Link>
                </li>
              ))
            : ""
        )}
      </ul>
    </div>
  );
};

export default ProfileDropdown;
