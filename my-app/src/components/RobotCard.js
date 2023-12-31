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
    <div>
      <div className="ui card" key={robot.id}>
        <div className="image">
          <img alt="oh no!" src={robot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            Name: {robot.name}
            <i className={botTypeClasses[robot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <p>
              Catchphrase: <small>{robot.catchphrase}</small>
            </p>
          </div>
        </div>
        <div className="extra content">
          <p>
            <i className="icon heartbeat" />
            Health: {robot.health}
          </p>

          <p>
            <i className="icon lightning" />
            Damage: {robot.damage}
          </p>
          <p>
            <i className="icon shield" />
            Armor: {robot.armor}
          </p>
          <p>
            <i className="date" />
            Created At: {robot.created_at}
          </p>
          <p>
            <i className="date" />
            Updated At: {robot.updated_at}
          </p>
          <span>
            <div className="ui center aligned segment basic">
             <p> <button
                className="ui mini red button"
                onClick={() => handleDischarge(robot)}
              >
                DISCHARGE
              </button></p>
              <p><button onClick={() => onEnlist(robot)}>Enlist</button></p>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default RobotCard;
