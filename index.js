/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Define the calcNewVel function with error handling and unit conversion
const calcNewVel = (velKmH, accMs2, timeSec) => {
  if (velKmH < 0) {
    throw new Error('Velocity cannot be negative');
  }
  if (accMs2 < 0) {
    throw new Error('Acceleration cannot be negative');
  }
  if (timeSec < 0) {
    throw new Error('Time cannot be negative');
  }

  // Convert acceleration time product to km/h
  const velIncrementKmH = (accMs2 * timeSec * 3.6);
  return velKmH + velIncrementKmH;
}

// Given Parameters
const initialVelKmH = 10000; // velocity (km/h)
const accelerationMs2 = 3; // acceleration (m/s^2)
const timeSec = 3600; // time (seconds)
const initialDistanceKm = 0; // distance (km)
const initialFuelKg = 5000; // remaining fuel (kg)
const fuelBurnRateKgS = 0.5; // fuel burn rate (kg/s)

// Calculate new distance based on velocity (km)
const newDistanceKm = initialDistanceKm + ((initialVelKmH * timeSec) / 3600);

// Calculate remaining fuel
const remainingFuelKg = initialFuelKg - (fuelBurnRateKgS * timeSec);

// Calculate new velocity based on acceleration
const newVelKmH = calcNewVel(initialVelKmH, accelerationMs2, timeSec);

console.log(`Corrected New Velocity: ${newVelKmH} km/h`);
console.log(`Corrected New Distance: ${newDistanceKm} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuelKg} kg`);
