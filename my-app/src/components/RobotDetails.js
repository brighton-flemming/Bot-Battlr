import React from "react";
import RobotCard from "./RobotCard";

const RobotDetails = ({ robot }) => {
  if (!robot) {
    return <div>No Robots Selected</div>;
  }

  return (
    <div>
      <h2>{robot.name}</h2>
      <RobotCard bot={robot} />
  
    </div>
  );
};

export default RobotDetails;
