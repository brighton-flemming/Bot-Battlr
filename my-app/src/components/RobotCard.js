import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function RobotCard({ robot, onEnlist, onDischarge }) {

    const handleDischarge = (event) => {
        event.preventDefault();
        onDischarge(robot);
      };
   
  return (
    <div className="ui column">
      <div
        className="ui card"
        key={robot.id}

      >
        <div className="image">
          <img alt="oh no!" src={robot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {robot.name}
            <i className={botTypeClasses[robot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{robot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <p>
            <i className="icon heartbeat" />
          {robot.health}
          </p>

          <p>
            <i className="icon lightning" />
            {robot.damage}
          </p>
          <p>
            <i className="icon shield" />
            {robot.armor}
          </p>
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                onClick={handleDischarge
                }
              >
                DISCHARGE
              </button>
              <button onClick={() => onEnlist(robot)}>Enlist</button> 
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default RobotCard;
