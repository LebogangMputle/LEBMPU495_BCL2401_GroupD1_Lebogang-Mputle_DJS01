/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const vel = 10000; // velocity (km/h)
const acc = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const d = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fbr = 0.5; // fuel burn rate (kg/s)

// Check if the units of the given parameters are consistent
const isNumber = (variable) => Object.prototype.toString.call(variable) === '[object Number]';

const checkParameters = () => [vel, acc, time, d, fuel, fbr].every(isNumber);

const checkFunction = (func, numArgs) => typeof func === 'function' && func.length === numArgs;

if (checkParameters()) {
  // Check if the time is not less than zero
  if (time < 0) {
    throw new Error('The time cannot be less than zero');
  }
}


const d2 = d + (vel*time) //calcultes new distance
const rf = fuel - (fbr*time) //calculates remaining fuel
const vel2 = calcNewVel(acc, vel, time) //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
const calcNewVel = (vel, acc, time) => { 
  return vel + (acc*time)
};

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);






