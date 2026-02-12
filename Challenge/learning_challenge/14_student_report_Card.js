/* 
-------------------------------------------------------------
REAL-WORLD PRACTICE — STUDENT REPORT CARD 🧮

Goal:
Create a report card system that:
- Stores student info and marks.
- Calculates total and average marks.
- Decides grade based on average.

Concepts covered:
✅ Objects & Arrays
✅ Loops
✅ Functions & Return Values
✅ Conditionals
-------------------------------------------------------------
*/

let student={
    name:"Anila",
    class:10,
    marks:{
        "Maths":100,
        "English":80,
        "Science":80,
        "Social":80
    }
}

console.log("Total and average marks");
function Calculate(marks)
{
    let total =0 ,count=0;
    for (let stu in marks)
    {
      total=total+marks[stu];
      count ++;
    }
    let average = total / count;
    return {total,count,average};
}

let result = Calculate(student.marks);

console.log("Total:", result.total);
console.log("Average:", result.average);
console.log("Count:", result.count);



function score(average)
{
    if (average >= 90) 
        return "A+";
    else if (average >= 80) 
        return "A";
    else if (average >= 70) 
        return "B";
    else if (average >= 60) 
        return "C";
    else 
        return "F";
}

let grade=score(result.average);


console.log(" STUDENT REPORT CARD");
console.log("---------------------------");
console.log("Name:", student.name);
console.log("Class:", student.class);
console.log("Total Marks:", result.total);
console.log("Average:", result.average.toFixed(2));
console.log("Grade:", grade);
