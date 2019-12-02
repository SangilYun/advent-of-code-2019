import * as fs from 'fs';

const file = fs.readFile('./input.txt', (err, data) => {
    if (err) console.log('err reading file', err);
    let inputs = data.toString().split('\n');
    //part 1
    let part1 = inputs.reduce((acc, each) => acc + getFuelRequirement(Number(each)), 0);
    console.log('part1', part1);

    //part 2
    let part2 = inputs.reduce((acc, each) => acc + recursiveFuelRequirement(each), 0);
    console.log('part2', part2);
});

//part 1
const getFuelRequirement = (input) => {
    if (typeof input !== 'number') return 0;
    let fuel = Math.floor(input / 3) - 2;
    return fuel;
}

//part 2
const recursiveFuelRequirement = input => {
    let fuel = Math.floor(input / 3) - 2;
    if (fuel <= 0) return 0;
    return fuel + recursiveFuelRequirement(fuel);
}

console.log('mass 12, expect 2', getFuelRequirement(12));
console.log('mass 14, expect 2', getFuelRequirement(14));
console.log('mass 1969, expect 654', getFuelRequirement(1969));
console.log('mass 100756, expect 33583', getFuelRequirement(100756));
console.log('mass 14, expect 2', recursiveFuelRequirement(14));
console.log('mass 1969, expect 966', recursiveFuelRequirement(1969));
console.log('mass 100756, expect 50346', recursiveFuelRequirement(100756));