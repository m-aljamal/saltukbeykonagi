import React, { FC } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout: FC = ({ children }) => {
  return (
    <div className="relative">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
