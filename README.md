# Bot-Battlr

Bot Battlr is a web application that allows users to create and manage their own robot army. Users can enlist robots from a list of available robots and organize them in their army. They can also release enlisted robots from their army. The application provides a visually appealing alien-themed interface to give users an exciting experience.


# Installation
1. Clone the repository to your local machine:gitclone git@github.com:brighton-flemming/Bot-Battlr.git
2. Change into the project directory:
cd bot-battlr
3. Install the dependencies:
npm install
4. Start the JSON server:
json-server --watch db.json
5. Launch the application:
npm start
6. Open your web browser and visit the link displayed e.g  http://localhost:39963/ to view the application.
# Features
1. View Available Robots

~ Upon opening the application, you will see a landing page with the title "Bot Battlr" and a header "Robot List".
~ The list of available robots is displayed in a visually appealing layout with robot cards.
Each card contains an image of the robot, their name, catchphrase, and class.

2. Enlist Robots

~ To enlist a robot, click the "Enlist" button on the robot card.
~ The robot will be added to your army, and the "Enlist" button will change to a "DISCHARGE" button.
~ You can enlist multiple robots to build your robot army.

3. Release Robots

~ To release a robot from your army, click the "Release" button on the enlisted robot card.
~ The robot will be removed from your army, and the card will revert to the "Enlist" button.
View Robot Details

4. Discharge Robots

~ To discharge a robot from your army, click the "DISCHARGE" button on the enlisted robot card.
~ The robot will be removed  permanently from your army as well as the Robot List.

Clicking on a robot card (either enlisted or available) will display detailed information about the robot.
The robot's name, catchphrase, class, health, damage, and armor stats will be shown.
# Technologies Used
React: A JavaScript library for building user interfaces.
JavaScript: The primary programming language used.
HTML: Markup language for creating the web pages.
CSS: Stylesheet language for styling the web pages.
Semantic UI: CSS framework for a visually appealing design.
Fetch API: Used to perform HTTP requests to the backend server.
# Usage
# Landing Page

Upon opening the application, you will see a visually appealing landing page with the title "Bot Battlr" and a header "Robot List".
The robot list displays available robots in card format.
Enlisting Robots

To enlist a robot, click the "Enlist" button on the robot card.
The enlisted robot will be added to your army, and the button will change to a "DISCHARGE" button.
Enlist multiple robots to build your robot army.
Releasing Robots

To release a robot from your army, click the "DISCHARGE" button on the enlisted robot card.
The robot will be removed from your army, and the button will revert to "Enlist".
Viewing Robot Details

Clicking on a robot card (either enlisted or available) will display detailed information about the robot.
Information includes the robot's name, catchphrase, class, health, damage, and armor stats.
# Contributing
Contributions are welcome! If you find any issues or want to add new features, feel free to submit a pull request.

Fork the repository.
Create a new branch for your changes.
Make your changes and commit them.
Push the changes to your forked repository.
Submit a pull request.

