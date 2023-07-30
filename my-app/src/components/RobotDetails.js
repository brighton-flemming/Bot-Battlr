import React from "react";
import RobotCard from "./RobotCard";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

const RobotDetails = ({ robot, onEnlistRobot }) => {
  if (!robot) {
    return <div>No Robots Selected</div>;
  }

  const handleEnlistRobot = () => {
    onEnlistRobot(robot);
  };

  return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column">
            <RobotCard robot={robot} />
          </div>
          <div className="four wide column">
            <h2>Name: {robot.name}</h2>
            <p>
              <strong>Catchphrase: </strong>
              {robot.catchphrase}
            </p>
            <strong>
              Class: {robot.bot_class}
              <i className={botTypeClasses[robot.bot_class]} />
            </strong>
            <br />
            <div className="ui segment">
              <div >
                <div >
                  <div className="column">
                    <i className="icon large circular red heartbeat" />
                    <strong>{robot.health}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular yellow lightning" />
                    <strong>{robot.damage}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular blue shield" />
                    <strong>{robot.armor}</strong>
                  </div>
                </div>
              </div>
            </div>

            <button
              className="ui button fluid"
              onClick={handleEnlistRobot}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RobotDetails;
