function getTotal(numbers) {
    // Declaration of function and stating of the parameter
    let sum = 0;
    for( let i = 0; i < numbers.length; i++){
        sum += numbers[i];
        // Looping through the array for every item adding it to the sum and update the value of the sum
    }
return sum 
// Return the total sum of the loop
}
let practice = getTotal ([10, 20, 30]); 
console.log (practice);
// Output value 60
let practice1 = getTotal([21, 24, 45, 16, 8])
console.log (practice1);
// Output value 114
// Output and print the function Value