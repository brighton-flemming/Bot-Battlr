import React from "react";

const RobotArmy = ({enlistedRobots}) => {
    return(
<div>
      <h2> Your Robot Army</h2>
      <ul>
        {robots.map((enlistedRobots) => (
          <li key={enlistedRobots.id} >
            {enlistedRobots.name} ~ {enlistedRobots.bot_class}
          </li>
        ))}
      </ul>
    </div>
  );
};

    export default RobotArmy