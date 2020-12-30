import React from "react";

function City({ cityName, temp, color }) {
  return (
    <div className={"flex flex-row p-8 justify-between " + color}>
      <div>{cityName}</div>
      <div className="text-5xl">{temp}</div>
    </div>
  );
}

export default City;
