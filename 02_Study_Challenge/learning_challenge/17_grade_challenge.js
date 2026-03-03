/* 
-------------------------------------------------------------
CHALLENGE 1 — STUDENT GRADE ANALYZER 🎓
Goal:
Given a student's marks in multiple subjects,
calculate total, average, and grade.

Subjects: Math, Science, English, History, Computer
Rules for grade:
A+ → 90 and above
A  → 80–89
B  → 70–79
C  → 60–69
F  → below 60
-------------------------------------------------------------
*/

// 👉 Write your code here 👇


/*
-------------------------------------------------------------
📘 SAMPLE OUTPUT (Expected)
Student: Rahul
Marks: { math: 95, science: 90, english: 85, history: 88, computer: 92 }
Total: 450
Average: 90.0
Grade: A+
-------------------------------------------------------------
*/


let student_details=
    {
    name: "Rahul",
    class: "10A",
    marks: { math: 95, science: 90, english: 85, history: 88, computer: 92 }
  };




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



let result= total_average(student_details.marks);
let grade = grade_student(result.average);  
console.log("-------------------------------------------------------------------------------------");
console.log("                               STUDENT REPORT CARD                                    ");
console.log("-------------------------------------------------------------------------------------");
console.log("Name : ",student_details.name);
console.log("Marks : ",student_details.marks);
console.log(`Total Mark is : ${result.total_marks}`);
console.log(`Average Mark is : ${result.average.toFixed(1)}`);
console.log("Grade : ",grade);
console.log("--------------------------------------------------");


