import type { PropsWithChildren } from "react";
import React from "react";
import Navbar from "./navbar";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="my-16 mx-auto max-w-xl flex flex-col gap-2">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
