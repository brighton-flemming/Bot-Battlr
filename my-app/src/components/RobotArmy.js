import React from "react";

const RobotArmy = ({ enlistedRobots, onRelease, onDischarge }) => {
  return (
    <div>
      <h2> Your Robot Army</h2>
      <ul>
        {enlistedRobots.map((robot) => (
          <li key={robot.id}>
            {robot.name} ~ {robot.bot_class}
            <button onClick={() => onRelease(robot)}>Release</button>
            <button onClick={() => onDischarge(robot)}>Discharge</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RobotArmy;
