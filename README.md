# Table Soccer Connected

As Angers' University students, we were in charge of designing an app that detects automatically goals on a table soccer. We've also designed a Ionic App running a Node.JS backend API and a MongoDB database.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

You need first to install NodeJS (See the link bellow). Then install MongoDB (https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/). Make sure you have to install Ionic and all its modules running the command : npm install -g ionic --save. Npm is given with NodeJS isntallation. 

### Installing

A step by step series of examples that tell you have to get a development env running
Say what the step will be

Run First the Database : 
"C:\Program Files\MongoDB\Server\3.6\bin\mongod.exe" --dbpath "..\projetbabyfoot\MongoDB\data"

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Deployment

Hardware architecture was made of an Arduino Uno and Raspeberry Pi 3 with official screen. 

## Built With

* [Ionic Framework](https://ionicframework.com/) - The web framework used
* [MongoDB](https://www.mongodb.com/en) - Database management and storage
* [NodeJS](https://nodejs.org/en/) - Used to implement the API Backend
* [ExpressJS](http://expressjs.com/fr/) - Used to make the Server
* [AngularJS](https://angular.io/) - Used in Ionic, particularly in Typescript code
* [Typescript](https://www.typescriptlang.org/) - Used in Ionic to make algorithm and database communication
* [Arduino](https://www.arduino.cc/) - Used with captors to detect goals
* [socket.io](https://socket.io/) - Use to have real-time communication between app and server

## Contributing

Feel free to contribute and add your experience to this project. 

## Authors

* **Steve DESPRES** - [GitHub](https://github.com/steeffs)
* **Ahmed Youssouf ZIYYAT** - [GitHub](https://github.com/Zyoussef)
* **Florent YVON** - [GitHub](https://github.com/florentyvon)
