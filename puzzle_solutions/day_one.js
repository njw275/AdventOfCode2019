/*

Day One Part One :: 


Fuel required to launch a given module is based on its mass. 
Specifically, to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.

For example:

    For a mass of 12:
        divide by 3 and round down to get 4, then subtract 2 to get 2.
    For a mass of 14:
        dividing by 3 and rounding down still yields 4, so the fuel required is also 2.
    For a mass of 1969:
        the fuel required is 654.
    For a mass of 100756:
        the fuel required is 33583.

    The Fuel Counter-Upper needs to know the total fuel requirement. 
    To find it, individually calculate the fuel needed for the mass of each module (your puzzle input), 
    then add together all the fuel values.

What is the sum of the fuel requirements for all of the modules on your spacecraft?


Input :: 

../puzzle_inputs/day_one_data.js

*/


const data = require('../puzzle_inputs/day_one_data');
let sumFuel = 0;

data.forEach((mass, i) => {
    sumFuel += Math.floor(mass / 3) - 2;
});

console.log(`part one sum fuel :: ${sumFuel}`)

/*

Day One Part Two :: 

Fuel itself requires fuel just like a module 
    - take its mass, divide by three, round down, and subtract 2. 
    However, that fuel also requires fuel, and that fuel requires fuel, and so on. 
    Any mass that would require negative fuel should instead be treated as if it requires zero fuel;
     the remaining mass, if any, is instead handled by wishing really hard, 
     which has no mass and is outside the scope of this calculation.

So, for each module mass, 
calculate its fuel and add it to the total. 
Then, treat the fuel amount you just calculated as the input mass and repeat the process, 
continuing until a fuel requirement is zero or negative. For example:

A module of mass 14 requires 2 fuel. 
This fuel requires no further fuel (2 divided by 3 and rounded down is 0)
so the total fuel required is still just 2.

At first, a module of mass 1969 requires 654 fuel. 
Then, this fuel requires 216 more fuel (654 / 3 - 2). 
216 then requires 70 more fuel, which requires 21 fuel, which requires 5 fuel, 
which requires no further fuel. 
So, the total fuel required for a module of mass 1969 is 654 + 216 + 70 + 21 + 5 = 966.


The fuel required by a module of mass 100756: 
33583 + 11192 + 3728 + 1240 + 411 + 135 + 43 + 12 + 2 = 50346.


What is the sum of the fuel requirements for all of the modules on your spacecraft 
when also taking into account the mass of the added fuel? 
(Calculate the fuel requirements for each module separately, then add them all up at the end.)
*/

let runningFuel = 0;
let sumFuelPartTwo = 0;

function calculateNewFuel(mass) {
    let newFuel = 0;
    if(Math.floor(mass / 3) <= 0 || (Math.floor(mass / 3) -2) <= 0) {
        return 0;
    }
    else {
        newFuel = Math.floor(mass / 3) - 2;
        return runningFuel += (newFuel + calculateNewFuel(newFuel));
    }
}

data.forEach(mass => {
    runningFuel = 0;
    sumFuelPartTwo += calculateNewFuel(mass); 
});

console.log(`part two sum fuel :: ${sumFuelPartTwo}`)