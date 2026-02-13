/* 
-------------------------------------------------------------
REAL-WORLD PRACTICE — STUDENT REPORT SYSTEM 🏫

Goal:
Work with multiple student records.
For each student:
  - Calculate total and average.
  - Assign a grade.
  - Identify the top scorer.

Concepts used:
✅ Arrays of Objects
✅ Nested Objects
✅ Loops
✅ Functions with return values
✅ Conditional Logic
-------------------------------------------------------------
*/

let student_details=
[
    {
    name: "Arun",
    class: "10A",
    marks: { math: 48, science: 35, english: 60, history: 72, computer: 95 }
  },
  {
    name: "Akhil",
    class: "10A",
    marks: { math: 88, science: 92, english: 81, history: 89, computer: 86 }
  },
  {
    name: "Anila",
    class: "10A",
    marks: { math: 95, science: 97, english: 94, history: 91, computer: 99 }
  },
  {
    name: "Vishnu",
    class: "10A",
    marks: { math: 65, science: 70, english: 68, history: 72, computer: 75 }
  },
  {
    name: "Gayathri",
    class: "10A",
    marks: { math: 80, science: 84, english: 88, history: 76, computer: 90 }
  }
];



function total_average(marks)
{
  let total_marks=0,count=0,average=0;
  for (let n in marks)
  {
    total_marks=total_marks+marks[n];
    count ++;
  }
 average=total_marks/count;
 return {total_marks,average};

}


function grade_student(average){
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


let topper = null;
let highestAverage = 0;

for (let stu  of student_details)
{
    let result= total_average(stu.marks);
    //console.log(result);
    let grade = grade_student(result.average);  
    console.log("-------------------------------------------------------------------------------------");
    console.log("                               STUDENT REPORT CARD                                    ");
    console.log("-------------------------------------------------------------------------------------");
    console.log("Name : ",stu.name);
    console.log("Class : ",stu.class);
    console.log(`Total Mark is : ${result.total_marks}`);
    console.log(`Average Mark is : ${result.average}`);
    console.log("Grade : ",grade);
      console.log("--------------------------------------------------");

 
  if (result.average > highestAverage) {
    highestAverage = result.average;
    topper = stu.name;
  }
}


console.log(`Topper of the class: ${topper} (${highestAverage.toFixed(2)}%)`);

