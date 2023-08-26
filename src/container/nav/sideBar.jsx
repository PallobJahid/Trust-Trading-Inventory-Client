import { Link } from "react-router-dom";
import data from "../../constants/menu";
import { useLocation } from "react-router-dom";

const SideBar = () => {
  const link = useLocation();

  const handlePathMenu = (link) => {
    const linkStrArray = Array.from(link);
    const lastIndex = linkStrArray.lastIndexOf("/");
    const idStringArray = linkStrArray.slice(1, lastIndex);
    const idString = idStringArray.join("");
    return idString;
  };
  const path = handlePathMenu(link.pathname);

  return (
    <div className="sidebar">
      <div className="dashboard-button-holder">
        <div className="dashboard-button">
          <Link to={"/"}>Go to Dashboard</Link>
        </div>
      </div>

      <div>
        {data.map((a) =>
          a.id === path
            ? a.subs.map((b) => (
                <ul key={b.label} className="sidebar-menus">
                  <li>
                    <Link
                      className={link.pathname === b.to ? "selected" : ""}
                      to={b.to}
                    >
                      {b.label}
                    </Link>
                  </li>
                </ul>
              ))
            : ""
        )}
      </div>
    </div>
  );
};

export default SideBar;
