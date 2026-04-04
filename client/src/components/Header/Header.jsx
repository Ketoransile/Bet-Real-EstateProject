import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, NavLink } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { useAuth } from "../../context/AuthContext.jsx";
import ProfileMenu from "../ProfileMenu/ProfileMenu.jsx";
import AddPropertyModal from "../AddPropertyModal/AddPropertyModal.jsx";
import useAuthCheck from "../../hooks/useAuthCheck.jsx";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const isScrolled = useHeaderColor();
  const [modalOpened, setModalOpened] = useState(false);
  const { handleLoginSuccess, isAuthenticated, user, logout } = useAuth();
  const { validateLogin } = useAuthCheck();

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => handleLoginSuccess(tokenResponse),
    onError: () => console.log('Login Failed'),
  });

  const handleAddPropertyClick = () => {
    if (validateLogin()) {
      setModalOpened(true);
    }
  };
  return (
    <header 
      className="h-wrapper"
      style={{
        background: isScrolled ? "var(--black)" : "transparent",
        boxShadow: isScrolled ? "0 4px 15px rgba(0,0,0,0.3)" : "none",
        borderBottom: isScrolled ? "none" : "2px solid rgba(255, 255, 255, 0.05)"
      }}
    >
      <div className="h-container">
        {/* logo */}
        <Link to="/">
          <img src="./logo.png" alt="logo" className="logo-img" />
        </Link>

        {/* menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div
            className="h-menu"
            style={getMenuStyles(menuOpened)}
          >
            <NavLink to="/properties" className="nav-link">Properties</NavLink>
            <a href="mailto:abdisileshi123@gmail.com" className="nav-link">Contact</a>

            {/* add property */}
            <div className="add-property-btn" onClick={handleAddPropertyClick}>Add Property</div>
            <AddPropertyModal opened={modalOpened} setOpened={setModalOpened} />
            
            {/*Login Button*/}
            {!isAuthenticated ? (
              <button className="button" onClick={() => login()}>
                Login
              </button>
            ) : (
              <ProfileMenu user={user} logout={logout} />
            )}
          </div>
        </OutsideClickHandler>

        {/* for medium and small screens */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </header>
  );
};

export default Header;
