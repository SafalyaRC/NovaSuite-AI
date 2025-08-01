import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ImageOff } from "lucide-react";
import { useClerk, UserButton, useSignIn, useUser } from "@clerk/clerk-react";

function Navbar() {
  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn } = useClerk();
  return (
    <div className="fixed z-5 w-full backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32 cursor-pointer">
      <div className="flex items-center gap-2" onClick={() => navigate("/")}>
        <img
          src={assets.logo}
          alt="logo"
          // Adjusted logo size for a standard and attractive look
          className="h-12 w-auto object-contain"
          onClick={() => navigate("/")}
        />
        {/* NovaSuite-AI Text */}
        <span
          className="text-xl font-semibold text-gray-800"
          onClick={() => navigate("/")}
        >
          NovaSuite-AI
        </span>
      </div>

      {user ? (
        <UserButton />
      ) : (
        <button
          className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5"
          onClick={openSignIn}
        >
          Get started <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}

export default Navbar;
