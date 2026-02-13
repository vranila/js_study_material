/* 
=============================================================
CHALLENGE 5 — INVENTORY STOCK UPDATE
Maintain a simple inventory object. Given a list of operations,
apply them and print the final inventory.

Rules:
  - "add" increases stock
  - "sell" decreases stock (but not below 0)
  - If product not present, add it on "add"

Data:
  let inventory = { apple: 10, banana: 5 };
  let ops = [
    { type: "add",  item: "apple",  qty: 5 },
    { type: "sell", item: "banana", qty: 2 },
    { type: "sell", item: "banana", qty: 10 },
    { type: "add",  item: "orange", qty: 7 }
  ];

Print:
  - Final inventory object
=============================================================
*/


  let inventory = { apple: 10, banana: 5 };
  let ops = [
    { type: "add",  item: "apple",  qty: 5 },
    { type: "sell", item: "banana", qty: 2 },
    { type: "sell", item: "banana", qty: 10 },
    { type: "add",  item: "orange", qty: 7 }
  ];

  for (let i =0 ; i< ops.length ; i++)
  {
    let operations=ops[i];
    if(operations.type === "add")
    {
        if(inventory[operations.item])
        {
            inventory[operations.item]=inventory[operations.item] + operations.qty;
        }
        else{
            inventory[operations.item] = operations.qty;
        }
    }

    
    if(operations.type === "sell")
    {
        if(inventory[operations.item])
        {
            inventory[operations.item]=inventory[operations.item] - operations.qty;
      
            if(inventory[operations.item] < 0)
            {
                inventory[operations.item] = 0;
            }
        }

    }
  }

 console.log(inventory);