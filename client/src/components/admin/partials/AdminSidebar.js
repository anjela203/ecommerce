import React, { Fragment } from "react";
import { useLocation, useHistory } from "react-router-dom";

const AdminSidebar = (props) => {
  const location = useLocation();
  const history = useHistory();
  const {isSidebarOpen} = props;


  return (
    <Fragment>
      <div
       
        style={{ boxShadow: "1px 1px 8px 0.2px #aaaaaa",background: "#303031" }}

        id="sidebar"
        className={`${isSidebarOpen ? "block" : "hidden"} sticky top-0 left-0 h-screen sm:w-6/12 md:w-3/12 lg:w-2/12 sidebarShadow bg-white text-gray-600`}
      >
        <div
          onClick={(e) => history.push("/admin/dashboard")}
          className={`text-white ${
            location.pathname === "/admin/dashboard"
              ? "border-r-4 border-gray-100 bg-yellow-800"
              : ""
          } hover:bg-yellow-800 cursor-pointer flex flex-col items-center justify-center py-6 `}
        >
          <span>
            <svg
              className={`w-8 h-8`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </span>
          <span>Dashboard</span>
        </div>
        <hr className="border-b border-gray-200" />
        <div
          onClick={(e) => history.push("/admin/dashboard/categories")}
          className={`text-white ${
            location.pathname === "/admin/dashboard/categories"
            ? "border-r-4 border-gray-100 bg-yellow-800"
            : ""
          } hover:bg-yellow-800 cursor-pointer flex flex-col items-center justify-center py-6 `}
        >
          <span>
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </span>
          <span>Categories</span>
        </div>
        <hr className="border-b border-gray-200" />
        <div
          onClick={(e) => history.push("/admin/dashboard/products")}
          className={`text-white ${
            location.pathname === "/admin/dashboard/products"
            ? "border-r-4 border-gray-100 bg-yellow-800"
            : ""
          } hover:bg-yellow-800 cursor-pointer flex flex-col items-center justify-center py-6 `}
        >
          <span>
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              />
            </svg>
          </span>
          <span>Product</span>
        </div>
        <hr className="border-b border-gray-200" />
        <div
          onClick={(e) => history.push("/admin/dashboard/orders")}
          className={`text-white ${
            location.pathname === "/admin/dashboard/orders"
            ? "border-r-4 border-gray-100 bg-yellow-800"
            : ""
          } hover:bg-yellow-800 cursor-pointer flex flex-col items-center justify-center py-6 `}
        >
          <span>
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
          </span>
          <span>Order</span>
        </div>
        <hr className="border-b border-gray-200" />
      </div>
    </Fragment>
  );
};

export default AdminSidebar;
