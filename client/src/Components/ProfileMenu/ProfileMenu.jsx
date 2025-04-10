import React from "react";
import { Avatar, Menu } from "@mantine/core";
import "@mantine/core/styles.css";
import { useNavigate } from "react-router-dom";
import { replace } from "lodash";

function ProfileMenu({ user, logout }) {
  const navigate = useNavigate();
  return (
    <div>
      <Menu>
        <Menu.Target>
          <Avatar
            src={user?.picture}
            alt="user"
            className="h-10 w-10 rounded-full"
          />
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item onClick={() => navigate("/bookings",{replace:true})}>Bookings</Menu.Item>
          <Menu.Item onClick={() => navigate("/favourites")}>Favourites</Menu.Item>
          <Menu.Item onClick={()=>{
            localStorage.clear()
            logout()
          }}>Logout</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}

export default ProfileMenu;
