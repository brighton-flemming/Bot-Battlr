import React from "react";

const RobotArmy = ({ armyBots, onRelease }) => {
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui grid">
        <div>
          <h2> Your Robot Army</h2>
          <ul>
            {armyBots.map((robot) => (
              <li key={robot.id}>
                <img
                  src={robot.avatar_url}
                  alt={robot.name}
                  style={{ width: "200px", height: "200px" }}
                />
                <p>Name:{robot.name} </p>
                <p>Bot Class:{robot.bot_class}</p>
                <button onClick={() => onRelease(robot)}>Release</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RobotArmy;
