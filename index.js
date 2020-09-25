// const request = require('request');
// const { fetchMyIP } = require('./iss');
// // const URL = '107.179.170.10';

const { nextISSTimesForMyLocation } = require('./iss');
const fetchMyIP = ((error, ip) => { 
  request(URL, (error, response, body) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
    console.log('It worked! Returned IP:' , ip);
  })
});

// The code below is temporary and can be commented out.

// const { fetchCoordsByIP } = require('./iss');
const fetchCoordsByIP = ('107.179.170.10', (error, coords) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned Coords:' , coords);
});
// const { fetchISSFlyOverTimes } = require('./iss');

const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };

const fetchISSFlyOverTimes = (exampleCoords, (error, passTimes) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned flyover times:' , passTimes);
});


/** 
 * Input: 
 *   Array of data objects defining the next fly-overs of the ISS.
 *   [ { risetime: <number>, duration: <number> }, ... ]
 * Returns: 
 *   undefined
 * Sideffect: 
 *   Console log messages to make that data more human readable.
 *   Example output:
 *   Next pass at Mon Jun 10 2019 20:11:44 GMT-0700 (Pacific Daylight Time) for 468 seconds!
 */
const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});
