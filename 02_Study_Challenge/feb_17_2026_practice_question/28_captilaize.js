let str="hi hello";

function capitalize(str)
{
  return str.split(' ').map(w=>w[0].toUpperCase()+w.slice(1)).join(' ');
}

console.log(capitalize(str))