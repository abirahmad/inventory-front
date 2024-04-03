import React, { useState } from 'react';
import '../css/SideBar.css'; // Import your custom CSS file
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import LogoutPage from '../../components/auth/LogoutPage';

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false); // State to track menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  /// Path
  let path = window.location.pathname;
  path = path.split("/");
  path = path[path.length - 1];
  /// Active menu
  let deshBoard = [
    "product-add"
  ];

  const menuClass = isOpen ? 'sidebar open' : 'sidebar'; // Dynamically set class

  return (
    <div className={menuClass}>
      <div className="sidebar-header">
        <button type="button" onClick={toggleMenu}>
          {/* Add your logo or title here */}
        </button>
      </div>
      <ul className="sidebar-nav">
        <li className="nav-item">
          <button type="button" className="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
            Inventory
          </button>
          <div id="dashboard-collapse" className="collapse">
            <ul className="nav-submenu">
              <li><Link className={`${path === "product-list" ? "mm-active" : ""}`} to="/product-list"> Product List</Link></li>
              <li><Link className={`${path === "product-add" ? "mm-active" : ""}`} to="/product-add"> Product Add</Link></li>
            </ul>
          </div>
        </li>
        {/* ... Add more menu items as needed */}
        <li className="nav-item border-top">
          <button type="button" className="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
            Account
          </button>
          <div id="account-collapse" className="collapse">
            <ul className="nav-submenu">
            <li><Link className={`${path === "logout" ? "mm-active" : ""}`} to="/logout"> Logout</Link></li>
              <li><a href="#" className="submenu-link">Profile</a></li>
              <li><a href="#" className="submenu-link">Settings</a></li>
              <li><a href="#" className="submenu-link">Sign out</a></li>
            </ul>
          </div>
          <LogoutPage />
        </li>
      </ul>
    </div>
  );
}
