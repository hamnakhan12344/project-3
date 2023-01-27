import { Card } from "@mui/material";
import React from "react";

function TechNewCard() {
  return (
    <Card className="p-6 border flex flex-row gap-2">
      <img width={200} src="assets/images/technews.png" alt="" />
      <div className="flex flex-col gap-4">
        <div className="text-bold text-lg">
          Vivo�s Latest Flagship X80 Is Now Available For Sale In Pakistan...
        </div>
        <div className="text-red-300 text-base">Read More</div>
        <div className="text-sm text-gray-400">5 Min Ago</div>
      </div>
    </Card>
  );
}

export default TechNewCard;
