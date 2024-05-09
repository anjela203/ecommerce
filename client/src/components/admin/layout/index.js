import React, { Fragment, useEffect, useState } from "react";

import AdminNavber from "../partials/AdminNavber";
import AdminSidebar from "../partials/AdminSidebar";
import AdminFooter from "../partials/AdminFooter";

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

 
  return (
    <Fragment>
      <AdminNavber setIsSidebarOpen={setIsSidebarOpen} />
      <section className="flex bg-gray-100">
        <AdminSidebar isSidebarOpen={isSidebarOpen} />
        <div className="w-full md:w-11/12 h-full">
          {/* All Children pass from here */}
          {children}
        </div>
      </section>
      <AdminFooter />
    </Fragment>
  );
};

export default AdminLayout;
