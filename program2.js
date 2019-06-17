// Write a program that accepts one or more numbers as command-line
//arguments and prints the sum of those numbers to the console
//(stdout).  

const input = process.argv.slice(2, process.argv.length);

const numbers = input.map(Number);

let total = 0;
for (i = 0; i < numbers.length; i++) {
  total += numbers[i];
}

console.log(total);



// ----OFFICIAL SOLUTION---- //

// var result = 0
//
//     for (var i = 2; i < process.argv.length; i++) {
//       result += Number(process.argv[i])
//     }
//
//     console.log(result)
