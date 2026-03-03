// ===============================
// MOST COMMON SELECTORS
// ===============================

// By ID
let el1 = document.getElementById("title");

// By class (HTMLCollection)
let el2 = document.getElementsByClassName("box");

// By tag
let el3 = document.getElementsByTagName("p");

// querySelector (first match)
let el4 = document.querySelector(".box");

// querySelectorAll (NodeList)
let el5 = document.querySelectorAll(".box");

// Loop through NodeList
el5.forEach(element => console.log(element));

// Parent / child navigation
let parent = el4.parentElement;
let children = el4.children;
let first = el4.firstElementChild;
let last = el4.lastElementChild;
let next = el4.nextElementSibling;
let prev = el4.previousElementSibling;