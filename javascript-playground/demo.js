// An array is a special variable, which can hold more than one value at a time.
// Understanding the difference between let & var: It can be said that a variable declared with var is defined throughout the program (function scoped) as compared to let (which is block scoped). A function can contain many blocks.
// watch later: https://www.youtube.com/watch?v=XgSjoHgy3Rk

let namesArray = ['Kevin','McCoy','Emily','Frederic','Alisha','Ashli','Simon','Ty','Fiona','Prismo','Sammy','Caroline','Francesca','Karl','Esther','Irene','Martin','Yanxin','Katrina','Kiana'];

function getRandom(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// console.log(getRandom(3));
// console.log(getRandom(1));
// console.log(namesArray[0]);

let n = getRandom(namesArray.length);
console.log(n);

let randomName = namesArray[n];
console.log(namesArray);


let arrayAsString = namesArray.join(', ');
console.log(arrayAsString);
$('#name').html(randomName);
$('#names').html(arrayAsString);
let sortedNames = namesArray.sort();
console.log(sortedNames);

let text = "";
// text += namesArray[0] + "<br>";
for (i=0; i < namesArray.length; i++) {
  text += namesArray[i] + " " + i + "<br>";
}

$("#listNames").html(text);
