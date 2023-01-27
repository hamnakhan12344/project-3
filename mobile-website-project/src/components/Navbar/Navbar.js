import React, { useState } from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

function Navbar() {
  const [isMobNavOpen, setIsMobNavOpen] = useState(false);
  const [isMobSearchOpen, setIsMobSearchOpen] = useState(false);

  return (
    <nav className="w-full p-4 bg-blue-600 text-white">
      <div className="hidden xl:grid grid-cols-12 text-sm">
        <div className="col-span-2"></div>
        <div className="col-span-8 flex justify-between items-center">
        <img width={80} src="/assets/images/web-logo.png" alt="" />
          <div className="flex gap-5 items-center">
            <div>Tech News</div>
            <div>New Mobiles</div>
            <div>Privacy Policy</div>
            <div>Contact Us</div>
            <div>About Us</div>
          </div>
          <div className="flex justify-between gap-4 items-center">
            <div className="bg-white text-gray-500 p-1">
              <SearchOutlined />
              <input type="text" className="focus:outline-0" />
            </div>
            <div>
              <NotificationsNoneIcon />
            </div>
            <div>
              <PersonOutlineIcon />
            </div>
          </div>
        </div>
        <div className="col-span-2"></div>
      </div>
      <div className="xl:hidden flex items-center justify-between">
        <div>
          <IconButton
            className="p-0"
            color="inherit"
            onClick={() => setIsMobNavOpen(!isMobNavOpen)}
          >
            {isMobNavOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </div>
        <img width={90} src="/assets/images/web-logo.png" alt="" />
        <div className="flex items-center gap-4">
          <div className="">
            {isMobSearchOpen ? (
              <div className="bg-white text-gray-500">
                <IconButton
                  onClick={() => setIsMobSearchOpen(false)}
                  color="inherit"
                >
                  <CloseIcon />
                </IconButton>
                <input type="text" className="focus:outline-0" />
              </div>
            ) : (
              <IconButton
                onClick={() => setIsMobSearchOpen(true)}
                color="inherit"
              >
                <SearchOutlined />
              </IconButton>
            )}
          </div>
          <div>
            <NotificationsNoneIcon />
          </div>
        </div>
      </div>
      {isMobNavOpen && (
        <div className="w-full bg-blue-600 text-white flex flex-col gap-3 pt-4">
          <div>Tech News</div>
          <div>New Mobiles</div>
          <div>Privacy Policy</div>
          <div>Contact Us</div>
          <div>About Us</div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
