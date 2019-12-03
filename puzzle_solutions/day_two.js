const data = require('../puzzle_inputs/day_two_data');
const originalData = [...data];
// console.log(data);

// position 0 -> 1 add 2 multiply 99 terminate 
// position 1 and 2 -> what number to use 
// position 4 -> where to store the value 

let numOne = 0;
let numTwo = 0;

//using if, else if, else if, else so i can break on 99 (cant use break in switch to break out of for loop)
for(let i = 0; i < data.length; i += 4) {
    if(data[i] === 1){
        numOne = data[data[i+1]];
        numTwo = data[data[i+2]];
        data[data[i+3]] = numOne + numTwo;
    }else if(data[i] === 2) {
        numOne = data[data[i+1]];
        numTwo = data[data[i+2]];
        data[data[i+3]] = numOne * numTwo;
    }
    else if(data[i] === 99){
        console.log(data[0]);
        break;
    }
    else {
        throw new Error(`Position ${i} didnt hold a correct operand value`);
    }
}

//set first input correctly
console.log(`-- Part Two --`);
cycleData = [...originalData];

for(let noun=0;noun<100;noun++) {
    for(let verb=0;verb<100;verb++) {
        cycleData = [...originalData];
        cycleData[1] = noun;
        cycleData[2] = verb;
        for(let i = 0; i < cycleData.length; i += 4) {
            if(cycleData[i] === 1){
                numOne = cycleData[cycleData[i+1]];
                numTwo = cycleData[cycleData[i+2]];
                cycleData[cycleData[i+3]] = numOne + numTwo;
            }else if(cycleData[i] === 2) {
                numOne = cycleData[cycleData[i+1]];
                numTwo = cycleData[cycleData[i+2]];
                cycleData[cycleData[i+3]] = numOne * numTwo;
            }
            else if(cycleData[i] === 99){
                i = cycleData.length;
                if(cycleData[0] === 19690720) {
                    console.log(`COLLECTED!`)
                    console.log(`noun is ${noun} and verb is ${verb}`)
                }
            }
            else {
                throw new Error(`Position ${i} didnt hold a correct operand value the value is ${data[i]}`);
            }
        }
    }
}

