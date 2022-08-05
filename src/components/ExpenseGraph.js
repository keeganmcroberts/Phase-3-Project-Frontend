import React from "react";
import { VictoryPie } from "victory-pie";

const myData = [
  { x: "Bills", y: 900 },
  { x: "Food", y: 400 },
  { x: "Gas", y: 300 },
  { x: "Clothes", y: 300}
];

const ExpenseGraph = () => {
  return (
    <div className="pieChart">
      <VictoryPie
        data={myData}
        colorScale={["#a4a1e7", "#81c2fc","#7fe2ff", "#96feff"]}
        radius={60}
        height={180}
      />
    </div>
  );
};

export default ExpenseGraph;