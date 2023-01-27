import React from "react";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import TabletMacIcon from "@mui/icons-material/TabletMac";
import WatchIcon from "@mui/icons-material/Watch";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { blue, red } from '@mui/material/colors';

function Toolbar() {
  return (
    <div className="hidden w-full xl:grid grid-cols-12 shadow-lg p-4">
      <div className="col-span-2"></div>
      <div className="col-span-8">
        <div className="flex justify-between gap-2">
          <HomeIcon />
          <div className="flex items-center gap-1">
            <WhatshotIcon /> Trending Mobiles
          </div>
          <div className="flex items-center gap-1">
            <FormatListBulletedIcon /> Brands
          </div>
          <div className="flex items-center gap-1">
            <PhoneAndroidIcon /> Phones
          </div>
          <div className="flex items-center gap-1">
            <TabletMacIcon /> Tablets
          </div>
          <div className="flex items-center gap-1">
            <WatchIcon /> Watches
          </div>
          <div className="flex items-center gap-1">
            <CompareArrowsIcon />
            Compare Mobiles
          </div>
          <div className="flex gap-1">
            <FacebookSharpIcon sx={{ color: blue[500] }} />
            <YouTubeIcon sx={{ color: red[500] }} />
            <LinkedInIcon sx={{ color: blue[500] }} />
            <PinterestIcon sx={{ color: red[500] }} />
          </div>
        </div>
      </div>
      <div className="col-span-2"></div>
    </div>
  );
}

export default Toolbar;
