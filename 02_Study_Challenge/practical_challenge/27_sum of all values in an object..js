let obj = {
  math: 80,
  science: 75,
  english: 90
};
 
let sum = 0;
for (let key in obj) 
{
    sum += obj[key];
}
console.log (sum);
