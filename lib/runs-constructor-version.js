'use strict';

const mcFaceRuns = {
  name: 'Person McFace',
  email: 'wdi@personmcface.com',
  runs: [
    {
      date: '2015-05-25 15:00',
      distance: 1200,
      timeTaken: 600,
    },
    {
      date: '2015-05-25 15:00',
      distance: 1400,
      timeTaken: 800,
    }
  ]
};

const Username = function (username, email, runRecord) {
  this.username = username;
  this.email = email;
  this.runRecord = runRecord;
};

const Runs = function (date, distance, timeTaken) {
  this.date = date;
  this.distance = distance;
  this.timeTaken = timeTaken;
};

let testRuns = new Runs('2015-05-25 15:00', 1400, 800);
let testRunTwo = new Runs('2015-05-25 22:00', 1000, 1800);

let blankArray = [];

blankArray.push(testRuns);
blankArray.push(testRunTwo);

let testUser = new Username('spw5235',
                           'spwisner@gmail.com', blankArray);

console.log(testUser);
