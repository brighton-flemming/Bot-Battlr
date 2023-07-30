import React, { useEffect, useState } from "react";
import RobotDetails from "./components/RobotDetails";
import RobotArmy from "./components/RobotArmy";
import RobotList from "./components/RobotList";
import "./App.css";




const App = () => {
  const [selectedRobot, setSelectedRobot] = useState(null);
  const [enlistedRobots, setEnlistedRobots] = useState([]);
  const [armyBots, setArmyBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/robots")
    .then((response) => response,json())
    .then((data) => {
        setArmyBots(data)
    })
    .catch((error) => console.log(error))
  }, []);

  const handleSelectRobot = (robot) => {
    setSelectedRobot(robot);
  };

  const handleEnlist = (bot) => {
    if (!armyBots.some((armyBot) => armyBot.id === bot.id)) {
      setArmyBots([...armyBots, bot]);

      fetch(" http://localhost:3000/robots" , {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
        },
        body:JSON.stringify(bot),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log("Received data from the server:", data);
      })
    }
  };




  const handleRelease = (bot) => {
    fetch(`http://localhost:3000/robots/${bot.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        setArmyBots(armyBots.filter((armyBot) => armyBot.id !== bot.id));
      })
      .catch((error) => console.log(error));
  };
  

  const handleDischarge = (bot) => {
    fetch(`http://localhost:3000/robots/${bot.id}`, {
      method: "DELETE",
    })
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
        enlistedRobots={enlistedRobots}
      />
    </div>
  );
};

export default App;
