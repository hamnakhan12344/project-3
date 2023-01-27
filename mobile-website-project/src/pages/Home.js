import React from "react";
import BrowseByBudgetCard from "../components/BrowseByBudgetCard/BrowseByBudgetCard";
import CustomCarousel from "../components/Carousel/Carousel";
import DesktopMultiCarousel from "../components/Carousel/DesktopMultiCarousel";
import PopularComparisonCard from "../components/ComparisonCard/PopularComparisonCard";
import ComingSoonCard from "../components/MobileInfoCard/ComingSoonCard";
import MobileInfoCard from "../components/MobileInfoCard/MobileInfoCard";
import PopularMobileCard from "../components/MobileInfoCard/PopularMobileCard";
import TechNewCard from "../components/TechNewCard/TechNewCard";
import TopWatches from "../components/WatchCard/TopWathes";

function Home() {
  return (
    <>
      <div className="w-full px-4 md:px-0 md:grid grid-cols-12 mt-3">
        <div className="col-span-2"></div>
        <div className="col-span-8 flex flex-col gap-10">
          <CustomCarousel />
          <div className="flex flex-col gap-2">
            <div className="border-l-4 border-pink-600 pl-2 font-bold">
              Browse By Brands
            </div>
            <DesktopMultiCarousel />
          </div>
          <div className="flex flex-col gap-4">
            <div className="border-l-4 border-pink-600 pl-2 font-bold">
              Browse By Budget
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              <BrowseByBudgetCard />
              <BrowseByBudgetCard />
              <BrowseByBudgetCard />
              <BrowseByBudgetCard />
              <BrowseByBudgetCard />
              <BrowseByBudgetCard />
            </div>
          </div>
          <div className="flex justify-center w-full">Advertisements</div>
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
              <div>Latest Mobiles</div>
              <div className="p-1 px-3 text-sm text-white bg-gray-600 rounded-full">
                See More {">"}
              </div>
            </div>
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

        <div className="col-span-2"></div>
        <div className="col-span-8 flex flex-col gap-10 my-12">
          <div className="flex flex-col gap-4 mt-10">
            <div className="flex justify-between border-l-4 border-pink-600 pl-2 font-bold">
              <div>Upcoming Mobiles</div>
              <div className="p-1 px-3 text-sm text-white bg-gray-600 rounded-full">
                See More {">"}
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
              <ComingSoonCard />
              <ComingSoonCard />
              <div className="hidden md:block">
                <ComingSoonCard />
              </div>
              <div className="hidden md:block">
                <ComingSoonCard />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2"></div>

        <div className="col-span-2"></div>
        <div className="col-span-8 flex flex-col gap-10 my-12">
          <div className="flex flex-col gap-4 mt-10">
            <div className="flex justify-between border-l-4 border-pink-600 pl-2 font-bold">
              <div>Popular Mobiles</div>
              <div className="p-1 px-3 text-sm text-white bg-gray-600 rounded-full">
                See More {">"}
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
              <PopularMobileCard />
              <PopularMobileCard />
              <div className="hidden md:block">
                <PopularMobileCard />
              </div>
              <div className="hidden md:block">
                <PopularMobileCard />
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
            <div className="flex justify-between border-l-4 border-pink-600 pl-2 font-bold">
              <div>Top Watches</div>
              <div className="p-1 px-3 text-sm text-white bg-gray-600 rounded-full">
                See More {">"}
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
              <TopWatches />
              <TopWatches />
              <div className="hidden md:block">
                <TopWatches />
              </div>
              <div className="hidden md:block">
                <TopWatches />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2"></div>

        <div className="col-span-2"></div>
        <div className="col-span-8 flex flex-col gap-10 my-12">
          <div className="flex flex-col gap-4 mt-10">
            <div className="flex justify-between border-l-4 border-pink-600 pl-2 font-bold">
              <div>Popular Comparisons</div>
              <div className="p-1 px-3 text-sm text-white bg-gray-600 rounded-full">
                See More {">"}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-6">
              <PopularComparisonCard />
              <PopularComparisonCard />
              <PopularComparisonCard />
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
            <div className="flex justify-between border-l-4 border-pink-600 pl-2 font-bold">
              <div>Tech News</div>
              <div className="p-1 px-3 text-sm text-white bg-gray-600 rounded-full">
                See More {">"}
              </div>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 gap-y-6">
              <TechNewCard />
              <TechNewCard />
              <TechNewCard />
              <TechNewCard />
              <div className="hidden md:block">
                <TechNewCard />
              </div>
              <div className="hidden md:block">
                <TechNewCard />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2"></div>
      </div>
      <div
        className="col-span-12 py-24 flex flex-col justify-center items-center w-full"
        style={{
          backgroundImage: "url(assets/images/overlay-surface.png)",
          height: 520,
        }}
      >
        <div
          className="font-bold mb-10"
          style={{ fontSize: "36px", lineHeight: "50px" }}
        >
          Subscribe to Newsletter
        </div>
        <div>
          <input
            type="text"
            style={{ width: 570 }}
            className="p-3 focus:outline-none"
          />
          <button
            style={{ width: 130 }}
            className="p-3 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          >
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
