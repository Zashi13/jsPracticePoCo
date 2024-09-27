let fuelLevel;
let astronauts;
let altitude = 0;


do {
  fuelLevel = prompt("Enter the starting fuel level (must be between 5000 and 30000):");
} while (fuelLevel <= 5000 || fuelLevel >= 30000);


do {
  astronauts = prompt("Enter the number of astronauts (1 to 7):");
} while (astronauts < 1 || astronauts > 7);


while (fuelLevel >= astronauts * 100) {
  fuelLevel -= astronauts * 100;
  altitude += 50;
}

console.log(`Shuttle reached an altitude of ${altitude} km with ${fuelLevel} fuel remaining.`);