import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { Menu, X } from "lucide-react";
import Sidebar from "../components/Sidebar";
import { SignIn, useUser } from "@clerk/clerk-react";

function Layout() {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const { user } = useUser();
  return user ? (
    <div className="flex flex-col items-start justify-start h-screen cursor-pointer">
      <nav className="w-full px-8 min-h-14 flex items-center justify-between border-b border-gray-200">
        {/* Logo and Text Container */}
        <div className="flex items-center gap-2" onClick={() => navigate("/")}>
          <img
            src={assets.logo}
            className="cursor-pointer h-12 w-auto"
            alt="NovaSuite-AI Logo"
          />
          {/* NovaSuite-AI Text */}
          <span className="text-xl font-semibold text-gray-800">
            NovaSuite-AI
          </span>
        </div>
        {sidebar ? (
          <X
            className="w-6 h-6 text-gray-600 sm:hidden"
            onClick={() => setSidebar(false)}
          />
        ) : (
          <Menu
            className="w-6 h-6 text-gray-600 sm:hidden"
            onClick={() => setSidebar(true)}
          />
        )}
      </nav>
      <div className="flex-1 w-full flex h-[calc(100vh-64px)]">
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        <div className="flex-1 bg-[#F4F7FB]">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center h-screen">
      <SignIn />
    </div>
  );
}

export default Layout;
