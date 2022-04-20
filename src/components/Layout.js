import React from "react";
import Content from "./Content";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <Sidebar />
      <Content />
      {children}
    </div>
  );
}

export default Layout;
