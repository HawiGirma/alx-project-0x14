import React from "react";

const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      Layout
      {children}
    </div>
  );
};

export default Layout;
