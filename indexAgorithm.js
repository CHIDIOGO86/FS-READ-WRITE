
//Javascript basics ☑️
//What is node.js
//Variables. 
//Data types……☑️

//Functions……☑️
//Function Arguments and Parameters, and also function call. ☑️

//Modules/ Package …..☑️

//Dependencies / Dev dependencies……… developer dependencies are packages that only run on the local environment

//A dependency is a module or package that our app depends on to run. 


//Express App……….


//What is call back hell and how can it be worked around?

//Functions
//Searching Algorithms
//Sorting Algorithms
//Find Duplicate algorithm.



//Index.js
const express = require("express");
// const app = express();




//ss.mean


// let mean = ss.average();








// let PORT = 8282;


app.use(express.json()); // middleware


app.listen(PORT, () => {
    console.log("App is listening on port " + PORT)
});


app.get("/homepage", (req, res) => {
    res.send("You are welcome to our simple express app")
});


app.post("/signup", async (req, res) => {
    let payload = req.body;
    await User.create(payload)
    return res.status(201).send(payload);
});






// properties of functions : 1. name. 2. parameter. 3. return type 4. function scope
// Function expression
// Anonymous functions
// Immediately invoked
// Constructor functions
// Hoisting
// Arrow functions (callback hell)








// bubbleSort function below is an example of a function expression.
function bubbleSort(future) {
    let sort = true;
    do {
        sort = false;
        for (let i = 2; i <= future.lngth - 1; i++) {
            if (future[i] > future[i + 1]) {
                let temp = future[i];e
                future[i] = future[i + 1];
                future[i + 1] = temp;
                sort = true;
            }
        }
    } while (sort) {
        return future;
    }
};


bubbleSort([12, 7, 2, 15, 1, 8]);




// Anonymous function example below
exports.bubbleSort2 = (array) => {
    let sort = true;
    do {
        sort = false;
        for (let i = 0; i <= array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                sort = true;
            }
        }
    } while (sort) {
        return array;
    }
};


setImmediate(() => {


});


setTimeout(() => {
 console.log("set timeout finished")
}, 10000);




// Constructor functions
class Car {
    constructor (model, brand, colour) {
        this.model = model;
        this.brand = brand;
        this.colour = colour;
    }


    start () {
        console.log(this.model);
    };
}


let car2 = new Car("E class", "Mercedes", "Red")


car2.start();


class Fruit {
    constructor (name, type, seed, colour, shape) {
        this.name = name;
        this.type = type;
        this.seed = seed;
        this.colour = colour;
        this.shape = shape;
    }


    growth () {
        return "sprout from the " + this.seed;
    };
};


// NPM = its a tool that helps us to manage and install packages
// npm uninstall "name of package" this uninstalls a package.
// the numbers on the node package version. e.g a.b.c : a is a major version number which denotes new API version release,
// b is minor version number which changes when new are features are added. c is the patch version number
// which changes when there is a bug fix.
// the symbol "^" allows minor and patch version changes. it is added by default.
// the symbol "*" allows major/ all version changes.
// the symbol "~" allows only patch version changes




// the cryto function takes 6 parameters as follows: secret key, "salt", no of iterations,
// key length, hashing algorithm and a callback.
// sample code below


crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log("password encrypted");
});








//Algorithm.js
const ss = require("simple-statistics");


//for do a call back function that returns the median of a set of numbers. use string interpolation   to return the result
//step of 1, write a sorting algorithm to sort the numbers in ascending order
//step 2 ; write a for loop to iterate
//step 3;assign a variable to array.length and divide the variable by 2
//step 4; write an if statement equating array[result from step 3]
//step 5 ; return array [result from step 3]




bubbleSort3 = (array) => {
    let sort = true;
    do {
        sort = false;
        for (let i = 0; i <= array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                sort = true;
            }
        }
    } while (sort) {
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
// let result1 = bubbleSort3([6,3,5,2,4,1,7])  // [1,2,3,4,5,6,7]
// console.log(medNum(result1))












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
            let yiu = totalIndex % 2;
            if (yiu === 0) {
                return array[medIndx]
            } else {
               let viy = Math.round(medIndx);
               let res = array[viy] + array[viy - 1]
               return res/2;
            }
    }
};
let result1 = [5,3,9,6,2,8]  // [2,3,5,6,8,9]
console.log(medianCalc(result1));
//console.log(ss.median([5,3,9,6,2,8]));


