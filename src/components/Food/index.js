import React from "react";

export default ({ foodPosition }) => {
  return (
    <div
      className="food"
      style={{
        left: `${foodPosition[0]}%`,
        top: `${foodPosition[1]}%`
      }}
    ></div>
  )

}