import React, { useState} from 'react';
import RobotDetails from './components/RobotDetails';
import RobotArmy from './components/RobotArmy';
import RobotList from './components/RobotList';
import './App.css';

const App = () => {
    const [selectedRobot, setSelectedRobot] = useState(null)
    const [enlistedRobots, setEnlistedRobots] = useState([]);

    const handleSelectRobot = (robot) => {
        setSelectedRobot(robot)
    }

    const handleEnlistRobot = (robot) => {
        if(selectedRobot && !enlistedRobots.includes(selectedRobot)) {
            setEnlistedRobots([...enlistedRobots, selectedRobot])
        }
    }

   return(
   <div>
     <h1>Bot Battlr</h1>
     <RobotList robots={robots} onSelectRobot={handleSelectRobot} />
     <RobotDetails robot={selectedRobot} onEnlistRobot={handleEnlistRobot} />
    <RobotArmy enlistedRobots={enlistedRobots} />

   </div>

   )

}

export default App;