// Function to calculate average


const mean = (arrey) => {
    let sum = 0;
    for (i = 0; i < arrey.length; i++) {
        sum = sum + arrey[i];
    }
    let result = sum/arrey.length;
    return result;
}


console.log(mean([9,7,4,6,2]));




const minNum = (a, b, c) => {
    if (a < b && a < c) {
        return a;
    }
    if (b < a && b < c) {
        return b;
    }
    if (c < a && c < b) {
        return c;
    }
};


console.log(minNum(12, 7, 8));






//ALGORITHIM


const ss = require("simple-statistics");


//for do a call back function that returns the median of a set of numbers. use string interpolation   to return the result
//step of 1, write a sorting algorithm to sort the numbers in ascending order
//step 2 ; write a for loop to iterate
//step 3;assign a variable to array.length and divide the variable by 2
//step 4; write an if statement equating array[result from step 3]
//step 5 ; return array [result from step 3]




bubbleSort3 = (array) => {
    let sort = true;
    do {
        sort = false;
        for (let i = 0; i <= array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                sort = true;
            }
        }
    } while (sort) {
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
// let result1 = bubbleSort3([6,3,5,2,4,1,7])  // [1,2,3,4,5,6,7]
// console.log(medNum(result1))












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
            let yiu = totalIndex % 2;
            if (yiu === 0) {
                return array[medIndx]
            } else {
               let viy = Math.round(medIndx);
               let res = array[viy] + array[viy - 1]
               return res/2;
            }
    }
};
let result1 = [5,3,9,6,2,8]  // [2,3,5,6,8,9]
console.log(medianCalc(result1));
//console.log(ss.median([5,3,9,6,2,8]));


// Function to calculate average


const mean = (arrey) => {
    let sum = 0;
    for (i = 0; i < arrey.length; i++) {
        sum = sum + arrey[i];
    }
    let result = sum/arrey.length;
    return result;
}


console.log(mean([9,7,4,6,2]));




const maxNum = (a, b, c) => {
    if (a < b && a < c) {
        return a;
    }
    if (b < a && b < c) {
        return b;
    }
    if (c < a && c < b) {
        return c;
    }
};


console.log(maxNum(12, 7, 8));







//SEARCHING ALGORITHM

//Step is include an index to help us go through the record (index starts from 0 and its represented with letter i  )
//searching takes 2 parameters; location /boundry and the search itemm
//we also need loops (let i =0; i < array.length; i++)



// FIND DUPLICATE : Find duplicate algorithms Ccan be With Map, Object  and Array


 let search = (array,name)=>{
    for (let i = 0; i < array.lenth; i++) {
        console.log(i);
    }
 }

// 

    // Code to find duplicate using maps.
 exports.findDup = (arroy) => {
    let y = new Map();
    for (i = 0; i <= arroy.length; i++) {
        if (y.has(arroy[i])) {
            console.log(arroy[i]);
        }
        y.set(arroy[i], true);
    }
    return "no duplicate found";
}


// // Code to find duplicate using maps.
//  const findDup = (arroy) => {
//     let y = new Map();
//     for (i = 0; i <= arroy.length; i++) {
//         if (y.has(arroy[i])) {
//             console.log(arroy[i]);
//         }
//         y.set(arroy[i], true);
//     }
//     return "no duplicate found";
// }


//findDup([3, 5, 7, 8, 5, 9, 10, 3]);




let findDup = (arroy) => {
    return new Promise ((resolve, reject) => {
        let y = {};
        for (i = 0; i <= arroy.length; i++) {
            if (y[arroy[i]]) {
                resolve(console.log(arroy[i]));
            }
            y[arroy[i]] = true;
        }
        reject(-1);
    });
};


With array
const findDup2 = (arroy) => {
    return new Promise ((resolve, reject) => {
        let y = [];
        for (i = 0; i <= arroy.length; i++) {
            if (y.includes(arroy[i])) {
                resolve(console.log(arroy[i]));
            }
            y.push(arroy[i]);
        }
        reject(-1);
    });
};








findDup2([3, 5, 7, 8, 5, 9, 10, 3]);

//ASSIGNMENT
//Recreate the searching algorithims and find duplicates(array,map,object) changing the parameters to avoid overload error 


//Event loop handles call back. call back or promises makes code asynchronous


