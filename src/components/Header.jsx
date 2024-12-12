import { Outlet, NavLink, Link, useNavigate } from "react-router-dom";
import "./css/header.css";
import { useEffect, useRef } from "react";

const Header = (props) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/signup");
  };
  let user = JSON.parse(localStorage.getItem("user"));
  const crossRef = useRef(null);
  const cloneRef = useRef(null);
  const navRef = useRef(null);
  const sidebarRef = useRef(null);
  const navbarOption = !user
    ? [{ title: "Home", path: "/" }, { title: "Screening", path: "/screening" },]

    : [
      { title: "Home", path: "/" },
      { title: "Screening", path: "/screening" },
      { title: "Tests", path: "/assesment" },
      { title: "EEG", path: "/eeg-reports" },
      { title: "Dashboard", path: "/dashboard" },
    ];
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 0 && window.innerWidth >= 720) {
        cloneRef.current.style.display = "block";
        navRef.current.style.position = "fixed";
        navRef.current.style.top = 0;
        navRef.current.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
        navRef.current.style.backdropFilter = "blur(8px)";
        navRef.current.style.boxShadow =
          "0px 10px 40px 0 rgba(255, 255, 255, 0.8) inset";
      } else if (window.scrollY >= 0 && window.innerWidth <= 720) {
        cloneRef.current.style.display = "block";
        navRef.current.style.position = "fixed";
        navRef.current.style.top = 0;
        navRef.current.style.backgroundColor = "white";
        navRef.current.style.backdropFilter = "";
        navRef.current.style.boxShadow = "";
        navRef.current.style.height = "5rem";
      } else {
        navRef.current.style.position = "relative";
        cloneRef.current.style.display = "none";
        navRef.current.style.height = "5rem";
        navRef.current.style.backgroundColor = "white";
        navRef.current.style.backdropFilter = "";
        navRef.current.style.boxShadow = "";
      }
    });
    return window.removeEventListener("scroll", () => { });
  }, []);

  // for changing cross sign and showing nav menu
  const changeBars = () => {
    if (crossRef.current.className.includes("change")) {
      crossRef.current.className = "navbar2";
      sidebarRef.current.style.height = "0rem";
    } else {
      crossRef.current.className = "navbar2 change";
      sidebarRef.current.style.height = "calc(100vh - 5rem)";
    }
  };

  // for closing nav menu
  const closeSidebar = () => {
    crossRef.current.className = "navbar2";
    sidebarRef.current.style.height = "0rem";
  };

  return (
    <>
      <div className="layoutContainer">
        <div className="header" ref={navRef}>
          <div className="navbar-brand">
            <Link to="/">
              <img className="logoImg" src="images/logo.png" alt="Logo" />
            </Link>
          </div>
          <div className="navbar2" ref={crossRef} onClick={changeBars}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="navbar1">
            <nav>
              <ul>
                {navbarOption.map((item) => {
                  return (
                    <li>
                      <NavLink
                        to={item.path}
                        style={({ isActive }) => ({
                          color: isActive ? "#10AEFF" : "#464646",
                          textDecoration: "none",
                          borderBottom: isActive
                            ? "0.25rem solid #10AEFF"
                            : "none",
                        })}
                      >
                        {item.title}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </nav>
            {props.auth ? null : !user ? (
              <>
                <NavLink
                  to="/signin"
                  activeClassName="active"
                  className="main-btn"
                  style={{ marginRight: "15px" }}
                >
                  Sign In
                </NavLink>
                <NavLink
                  to="/signup"
                  activeClassName="active"
                  className="main-btn"
                >
                  Sign Up
                </NavLink>
              </>
            ) : (
              <button
                onClick={handleLogout}
                activeClassName="active"
                className="main-btn"
              >
                Log Out
              </button>
            )}
          </div>
        </div>
        <div className="navFilter" ref={cloneRef}></div>
        <div className="sidebar" ref={sidebarRef}>
          <nav>
            <ul>
              {navbarOption.map((item) => {
                return (
                  <li>
                    <NavLink
                      to={item.path}
                      onClick={closeSidebar}
                      style={({ isActive }) => ({
                        color: isActive ? "#10AEFF" : "#464646",
                        textDecoration: "none",
                        borderBottom: isActive
                          ? "0.25rem solid #10AEFF"
                          : "none",
                      })}
                    >
                      {item.title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="lineMark">
            <span></span>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Header;
