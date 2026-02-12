/* 
-------------------------------------------------------------
CHALLENGE: UNDERSTAND for...in VS for...of
1️⃣ Create an array of 3 colors.
2️⃣ Loop using for...in → print "Index X has color Y"
3️⃣ Loop using for...of → print "Color: Y"
4️⃣ Create an object person with name, age.
5️⃣ Loop using for...in → print key and value.
-------------------------------------------------------------
*/

let color=["red","blue","black"];
for(let index in color)
{
    console.log("At index " + index + " -> "+ color[index]);
}

for(let index of color)
{
    console.log("Color : " + index);
}


let person={ name : "Anila ", age:28};
for (let index in person)
{
    console.log("Key : " + index + "  Values : " + person[index]);
}

// Note: for...of does NOT work directly on objects
// (objects are not iterable like arrays)