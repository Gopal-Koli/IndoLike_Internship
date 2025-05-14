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
  const [open, setOpen] = React.useState(true);

  return (
    <div className="">
      <nav className="flex item !w-full">
        <div className="nav-left flex-div">
          <IoMdMenu
            className=" bg-sky hover:bg-[#dbd7d7]  text-3xl !p-1 !rounded-full cursor-pointer"
            onClick={()=>setOpen(!open)}
          />
          <Drawer
            open={open}
            anchor="left"
            hideBackdrop
            ModalProps={{
              sx: {
                pointerEvents: "none", //
              },
              BackdropProps: {
                sx: {
                  backgroundColor: "transparent",
                  pointerEvents: "none", //
                },
              },
            }}
            PaperProps={{
              sx: {
                pointerEvents: "auto", // Ensure the sidebar itself is clickable
                top: "92px",
                height: "calc(100% - 92px)",
                borderRight: "1px solid #ddd",
                boxShadow: "none",
                position: "fixed",
              },
            }}
          >
            <Sidebar  />
          </Drawer>
          <img className="logo" src={logo} alt="" />
        </div>

        <div className="nav-middle flex-div">
          <div className="search-box flex-div">
            <input type="text" placeholder="search here..." />
            <IoSearch className="search " />
          </div>
          <button
            className="bg-sky hover:bg-[#dbd7d7] !p-1 !rounded-full cursor-pointer"
            
          >
            <MdKeyboardVoice className=" text-[23px]" />
          </button>
        </div>

        <div className="create h-[50%] !mt-7  justify-center">
          <IoAddOutline /> Create
        </div>

        <div className="nav-right flex-div">
          <IoMdNotifications />

          <img src={profile} className="myprofile" alt=" Profile" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
