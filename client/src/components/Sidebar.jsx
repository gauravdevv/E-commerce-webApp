import React from "react";
import '../components/Sidebar.css'
import {
  FaTh,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const menuItem = [
    {
      path: "",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/admin/aboutpage",
      name: "About",
      icon: <FaUserAlt />,
    },
    {
      path: "/admin/homepage",
      name: "Analytics",
      icon: <FaRegChartBar />,
    },
    {
      path: "/comment",
      name: "Comment",
      icon: <FaCommentAlt />,
    },
    {
      path: "/product",
      name: "Product",
      icon: <FaShoppingBag />,
    },
    {
      path: "/productList",
      name: "Product List",
      icon: <FaThList />,
    },
  ];
  return (
    <div className="cont">
      <div style={{ width: "300px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: "block" }} className="logo">
            Admin
          </h1>
          {/* <div style={{ marginLeft: "50px" }} className="bars">
          </div> */}
        </div>
        <div className="lg"></div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeClassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div style={{ display: "block" }} className="link_text">
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
