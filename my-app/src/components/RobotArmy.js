import React from "react";

const RobotArmy = ({ enlistedRobots }) => {
  return (
    <div>
      <h2> Your Robot Army</h2>
      <ul>
        {enlistedRobots.map((robot) => (
          <li key={robot.id}>
            {robot.name} ~ {robot.bot_class}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RobotArmy;
