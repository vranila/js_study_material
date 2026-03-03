let students = [
    { name: "Jarun", marks: 80 },
    { name: "Anila", marks: 95 },
    { name: "Rahul", marks: 70 }
];

students.sort(function(a, b) {
    return a.marks - b.marks;   
});

console.log(students);
