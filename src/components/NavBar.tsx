// import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../appwrite/authentication/authen";

const NavBar = () => {
  type NavType = {
    name: string;
    path: string;
  };

  const NavItems: NavType[] = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Rated",
      path: "/rated",
    },
  ];

  const navigate = useNavigate();

  const btnHandle = async () => {
    try {
      const response = await logout();
      if (response) navigate("/signup");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <nav className="bg-black text-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="NavItems flex space-x-6">
          {NavItems.map((item: NavType, i) => (
            <Link
              key={item.path}
              to={item.path}
              className="hover:text-gray-400 transition duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <button
          onClick={btnHandle}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-200"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
