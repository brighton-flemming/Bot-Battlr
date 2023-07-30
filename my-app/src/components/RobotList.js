import React from "react";

const RobotList = ({ robots, onEnlist, onSelectRobot }) => {
  if(!robots) {
    return<div>No data available</div>;
  }

  return (
    <div className="ui four column grid">
    <div className="row">
      <h2> Robots Available </h2>
      <ul>
        {robots.map((robot) => (
          <li key={robot.id} onClick={() => onSelectRobot(robot)}>
            <span>{robot.name} ~ {robot.bot_class}</span>
            <button onClick={() => onEnlist(robot)}>Enlist</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default RobotList;
