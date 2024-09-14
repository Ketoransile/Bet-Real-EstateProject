// import React, { useState } from "react";
// import { Avatar, Menu, MenuItem, IconButton } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// const ProfileMenu = ({ user, logout }) => {
//   // console.log(user);
//   const navigate = useNavigate();
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleNavigate = (path) => {
//     navigate(path, { replace: true });
//     handleMenuClose();
//   };

//   const handleLogout = () => {
//     localStorage.clear();
//     logout();
//     handleMenuClose();
//   };

//   return (
//     <>
//       <IconButton onClick={handleMenuOpen}>
//         <Avatar src={user?.picture} alt="user image" />
//       </IconButton>
//       <Menu
//         anchorEl={anchorEl}
//         open={Boolean(anchorEl)}
//         onClose={handleMenuClose}
//         anchorOrigin={{
//           vertical: "top",
//           horizontal: "right",
//         }}
//         transformOrigin={{
//           vertical: "top",
//           horizontal: "right",
//         }}
//       >
//         <MenuItem onClick={() => handleNavigate("/favourites")}>
//           Favourites
//         </MenuItem>
//         <MenuItem onClick={() => handleNavigate("/bookings")}>
//           Bookings
//         </MenuItem>
//         <MenuItem onClick={handleLogout}>Logout</MenuItem>
//       </Menu>
//     </>
//   );
// };

// export default ProfileMenu;
import React from "react";
import { Avatar, Menu } from "@mantine/core";
import { useNavigate } from "react-router-dom";
const ProfileMenu = ({ user, logout }) => {
  const navigate = useNavigate();
  return (
    <Menu>
      <Menu.Target>
        <Avatar src={user?.picture} alt="user image" radius={"xl"} />
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item onClick={() => navigate("./favourites", { replace: true })}>
          Favourites
        </Menu.Item>

        <Menu.Item onClick={() => navigate("./bookings", { replace: true })}>
          Bookings
        </Menu.Item>

        <Menu.Item
          onClick={() => {
            localStorage.clear();
            logout();
          }}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ProfileMenu;
