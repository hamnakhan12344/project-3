import React from "react";

function ComingSoonCard() {
  return (
    <div className="flex flex-col items-center border p-4 hover:drop-shadow-xl bg-white">
      <img src="assets/images/under15phone.png" alt="" />
      <div className="text-black">Infinix Note 12 G96</div>
      <div className="text-gray-500">6.7"/8/128GB/5000 MAh</div>
      <div className="font-bold bg-clip-text text-transparent coming-soon">
        Coming Soon
      </div>
    </div>
  );
}

export default ComingSoonCard;
