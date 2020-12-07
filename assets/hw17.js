// 1 task
let side = +prompt('Enter the side of the square (cm)');
let perimeter = 4 * side; 
alert(`perimeter of square = ${perimeter}`);
console.log(perimeter);

// 2 task
let length = +prompt('Enter the lenght of the edge of the cube (cm)');
let volumeCube = length*length*length;
let areaCube = length*length*6;
alert(`Cube volume = ${volumeCube}, its lateral surface area = ${areaCube}`);
console.log(areaCube);

// 3 task
let radius = +prompt('Enter the radius of thr circle (cm)');
let Circumference = 2 * Math.PI * 3;
let CircleArea = Math.round(Math.PI*radius*radius*100)/100;
alert(`Circumference = ${Circumference}, Area of a circle = ${CircleArea}`);
console.log(Circumference, CircleArea);

// 4 task
let volume = +prompt('Enter the volume of the substance');
let mass = +prompt('Enter the mass of the substance');
let density = mass/volume;
alert(`Density of matter = ${density}`);
console.log(density);

// 5 task
let population = +prompt('Enter the number of inhabitants in the state');
let area = +prompt('Enter the area of the territory');
let populationDensity = population/area;
alert(`Population density of the state = ${populationDensity}`);
console.log(populationDensity);

//6 task 
let leg1 = +prompt('Enter the value of the first leg');
let leg2 = +prompt('Enter the value of the second leg');
let Hypotenuse = leg1 ** 2 + leg2 ** 2;
alert(`Hypotenuse length = ${Hypotenuse}`);
console.log(Hypotenuse);

// 7 task
let a = +prompt('Enter the value а');
let y = (a ** 2 + 10)/Math.sqrt(a ** 2 + 1);
alert(`Value y = ${y}`);
console.log(y);