/**
 * object: write a function to give me the sum of all numbers in an array
 * step-1: declare a function
 * step-2: call check whether the function is called properly
 * step-3: set a parameters(5)
 * step-4: pass the parameter(5). check whether parameter is padded in a proper format
 * step-5: do the function tasks(step by step)
 */

function sumOfNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        sum = sum + number;
        console.log(number);
        

    }
    return sum;
    

}
const numbers = [4, 6, 1, 6];
// console.log(numbers);
const sum = sumOfNumbers(numbers);
console.log('sum of numbers is', sum);
