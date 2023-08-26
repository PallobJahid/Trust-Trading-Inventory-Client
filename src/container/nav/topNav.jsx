import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import avatar from "../../assets/images/avatar.png";
import jwt_decode from "jwt-decode";
import date from "date-and-time";
import http from "../../services/httpService";
import { apiEndpoint } from "../../constants/defaultValues";

import ProfileDropdown from "../../components/profileDropdown";

const TopNav = () => {
  const [openDropdown, setOpenDropDown] = useState(false);
  const menuRef = useRef();

  // Date & Time
  const now = new Date();
  const newdate = date.format(now, "YYYY/MM/DD");
  const newtime = date.format(now, "hh:mm A");
  const newday = date.format(now, "ddd");

  // User details
  const [userDetails, setUserDetails] = useState({});
  const [profilePhoto, setProfilePhoto] = useState();

  const token = localStorage.getItem("token");
  useEffect(() => {
    try {
      // Geting Token from local storage
      if (token) {
        const userdata = jwt_decode(token);
        setUserDetails(() => userdata);

        // fetch the profile picture for current user with params -Start

        const handleFetch = async () => {
          const result = await http.get(
            apiEndpoint +
              "/admin-register/admin-profile-picture/" +
              userdata.Username
          );
          setProfilePhoto(() => result.data.imageBase64);
          console.log(result);
        };
        handleFetch();

        // fetch the profile picture - End

        // Dropdown Utilities - Start
        let dropdownEventHandlar = (e) => {
          if (menuRef.current && !menuRef.current.contains(e.target)) {
            setOpenDropDown(false);
          }
        };
        document.addEventListener("mousedown", dropdownEventHandlar);
        return () => {
          document.removeEventListener("mousedown", dropdownEventHandlar);
        };
        // Dropdown Utilities - End
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleMouseMove = () => {
    console.log("mouseMoved");
    setOpenDropDown(() => true);
  };

  return (
    <div className="container row pl-3 pr-3 pt-1 pb-1 topNav align-center">
      <div className="col-9-xxl justify-center col-9-xl col-9-md col-12-sm col-12-xs display-f left-contents">
        <h1 className="font-xxl">Trust Trading</h1>
      </div>

      <div className="display-f justify-center col-3-xxl col-3-xl col-3-md col-12-sm col-12-xs right-contents">
        {/* time & date section - starts */}

        <div className="display-f align-center">
          <div>
            <div className="font-md">{newdate}</div>
            <div className="font-md">{newday}</div>
          </div>
          <div className="align-center display-f pr-2 pl-2">
            <h2 className="font-xl">{newtime}</h2>
          </div>
          {/* time & date section - ends */}

          {/* Dropdown - starts */}

          {openDropdown ? (
            <div ref={menuRef}>
              <ProfileDropdown />
            </div>
          ) : (
            ""
          )}

          {/* Dropdown - ends */}

          {/* profile Sections -- start */}

          {token ? (
            <div className="display-f align-center">
              {/* Profile Picture - starts */}

              <div className="profile_picture mr-1">
                {profilePhoto ? (
                  <img
                    src={`data:image/jpeg;base64,${profilePhoto}`}
                    alt="Profile-picture"
                  />
                ) : (
                  <img src={avatar} alt="avatar" />
                )}
              </div>

              {/* Profile Picture - ends */}

              {/* User Details - starts */}

              <div>
                <div>
                  {userDetails ? (
                    <Link
                      onMouseOver={() => setOpenDropDown(true)}
                      to="/userprofile"
                      className="font-xl medium"
                    >
                      {userDetails.Username}
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  {userDetails ? (
                    <p className="font-sm medium">{userDetails.Role}</p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        {/* User Details - ends */}

        {/* profile Sections -- ends */}
      </div>
    </div>
  );
};

export default TopNav;
