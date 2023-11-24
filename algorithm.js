
const stat = require ("simple-statistics")

const server = require ("http")

const addNum = (a,b)=> { 
    return a + b;
}
console.log(addNum(5,6));
//for heavy operations, use call back or asyn await



function subtract( a,b) {
    return a - b;
} 
console.log(subtract(5,6))
// for loops always seperate call back / async await to make it faster. Note that call back is required for function expression  

const remainderNum = (a,b) => {
    return a % b;
}
console.log(remainderNum (5,2))
// the term for remainder is modulus %


function divide (a,b){
    return a / b;
}
console.log (divide(6,3))


function firstCharacter (sample){
    return sample[0];

}
console.log(firstCharacter("english"))

//const secondWord = (figure)=>{
//    return figure[1];
//}
//console.log("name")

function secondWord (figure){
    return figure[1]
}
console.log(secondWord("name"))


const calculateArea = (length, width)=>{
    return ( length * width);
}
console.log(calculateArea(5,10))


function findModulus (a,c){
    return(a % c);  
}
console.log(findModulus(7,2))



let a = 25;

const sqRoot = Math.sqrt(a)
console.log (sqRoot)


console.log(Math.max(3,6))

function minNum (a,b){
    return (a < b ) ?  a : b; // ternary form of an "if"statement with 3 operands
}
console.log(minNum(4,5))

//OR 

function lowNum ( a, c){
    if (a < c ) { return a}
   else if (a == c ) {return (`${a} and ${c} are equal`);} //string interpolation 
   else  {return c ;}
};
console.log(lowNum(5,5))


// function sameValue (d,e){
//     if (d = e) return true
//     else return false
// }
// console.log (sameValue(8,8))


function calDiv (a, b){
if (a % b === 0) return `${a} and ${b} are divisible`
else return `${a} and ${b} are not divisible`;
}
console.log(calDiv(6,2))


//a function that checks the max of two numbers, use interpolation to return the response
//write a function to reurn an array of numbers, add hello to the returned numbers, 6 elements.

function checkMax (y,z){
    if (y !== z) {

        if (y < z){
            return `${z} is larger than ${y}`;
        }
        else {
            return `${z} is less than ${y}`
        }
    
    }
    return `${y} is equal to ${z}`;
}
console.log(checkMax("9","9"))


function listNum (array){
   for (i = 0; i < array.length; i++){
    //return array; return displays only the element from the 1st index if its array  at [i]
    console.log ("hello " + array[i] ) 
   }
}
    listNum([2,4,6,8,10,12]);

    
function split (a){
     console.log(stat.average (a))
}

 
split([4,5,4,6,8])


//const app = server.createServer(req, res) 
    //return res.status(200)

//app.listen(3000, ()=>{
 //"connected to" + PORT})


// do a function that returns the average of a set of numbers, use string interpolation to return the result.
// do a call back function that returns the median of a set of numbers. use string interpolation to return the result
//write a function that shows the current date and time


const avgNum = (c) => {
    if (typeof (c) !== "object" ){
        return "invalid response"
    }
    if (typeof (c) === "string"){
        return "ok"
    }

     let avgOfNum = stat.average(c)

    if (avgOfNum === 2) 

     {
        return `${avgOfNum}  is the average of 3 elements`;
    }
    else {
    
        return  `${avgOfNum}  is not the average `;  
}

}
console.log(avgNum([2,2,2]))

let arr = [2,2,2]
console.log(typeof arr)



   

 



const medOfNum = (z) => {
    console.log (stat.median(z))
}

//medOfNum([2,3,4,5,8,6])

// OR 

// for do a call back function that returns the median of a set of numbers. use string interpolation   to return the result 

// step of 1, write a sorting algorithm to sort the numbers in ascending order
//step 2 ; write a for loop to iterate
// step 3;assign a variable to array.length and divide the variable by 2
//step 4; write an if statement equating array[result from step 3]
//step 5 ; return array [result from step 3]

// ctrl

bubbleSort3 = (array) => {
    let sort = true;
    do {
        sort = false;
        for (let i = 0; i <= array.length -1 ; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                sort = true;
            }
        }
    } while (sort) { //the while sets the condition and do performs the whole function
        return array;
    }
};
medNum = (sortedArrey) => {
    for (i = 0; i <= sortedArrey.length; i++) {
let totalIndex = sortedArrey.length - 1; 
        let medIndx = totalIndex/2;
        return (sortedArrey[medIndx]) 
    }
};
let result1 = bubbleSort3([5,3,9,6,2,8])  // [1,2,3,4,5,6,7] // 6,3,5,2,4,1,7
console.log(medNum(result1))

//console.log(medNum([6,3,5,2,4,1,7]))


//console.log(stat.median([5,3,9,6,2,8]))


function medianCalc (array) {
    let sort = true;
    do {
        sort = false;
        for (let i = 0; i <= array.length; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                sort = true;
            }
        }
} while (sort) {
            let totalIndex = array.length - 1; 
            let medIndx = totalIndex/2;
            let remIndx = totalIndex % 2;
            if (remIndx === 0) {
                return array[medIndx]
            } else {
               let roundUp = Math.round(medIndx); // or Math.floor to round up to the smaller number while .round rounds up to the bigger number
               let res = array[roundUp] + array[roundUp - 1] 
               return res/2; 
            }
    }
};

