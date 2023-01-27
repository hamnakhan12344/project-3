import React from "react";
import CompareButton from "../CompareButton/CompareButton";

function MobileInfoCard() {
  return (
    <div className="flex flex-col items-center border p-4 hover:drop-shadow-xl bg-white">
      <img src="assets/images/under15phone.png" alt="" />
      <div className="text-black">Infinix Note 12 G96</div>
      <CompareButton />
      <div className="text-gray-500">6.7"/8/128GB/5000 MAh</div>
      <div className="text-black font-bold">RS. 36, 999</div>
    </div>
  );
}

export default MobileInfoCard;
