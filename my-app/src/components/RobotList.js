import React from "react";

const RobotList = ({ robots, onSelectRobot}) => {
  return (
    <div>
     <h2>Robot Available </h2>
     <ul>
      {robots.map((robot) => (
        <li key={robot.id} onClick={onSelectRobot}>
            {robot.name} ~ {robot.bot_class}
        </li>
      ))}
     </ul>

    </div>
  )

}