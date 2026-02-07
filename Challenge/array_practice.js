/* 
-------- PRACTICE CHALLENGE ----------
Make a file array_practice.js and try these:
Create an array of 5 city names.
Add a new city to the end and start.
Remove the first city.
Print the array length.

Use a for...of loop to print each city’s name in uppercase. 

*/

let city=["Mumbai","Kannur","Bangalore","Delhi","Pune"];
city.push("Kollam");

console.log(city);

city.unshift("Kozhikode");
console.log(city);


city.shift(city[0]);
console.log(city);


console.log("The length of the array is :" + city.length);

for (let key in city) 
{
    console.log("uppercase city name at "+ key + " : " + city[key].toUpperCase());
}