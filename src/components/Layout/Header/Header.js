import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MenuFoldOutlined, CloseOutlined } from "@ant-design/icons";
import SearchInput from "../../Elements/SearchInput";
function Header() {
  const [click, setClick] = useState(false);
  let location = useLocation();
  let { pathname } = location;
  return (
    <header className={` ${pathname === "/" ? null : "other-header"}`}>
      <nav className="navbar">
        <div className="container">
          <div
            className={click ? "nav-icon active" : "nav-icon"}
            onClick={() => setClick(!click)}
          >
            {click ? <CloseOutlined /> : <MenuFoldOutlined />}
          </div>
          <div className="logo">
            <Link to="/">DOMAINFINDER</Link>
          </div>
          <div
            className={
              pathname === "/" || pathname === "/results"
                ? "d-none"
                : "other-search col-lg-6 col-md-4 col-sm-12 col-12"
            }
          >
            <SearchInput />
          </div>

          <div className="nav-content  ">
            <ul
              className={click ? "nav-menu active" : "nav-menu"}
              onClick={() => setClick(false)}
            >
              <li className="nav-item">
                <NavLink className="nav-link " to="/about">
                  About us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/">
                  For Developers
                </NavLink>
              </li>
            </ul>
          </div>
          <div
            className={click ? "mobile-menu active" : "mobile-menu"}
            onClick={() => setClick(false)}
          >
            <li className="nav-item">
              <NavLink className="nav-link " to="/about">
                Main
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/about">
                About us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/about">
                For Developers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/about">
                Terms of Service
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/about">
                Privacy Policy
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/about">
                Trust & Safety
              </NavLink>
            </li>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
