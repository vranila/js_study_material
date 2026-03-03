/* 
=============================================================
CHALLENGE 4 — STUDENT SUBJECT TOPPER
Given an array of students (each with marks object), print the
topper for EACH SUBJECT (math, science, english).

Data:
  let students = [
    { name: "Arun",    marks: { math: 78, science: 85, english: 90 } },
    { name: "Divya",   marks: { math: 88, science: 92, english: 81 } },
    { name: "Rahul",   marks: { math: 95, science: 91, english: 94 } },
    { name: "Sneha",   marks: { math: 65, science: 70, english: 68 } }
  ];

Print:
  Math Topper: <name> (<score>)
  Science Topper: <name> (<score>)
  English Topper: <name> (<score>)
=============================================================
*/


 let students = [
    { name: "Arun",    marks: { math: 78, science: 85, english: 90 } },
    { name: "Divya",   marks: { math: 88, science: 92, english: 81 } },
    { name: "Rahul",   marks: { math: 95, science: 91, english: 94 } },
    { name: "Sneha",   marks: { math: 65, science: 70, english: 68 } }
  ];

let science_topper=students[0];
let maths_topper=students[0];
let english_topper=students[0];

for(let i=1 ;i< students.length ; i++)
    {
    if(science_topper.marks.science < students[i].marks.science)
    {
        science_topper = students[i];
    }

    if(maths_topper.marks.math < students[i].marks.math)
    {
        maths_topper = students[i];
    }


    if(english_topper.marks.english < students[i].marks.english)
    {
        english_topper = students[i];
    }
}

console.log("Math Topper: " + maths_topper.name + " (" + maths_topper.marks.math + ")");
console.log("Science Topper: " + science_topper.name + " (" + science_topper.marks.science + ")");
console.log("English Topper: " + english_topper.name + " (" + english_topper.marks.english + ")");
