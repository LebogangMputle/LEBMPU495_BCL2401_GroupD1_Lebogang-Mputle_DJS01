/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Define the calcNewVel function with error handling and unit conversion
const calcNewVel = (vel, acc, time) => {
  // Check for negative values and print error messages.
  if (vel < 0) {
    throw new Error('Velocity cannot be negative');
  }
  if (acc < 0) {
    throw new Error('Acceleration cannot be negative');
  }
  if (time < 0) {
    throw new Error('Time cannot be negative');
  }

  // Convertion of velocity to m/s before calculation
  const velMs = vel * 1000 / 3600;
  return velMs + (acc * time);
}

// Given Parameters
const vel = 10000; // velocity (km/h)
const acc = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const d = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fbr = 0.5; // fuel burn rate (kg/s)


const d2 = d + ((vel * time) / 3600); // Calculate new distance based on velocity (km)
const rf = fuel - (fbr*time) //calculates remaining fuel
const vel2 = calcNewVel(vel, acc, time) //calculates new velocity based on acceleration

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);






