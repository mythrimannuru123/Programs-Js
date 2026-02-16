var arr = [1,2,3,4];

//length method

var len = arr.length;
console.log(len);

//push method

var pushmethod = arr.push(5);
console.log(arr);

//unshift method

var unshift = arr.unshift(0);
console.log(arr);

//pop method

var popmethod = arr.pop();
console.log(arr);

//shift method

var shift = arr.shift();
console.log(arr);

//at method

var atmethod = [1,2,3,4].at(1)
console.log(atmethod)

//indexOf method

var x = arr.indexOf(4);
console.log(x);

//includes method

var includesmethod = [1,2,3,4].includes(2);
console.log(includesmethod);

//map method

var mapmethod = arr.map((x)=> x+5);
console.log(mapmethod);

//filter method

var filtermethod = arr.filter((x)=> x>2);
console.log(filtermethod);


//reduce method

var reducemethod = arr.reduce((x)=> x+5);
console.log(reducemethod);

//every method

var everymethod = arr.every((x)=> x>0);
console.log(everymethod);

//somemethod

var somemethod = arr.some((x)=> x>3);
console.log(somemethod);

//fill method

var fillmethod = arr.fill(10);
console.log(fillmethod);

//concat method

var arr1 = [1,2,3];
var arr2 = [4,5,6];
var concatmethod = arr1.concat(arr2);
console.log(concatmethod);

//reverse method
var array = [1,2,3,4];
var reversemethod = array.reverse();
console.log(reversemethod);

//slice method

var slicemethod = array.slice(1,3);
console.log(slicemethod);  

//splice method

var splicemethod = array.splice(1,2);
console.log(array);

//sort method

var sortmethod = [3,1,4,2].sort();
console.log(sortmethod);

//join method

var joinmethod = [1,2,3,4].join("");
console.log(joinmethod);

//flat method

var flatmethod = [1,2,[3,4]].flat();
console.log(flatmethod);

//findindex method

var findindexmethod = [1,2,3,4].findIndex((x)=> x>3);
console.log(findindexmethod);

//toString method   

var tostringmethod = [1,2,3,4].toString();
console.log(tostringmethod);
 
//isArray method

var isarraymethod = Array.isArray([1,2,3]);
console.log(isarraymethod);

//from method

var frommethod = Array.from("hello");
console.log(frommethod);
