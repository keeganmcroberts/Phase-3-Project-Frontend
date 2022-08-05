import React from "react";
import { VictoryPie } from "victory-pie";

const myData = [
  { x: "Bills", y: 300 },
  { x: "Food", y: 400 },
  { x: "Gas", y: 300 },
  { x: "Clothes", y: 300},
  { x: "Rent", y: 900},
  { x: "Vacation", y: 300},
];

const ExpenseGraph = () => {
  return (
    <div className="pieChart">
      <VictoryPie
        data={myData}
        colorScale={["blue", "yellow", "red", "green", "orange", "purple"]}
        radius={60}
      />
    </div>
  );
};

export default ExpenseGraph;