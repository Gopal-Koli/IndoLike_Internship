import React from "react";
import "./Navbar.css";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { IoMdCloudUpload } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoMdMenu } from "react-icons/io";
import { MdKeyboardVoice } from "react-icons/md";
import { IoAddOutline } from "react-icons/io5";
import profile from "../../assets/gopal.jpg";
import Button from "@mui/material/Button";
import Submenu from "../../Pages/Home/Submenu";
import Drawer from "@mui/material/Drawer";
import Sidebar from "../Sidebar/Sidebar";
const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
      <nav className="flex items-center  h-[60px] justify-between px-4 py-2  md:px-6">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <IoMdMenu
            className="text-3xl p-1 rounded-full cursor-pointer hover:bg-gray-200"
            onClick={() => setOpen(!open)}
          />
          <Drawer
            open={open}
            anchor="left"
            hideBackdrop
            ModalProps={{
              sx: { pointerEvents: "none" },
              BackdropProps: {
                sx: {
                  backgroundColor: "transparent",
                  pointerEvents: "none",
                },
              },
            }}
            PaperProps={{
              sx: {
                pointerEvents: "auto",
                top: "60px",
                height: "calc(100% - 60px)",
                borderRight: "1px solid #ddd",
                boxShadow: "none",
                position: "fixed",
              },
            }}
          >
            <Sidebar />
          </Drawer>
          <img src={logo} alt="Logo" className="h-22 w-auto" />
        </div>

       
        <div className="hidden sm:flex flex-1 max-w-xl mx-4 items-center gap-2">
          <div className="flex flex-1 items-center border h-9 border-gray-300 rounded-full px-3 py-1">
            <input
              type="text"
              placeholder="Search here..."
              className="flex-1 outline-none bg-transparent text-sm !p-2 "
            />
            <IoSearch className="text-gray-500 !mr-2" />
          </div>
          <button className="p-3 rounded-full hover:bg-gray-200">
            <MdKeyboardVoice className="text-2xl " />
          </button>
        </div>

      
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-1 cursor-pointer">
            <IoAddOutline className="text-xl" />
            <span className="text-sm font-medium">Create</span>
          </div>
          <IoMdNotifications className="text-xl cursor-pointer" />
          <img
            src={profile}
            alt="Profile"
            className="h-8 w-8 rounded-full object-cover cursor-pointer"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
