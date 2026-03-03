function longestWord(str){
  return str.split(' ').sort((a,b)=>b.length-a.length)[0];
}

let str="hi hello";
console.log(longestWord(str));