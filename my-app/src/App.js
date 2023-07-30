import React, { useState } from "react";
import RobotDetails from "./components/RobotDetails";
import RobotArmy from "./components/RobotArmy";
import RobotList from "./components/RobotList";
import "./App.css";
import { robots } from "../db.json";
import { json } from "stream/consumers";

const App = () => {
  const [selectedRobot, setSelectedRobot] = useState(null);
  const [enlistedRobots, setEnlistedRobots] = useState([]);
  const [bots, setBots] = useState(robots);
  const [armyBots, setArmyBots] = useState([]);

  const handleSelectRobot = (robot) => {
    setSelectedRobot(robot);
  };

  const handleEnlist = (bot) => {
    if (!armyBots.some((armyBot) => armyBot.id === bot.id)) {
      setArmyBots([...armyBots, bot]);
    }
  };

  const handleRelease = (bot) => {
    setArmyBots(armyBots.filter((armyBot) => armyBot.id !== bot.id));
  };

  const handleDischarge = (bot) => {
    fetch("http://localhost:3000/robots");
    method: "DELETE"
      .then((response) => response.json())
      .then(() => {
        setArmyBots(armyBots.filter((armyBot) => armyBot.id !== bot.id));
      })
      .catch((error) => console.log(error));
  };

  const handleEnlistRobot = () => {
    if (selectedRobot && !enlistedRobots.includes(selectedRobot)) {
      setEnlistedRobots([...enlistedRobots, selectedRobot]);
    }
  };

  return (
    <div>
      <h1>Bot Battlr</h1>
      <RobotList
        robots={robots}
        onEnlist={handleEnlist}
        onSelectRobot={handleSelectRobot}
      />
      <RobotDetails
        robot={selectedRobot}
        robots={robots}
        onEnlistRobot={handleEnlistRobot}
      />
      <RobotArmy
        armyBots={armyBots}
        onDischarge={handleDischarge}
        onRelease={handleRelease}
        robots={robots}
        enlistedRobots={enlistedRobots}
      />
    </div>
  );
};

export default App;
