import React from "react";

export default ({ snakeParts }) => {
  return (
    <div>
      {snakeParts.map((part, i) => {
        const style = {
          left: `${part[0]}%`,
          rigth: `${part[1]}%`
        }
        return <div className="snake-part" key={i} style={style} ></div>
      })}
    </div>
  )

}