import React from "react";
import DesktopMultiCarousel from "../components/Carousel/DesktopMultiCarousel";
import MobileInfoCard from "../components/MobileInfoCard/MobileInfoCard";

function BrandMobilesPage() {
  return (
    <div className="w-full px-4 md:px-0 md:grid grid-cols-12 mt-3">
      <div className="col-span-2"></div>
      <div className="col-span-8 flex flex-col gap-10">
        <DesktopMultiCarousel />
      </div>
      <div className="col-span-2"></div>

      <div className="col-span-2 bg-gray-100"></div>
      <div className="col-span-8 p-6 flex justify-center bg-gray-100 py-4">
        <div className="bg-white p-4 w-full flex justify-center">
          Ads Placement
        </div>
      </div>
      <div className="col-span-2 bg-gray-100"></div>

      <div className="col-span-2"></div>
      <div className="col-span-8 flex flex-col gap-10 my-12">
        <div className="flex flex-col gap-4 mt-10">
          <div className="flex justify-between border-l-4 border-pink-600 pl-2 font-bold">
            <div>Filter Devices</div>
          </div>
          <div className="flex p-2 bg-gray-100 text-red-600 justify-between flex-wrap">
            <div className="flex flex-col">
              <label className="text-black" htmlFor="">
                Date
              </label>
              <select
                className="py-1 px-3 bg-white focus:outline-none"
                name="date"
                id="date"
              >
                <option value="one">Option 1</option>
                <option value="two">Option 2</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-black" htmlFor="">
                RAM
              </label>
              <select
                className="py-1 px-3 bg-white focus:outline-none"
                name="RAM"
                id="ram"
              >
                <option value="one">Option 1</option>
                <option value="two">Option 2</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-black" htmlFor="">
                Storage
              </label>
              <select
                className="py-1 px-3 bg-white focus:outline-none"
                name="Sorage"
                id="stoage"
              >
                <option value="one">Option 1</option>
                <option value="two">Option 2</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-black" htmlFor="">
                Display
              </label>
              <select
                className="py-1 px-3 bg-white focus:outline-none"
                name="Display"
                id="display"
              >
                <option value="one">Option 1</option>
                <option value="two">Option 2</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-black" htmlFor="">
                Battery
              </label>
              <select
                className="py-1 px-3 bg-white focus:outline-none"
                name="Battery"
                id="battery"
              >
                <option value="one">Option 1</option>
                <option value="two">Option 2</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-black" htmlFor="">
                Price Range
              </label>
              <select
                className="py-1 px-3 bg-white focus:outline-none"
                name="Price Range"
                id="price-range"
              >
                <option value="one">Option 1</option>
                <option value="two">Option 2</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2"></div>

      <div className="col-span-2"></div>
      <div className="col-span-8 flex flex-col gap-10 my-12">
        <div className="flex flex-col gap-4 mt-10">
          <div className="flex justify-between border-l-4 border-pink-600 pl-2 font-bold">
            <div>Oppo Mobiles</div>
          </div>{" "}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            <div>
              <MobileInfoCard />
            </div>
            <div>
              <MobileInfoCard />
            </div>
            <div>
              <MobileInfoCard />
            </div>
            <div>
              <MobileInfoCard />
            </div>
            <div className="hidden md:block">
              <MobileInfoCard />
            </div>
            <div className="hidden md:block">
              <MobileInfoCard />
            </div>
            <div className="hidden md:block">
              <MobileInfoCard />
            </div>
            <div className="hidden md:block">
              <MobileInfoCard />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2"></div>

      <div className="col-span-2 bg-gray-100"></div>
      <div className="col-span-8 p-6 flex justify-center bg-gray-100 py-4">
        <div className="bg-white p-4 w-full flex justify-center">
          Ads Placement
        </div>
      </div>
      <div className="col-span-2 bg-gray-100"></div>

      <div className="col-span-2"></div>
      <div className="col-span-8 flex flex-col gap-10 my-12">
        <div className="flex flex-col gap-4 mt-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            <div>
              <MobileInfoCard />
            </div>
            <div>
              <MobileInfoCard />
            </div>
            <div>
              <MobileInfoCard />
            </div>
            <div>
              <MobileInfoCard />
            </div>
            <div className="hidden md:block">
              <MobileInfoCard />
            </div>
            <div className="hidden md:block">
              <MobileInfoCard />
            </div>
            <div className="hidden md:block">
              <MobileInfoCard />
            </div>
            <div className="hidden md:block">
              <MobileInfoCard />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2"></div>

      <div className="col-span-2 bg-gray-100"></div>
      <div className="col-span-8 p-6 flex justify-center bg-gray-100 py-4">
        <div className="bg-white p-4 w-full flex justify-center">
          Ads Placement
        </div>
      </div>
      <div className="col-span-2 bg-gray-100"></div>

      <div className="col-span-2"></div>
      <div className="col-span-8 flex flex-col gap-10 my-12">
        <div className="flex flex-col gap-4 mt-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            <div>
              <MobileInfoCard />
            </div>
            <div>
              <MobileInfoCard />
            </div>
            <div>
              <MobileInfoCard />
            </div>
            <div>
              <MobileInfoCard />
            </div>
            <div className="hidden md:block">
              <MobileInfoCard />
            </div>
            <div className="hidden md:block">
              <MobileInfoCard />
            </div>
            <div className="hidden md:block">
              <MobileInfoCard />
            </div>
            <div className="hidden md:block">
              <MobileInfoCard />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2"></div>

      <div className="col-span-2 bg-gray-100"></div>
      <div className="flex justify-end col-span-8 bg-gray-100 gap-2 pt-4">
        <div className="py-3 px-5 bg-blue-600 text-white">1</div>
        <div className="py-3 px-5 bg-white">2</div>
        <div className="py-3 px-5 bg-white">3</div>
        <div className="py-3 px-5 bg-white">....</div>
        <div className="py-3 px-5 bg-white">20</div>
        <div className="py-3 px-5 bg-white">{">"}</div>
      </div>
      <div className="col-span-2 bg-gray-100"></div>

      <div className="col-span-2 bg-gray-100"></div>
      <div className="col-span-8 p-6 flex justify-center bg-gray-100 py-4">
        <div className="bg-white p-4 w-full flex justify-center">
          Ads Placement
        </div>
      </div>
      <div className="col-span-2 bg-gray-100"></div>
    </div>
  );
}

export default BrandMobilesPage;
