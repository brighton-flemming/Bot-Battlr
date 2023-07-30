import React from "react";

const RobotArmy = ({ armyBots, onRelease, onDischarge, enlistedRobots }) => {
  return (
    <div className="ui segment inverted olive bot-army">
    <div className="ui five column grid">
      <div className="row bot-army-row">
      <h2> Your Robot Army</h2>
      <ul>
        {armyBots.map((robot) => (
          <ul key={robot.id}>
             <img
                  src={robot.avatar_url}
                  alt={robot.name}
                  style={{ width: "200px", height: "200px" }} 
                />
            {robot.name} ~ {robot.bot_class}
            {!enlistedRobots.includes(robot) ? (
            <button onClick={() => onRelease(robot)}>Release</button>
            ) : (
            <button onClick={() => onDischarge(robot)}>Discharge</button>
        )}
            </ul>
        ))}
      </ul>
    </div>
    </div>
    </div>
  )
}

export default RobotArmy;
