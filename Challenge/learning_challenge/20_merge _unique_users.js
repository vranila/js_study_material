
/* 
=============================================================
CHALLENGE 3 — MERGE UNIQUE USERS BY EMAIL
You are given two arrays of user objects. Merge them into a new
array "uniqueUsers" such that:
  - Users are considered the same if email matches
  - Preserve the order: take from listA first, then add only
    non-duplicate users from listB

Data:
  let listA = [
    { name: "Arun", email: "arun@example.com" },
    { name: "Divya", email: "divya@example.com" }
  ];
  let listB = [
    { name: "Arun K", email: "arun@example.com" },
    { name: "Rahul", email: "rahul@example.com" }
  ];

Print:
  - The final uniqueUsers array
=============================================================
*/

 let listA = [
    { name: "Arun", email: "arun@example.com" },
    { name: "Divya", email: "divya@example.com" }
  ];
  let listB = [
    { name: "Arun K", email: "arun@example.com" },
    { name: "Rahul", email: "rahul@example.com" }
  ];

  let value=[];
 
  for (let userA of listA)
  {
   value.push(userA);
  }


  
  for (let userB of listB)
  {
     let found = false;
    for (let userA of value)
    {
      if(userA.email === userB.email)
      {
        found =true;
        break;
      }
    }

    
    if(!found)
    {
      value.push(userB);
    } 

  }

  
  console.log(value);