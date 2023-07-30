import React from "react";

const RobotArmy = ({ armyBots, onRelease, onDischarge, enlistedRobots }) => {
  return (
    <div>
      <h2> Your Robot Army</h2>
      <ul>
        {armyBots.map((robot) => (
          <li key={robot.id}>
            {robot.name} ~ {robot.bot_class}
            {!enlistedRobots.includes(robot) ? (
            <button onClick={() => onRelease(robot)}>Release</button>
            ) : (
            <button onClick={() => onDischarge(robot)}>X</button>
        )}
            </li>
        ))}
      </ul>
    </div>
  )
}

export default RobotArmy;
