import React from "react";
import RobotCard from "./RobotCard";

const RobotList = ({ robots, onEnlist, onSelectRobot, onDischarge }) => {
  if (!robots) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <div >
        <div>
          <h2> Robots Available </h2>
          <div className="ui cards">
            {robots.map((robot) => (
              <RobotCard
                key={robot.id}
                robot={robot}
                onClick={() => onSelectRobot(robot)}
                onEnlist={() => onEnlist(robot)}
                onDischarge={() => onDischarge(robot)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RobotList;
