import {fileToArrayOfString} from '../utility.js';

let inputs = fileToArrayOfString(process.cwd()+'/input.txt', ',');
inputs = inputs.map(input =>Number(input))
inputs[1] = 12;
inputs[2] = 2;


function intCodeProgram(arr){
    for(let i=0; i<arr.length; i+=4){
        //1 -> add
        let opcode = arr[i];
        let [a_pos, b_pos] = [arr[i+1], arr[i+2]];
        let [a, b] = [arr[a_pos], arr[b_pos]];
        let pos = arr[i+3];
        if(opcode ===1){
            arr[pos] = a+b;
        }
        //2 ->multiply
        else if(opcode===2){
            arr[pos] = a*b;
        }
        //99 -> halt
        else if(opcode===99){
            break ;
        }
    }
    return arr;
}
console.log('1,0,0,0,99 becomes 2,0,0,0,99',intCodeProgram([1,0,0,0,99]))
console.log('2,3,0,3,99 becomes 2,3,0,6,99',intCodeProgram([2,3,0,3,99]))
console.log('2,4,4,5,99,0 becomes 2,4,4,5,99,9801',intCodeProgram([2,4,4,5,99,0]))
console.log('1,1,1,4,99,5,6,0,99 becomes 30,1,1,4,2,5,6,0,99',intCodeProgram([1,1,1,4,99,5,6,0,99]))
console.log('day2 part1',intCodeProgram(inputs));