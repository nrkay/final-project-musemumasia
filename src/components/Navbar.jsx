import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark">
      <div className="container-fluid">
        <div className="logo">
          <img src="https://raw.githubusercontent.com/Shafira-van/latihan/main/museumAsia/logo.png" />
          <div className="navbar-brand">
            <a>Museum</a>
            <a>Asia</a>
          </div>
        </div>
        <div className="isiKonten">
          <ul className="navbar-nav">
            <li className="nav-item">
              <CustomLink to={"/home"} className="nav-link" aria-current="page">
                Home
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink to={"/collection"} className="nav-link">
                Collection
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink to={"/faq"} className="nav-link">
                Faq
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink to={"/."} className="nav-link">
                Logout
              </CustomLink>
            </li>
          </ul>
          <div className="profile">
            <img src="profile.jpg" />
            <div className="nama_profil"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <Link id={isActive ? "active" : ""} to={to} {...props}> 
      {children}
    </Link>
  );
}

export default Navbar;
