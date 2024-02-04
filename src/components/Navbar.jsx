import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";
import { NavLink } from "react-router-dom";
import "../components/Homepage.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <NavLink to="/">
            <p>TravelMedia.in</p>
          </NavLink>
        </div>

        <div className="nav-tabs">
          <NavLink to="/">
            <HomeIcon />
          </NavLink>
          <NotificationsIcon />

          <BookmarkIcon />

          <PersonIcon />
        </div>

        <div className="empty-container"></div>
      </nav>
    </div>
  );
}

export default Navbar;
