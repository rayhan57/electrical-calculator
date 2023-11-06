import React from "react";

const Result = ({ cost }) => {
  return (
    <div className="grid md:grid-cols-3 gap-4 mt-4 text-center">
      <Cost title={"Biaya dalam 1 hari"} cost={cost.sehari} />
      <Cost title={"Biaya dalam 7 hari"} cost={cost.seminggu} />
      <Cost title={"Biaya dalam 30 hari"} cost={cost.sebulan} />
    </div>
  );
};

const Cost = ({ title, cost }) => (
  <div className="h-20 bg-white border rounded-lg shadow-lg cursor-pointer relative overflow-hidden group">
    <div className="w-full h-full absolute z-10 group-hover:text-white p-2 transition duration-500">
      <h1 className="font-medium">{title}</h1>
      <h2 className="font-semibold text-lg">
        {"Rp" + new Intl.NumberFormat("id-ID").format(cost)}
      </h2>
    </div>

    <div className="bg-gradient-to-br from-purple-500 to to-blue-500 w-full h-full absolute top-0 left-full group-hover:left-0 transition-all duration-500"></div>
  </div>
);

export default Result;