console.log(medianCalc([3,7,8,5,7,10]))


//3.write a function that shows the current date and time

let date = new Date(1688593437617)//toLocaleString().join

//let date = Date.now()

    //console.log(date);


    let date2 = new Date(Date.now()).toLocaleString()

  //console.log(date2)

    
//OR

let date1 = Date.now()

    //console.log(date);


    let day = new Date(date1).toLocaleString()

    console.log(day)

    let date3 = ()=>{
        return new Date().toLocaleString() // this is called recursion,returning another function in a callback function

    }

    console.log(date3(date1))

    //write a function to carryout division and return remainders where applicable
    ///write a function to calculate the area of a square with 2 parameters
    //write a function that carries out division but all answers must be rounded up to the nearest whole numbers

    function divNum (a, b){
       if  (a % b === 0 )

    return (a / b);

    else return (a % b)

    }

    console.log(divNum(4, 3));


    const getArea = (l, w) => {

        return (l * w);
    }
    console.log(getArea(2, 3));



    const divRound = (x, y) =>{

        let result = Math.round(x/ y)

        console.log(result);

    }
    //do a function that returns the average of a set of numbers, use string interpolation to return the result.



const avggNum = (w) => {
    let sum = 0;
for( let i=0; i < w.length; i++ ){
    
    sum = sum + w[i] 
    //for index at 0 =3
    //sum = 0 + 3 = 3
    //at index 1 ; 
    // 3 = 3 + 2 = 5
    // at i = 2;
    // 5 = 5 + 3 = 8
    // i = 3 ;
    // 8 = 8 + 4 = 12
    //at i = 4;
   // 12 = 12 + null

}

let result = sum/w.length
    console.log(result)
    
}
    avggNum([3,2,3,4])

    

//SEARCHING ALGORITHM
// Identify the item and the array that points the direction

const search = (direction, elmentToFind) => {
    for ( let i = 0; i < direction.length; i++){

        if (direction[i] === elmentToFind){
            return ` ${elmentToFind} can be found at index ${i}`;
        }
         
    }
    return "element not found"

}
console.log(search(["james","jack","kay"], "jay"))

//design a search function to return a customer name

const mainName = (savings, nameOfCus) =>{
    for ( let i = 0; i < savings.length; i++){
        if ( savings[i] === nameOfCus){
            return` ${nameOfCus} is located at index ${i}` 
            
        }
       
    }
    return` ${nameOfCus} is not in any position`

}
console.log(mainName(["Ada", "Kemi", "Musa"],"Musa"))

//NB returning a response terminates the loop

// if ( savings[2] !== nameOfCus){
//     return ` ${nameOfCus} is located at line ${1}`
// }

//NEXT CLASS; FINDING DUPLICATE USING ALGORITHM ie elements that appears twice.there are several methods we can use array , object or maps;
//declare a variable and do a for loop 
// array function .includes checks if the parameter passed is among the elements of the array
// another array function .push will push the parameter from .includes function into the new array


const findDuplicate = (numbers)=>{
    let y = [];
    for (let i= 0; i < numbers.length; i++){
        if (y.includes(numbers[i])){

            return numbers[i] // ie if line 399 is true , it will return the duplicate
        }
        y.push(numbers[i])
    }
    return "no duplicate found in the array" //if the whole for loop has finished
}

console.log(findDuplicate([6,8,7,1]))

// objects can also be use to find duplicate instead of array ,the diff is object has a lower time complexity


const findSameVal = (array)=>{
    let z = {};
    for (let i= 0; i < array.length; i++){
        if (z[array[i]]){ //this checks if the element is a duplicate in the object z


            return array[i] // ie if line 417 is true , it will return the duplicate
        }
        z[array[i]] = true // if line 417 returns false, take the element as a new property in the object z
                        // and assign its value as true

    } 
    return "no duplicate found in the obj" //if the whole for loop has finished
}

console.log(findSameVal([6,8,7,1,6]))

const findDupVal = ( array) => {
    let w = new Map() //new keyword is for instantiation of the property of the class while extend keyword inherits the entire property

    for (let i=0; i < array.length; i++){
        if ( w.has(array[i])) {  //checks if the map already has the element
            console.log(w)
            return array[i]

        }
        w.set(array[i], true) // .set sets the element to a key in the map with the value of true
    }
    return "duplicate not found"
    

}
console.log(findDupVal([5,5,7,8,9]))


const dupNum = (array) => {
   for (let i =0; i < array.length; i++);
}
   let c = [];

   if (c.includes(array[i])){
    return (array[i])}

    c.push(array[i])
{
  
   return "no duplicate found"
  }

   console.log(dupNum([1,2,3,4,5,5]))



   
const bubbleSort6 =(arrayblock) => {
    let sort = true;
    do
    {
        sort = false;
        for (i= 0; i <= arrayblock.length - 1; i++); {
            if (arrayblock[i] > arrayblock[i+1]) {
    
                let placeholder1 = arrayblock[i]
                arrayblock[i] =  arrayblock[i + 1]
                arrayblock[i + 1] = placeholder1
    
                sort = true;
            }
         } 
        }while (sort) {
            return arrayblock
            }
    
            }
         
    
        console.log(bubbleSort6([4,54,2,0]))