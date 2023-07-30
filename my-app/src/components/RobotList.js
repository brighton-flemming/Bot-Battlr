import React from "react";

const RobotList = ({ robots, onEnlist, onSelectRobot }) => {
  return (
    <div>
      <h2> Robots Available </h2>
      <ul>
        {robots.map((robot) => (
          <li key={robot.id} onClick={() => onSelectRobot(robot)}>
            {robot.name} ~ {robot.bot_class}
            <button onClick={() => onEnlist(robot)}>Enlist</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RobotList;
