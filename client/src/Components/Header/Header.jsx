import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import AddPropertyModel from "../AddPropertyModel/AddPropertyModel";
import useAuthCheck from "../../hooks/useAuthCheck";

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();
  const [modelOpened, setModelOpened] = useState(false);
  const { validateLogin } = useAuthCheck();
  
  const handleAddProperty = () => {
    if (validateLogin()) {
      setModelOpened(true);
    }
  };
  
  return (
    <section className="text-white  sticky top-0 z-50">
      <div className="flex justify-between items-center py-4 px-4 sm:px-6 text-[var(--secondary)]">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="logo" className="h-8 sm:h-10" />
        </Link>
        
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div
            className={`flex flex-col md:flex-row md:gap-8 items-center
              absolute md:relative top-16 right-4 sm:right-8 md:top-auto md:right-auto
              bg-white text-black md:bg-transparent
              p-6 md:p-0 rounded-lg shadow-md md:shadow-none
              transition-all duration-300 ease-in md:text-white gap-4 z-[99] w-[200px] sm:w-[250px] md:w-auto
              ${menuOpened ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"} md:translate-x-0 md:opacity-100`}
          >
            <NavLink 
              to="/properties" 
              className="w-full md:w-auto text-center py-2 hover:text-blue-500 transition-colors"
              onClick={() => setMenuOpened(false)}
            >
              Properties
            </NavLink>
            
            <a 
              href="mailto:deshwalishank@gmail.com" 
              className="w-full md:w-auto text-center py-2 hover:text-blue-500 transition-colors"
              onClick={() => setMenuOpened(false)}
            >
              Contact
            </a>

            <div 
              onClick={() => {
                handleAddProperty();
                setMenuOpened(false);
              }} 
              className="w-full md:w-auto text-center py-2 hover:text-blue-500 transition-colors cursor-pointer"
            >
              Add Property
            </div>
            
            <AddPropertyModel
              opened={modelOpened}
              setOpened={setModelOpened}
            />

            {!isAuthenticated ? (
              <button
                type="button"
                className="w-full md:w-auto px-4 py-2 bg-blue-600 text-white rounded-full
                transition-all duration-300 ease-in-out
                hover:bg-blue-700 hover:cursor-pointer shadow"
                onClick={() => {
                  loginWithRedirect();
                  setMenuOpened(false);
                }}
                style={{ appearance: "none" }}
              >
                Login
              </button>
            ) : (
              <div className="w-full md:w-auto flex justify-center">
                <ProfileMenu user={user} logout={logout} />
              </div>
            )}
          </div>
        </OutsideClickHandler>

        {/* Menu Toggle Button */}
        <div
          onClick={() => setMenuOpened((prev) => !prev)}
          className="menu-icon md:hidden cursor-pointer"
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
}

export default Header;
