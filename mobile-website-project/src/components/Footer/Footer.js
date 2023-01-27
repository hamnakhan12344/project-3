import React from "react";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

function Footer() {
  return (
    <div className="w-full bg-black text-white text-sm p-4">
      <div className="flex flex-col xl:grid grid-cols-12">
        <div className="col-span-2"></div>
        <div className="col-span-8 flex flex-col gap-8">
          <div className="flex flex-col xl:grid xl:grid-cols-5 xl:pt-8 gap-2 xl:mb-12">
            <div className="hidden xl:flex flex-col gap-2">
              <img src="/assets/images/web-logo.png" width={80} alt="" />
              <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Blanditiis nesciunt molestias, nisi consequu et voluptate amet
                consectetur adipisicing elit amet consectetur adipis elit
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-lg font-bold">Softliee</div>
              <div>
                <ArrowRightIcon fontSize="small" /> Our Blog
              </div>
              <div>
                <ArrowRightIcon fontSize="small" /> Contact Us
              </div>
              <div>
                <ArrowRightIcon fontSize="small" /> Advertise with us
              </div>
              <div>
                <ArrowRightIcon fontSize="small" /> Privacy Policy
              </div>
              <div>
                <ArrowRightIcon fontSize="small" /> Terms & Conditions
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex text-lg font-bold">Top Brands</div>
              <div className="flex gap-2">
                <div>
                  <div>
                    <ArrowRightIcon fontSize="small" />
                    Apple
                  </div>
                  <div>
                    <ArrowRightIcon fontSize="small" />
                    Samsung
                  </div>
                  <div>
                    <ArrowRightIcon fontSize="small" />
                    Huawei
                  </div>
                  <div>
                    <ArrowRightIcon fontSize="small" />
                    Oppo
                  </div>
                  <div>
                    <ArrowRightIcon fontSize="small" />
                    Realme
                  </div>
                </div>
                <div>
                  <div>
                    <ArrowRightIcon fontSize="small" />
                    Apple
                  </div>
                  <div>
                    <ArrowRightIcon fontSize="small" />
                    Samsung
                  </div>
                  <div>
                    <ArrowRightIcon fontSize="small" />
                    Huawei
                  </div>
                  <div>
                    <ArrowRightIcon fontSize="small" />
                    Oppo
                  </div>
                  <div>
                    <ArrowRightIcon fontSize="small" />
                    Realme
                  </div>
                </div>
                <div className="xl:hidden">
                  <div>
                    <ArrowRightIcon fontSize="small" />
                    Apple
                  </div>
                  <div>
                    <ArrowRightIcon fontSize="small" />
                    Samsung
                  </div>
                  <div>
                    <ArrowRightIcon fontSize="small" />
                    Huawei
                  </div>
                  <div>
                    <ArrowRightIcon fontSize="small" />
                    Oppo
                  </div>
                  <div>
                    <ArrowRightIcon fontSize="small" />
                    Realme
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden xl:flex flex-col gap-2">
              <div className="text-lg font-black">Sections</div>
              <div>
                <ArrowRightIcon fontSize="small" /> Top Mobiles
              </div>
              <div>
                <ArrowRightIcon fontSize="small" /> Top Watches
              </div>
              <div>
                <ArrowRightIcon fontSize="small" /> Top Tablets
              </div>
              <div>
                <ArrowRightIcon fontSize="small" /> Tech News
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-lg font-black">Download US</div>
              <img
                className="border border-white rounded-lg"
                src="assets/images/getitongoogleplay.png"
                alt=""
                style={{ width: 100 }}
              />
            </div>
          </div>
          <hr />
          <div className="flex flex-col xl:flex-row justify-between">
            <div>
              Softliee Pakistan &copy; 2020 All Rights Reserved{" "}
              <span className="text-red-500">Softliee.com</span>
            </div>
            <div className="flex gap-4">
              <FacebookSharpIcon />
              <YouTubeIcon />
              <LinkedInIcon />
              <PinterestIcon />
            </div>
          </div>
        </div>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
}

export default Footer;
