/* 
-------------------------------------------------------------
CHALLENGE 3 — NESTED OBJECT
Create an object `library` with:
  - name (string)
  - books (array of objects), where each book has title and author.

1️⃣ Print the name of the library.
2️⃣ Loop through the books and print their details.
-------------------------------------------------------------
*/

let library ={
name:"Read Library",
books: [
    { title: "The Alchemist", author: "Paulo Coelho" },
    { title: "Ikigai", author: " Francesc Miralles and Hector Garcia" },
    { title: "1984", author: "George Orwell" }        
]
};

console.log("Name of the library : ",library.name);

for (let bk of library.books)
{
   console.log("Book Title : " + bk.title + "   Author Name : " + bk.author);
}