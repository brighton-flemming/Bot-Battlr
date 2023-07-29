import React from "react";

const RobotDetails = ({robot}) => {
  if (!robot) {
    return <div>No Robots Selected</div>
  }

  return(
   <div>
    <h2>{robot.name}</h2>
    <p>Avatar: <img src={robot.avatar_url} alt={robot.name} style={{ maxWidth: "300px" }}/></p>
    <p>Health:{robot.health}</p>
    <p>Damage:{robot.damage}</p>
    <p>Armor:{robot.armor}</p>
    <p>Bot Class:{robot.bot_class}</p>
    <p>Catchphrase:{robot.catchphrase}</p>
    <p>Created At:{robot.created_at}</p>
    <p>Updated At:{robot.updated_at}</p>
   </div>

  )

}