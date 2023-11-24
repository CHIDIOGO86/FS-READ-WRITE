
  // Code to find duplicate using maps.
  //const findDup = async (arroy) => {   // Assignment 1 add promise to this.
    const findDup = (arroy) => {
        return new Promise ((resolve, reject) => {
        let y = new Map();
    for (i = 0; i <= arroy.length; i++) {
        if (y.has(arroy[i])) {
            resolve(console.log(arroy[i]));
            //console.log(arroy[i]);
        }
        y.set(arroy[i], true);
       //await  y.set(arroy[i], true);
    }
    reject ("no duplicate found");
    //return "no duplicate found";
})
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




//let findDup = (arroy) => {  // change to async await.
  //  return new Promise ((resolve, reject) => {
   //     let y = {};
      //  for (i = 0; i <= arroy.length; i++) {
       //     if (y[arroy[i]]) {
       //         resolve(console.log(arroy[i]));
       //     }
      //      y[arroy[i]] = true;
       // }
    //    reject(-1);
   // });
//};

let findDupM = async (arroy) => {  // change to async await.
    //return new Promise ((resolve, reject) => {
        let y = {};
        for (i = 0; i <= arroy.length; i++) {
            if (y[arroy[i]]) {
                //resolve(console.log(arroy[i]));
               await  console.log(arroy[i]);
            }
            y[arroy[i]] = true;
        }
        //reject(-1);
    //});
};



//With array
//const findDup2 = (arroy) => {  //Assignment 2 change the promise to async await.
const findDup2 = async (arroy) => {   
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




// Asynchronous programming in Node.js
// callback


let u = () => {
    return 2 + 2;
}


console.log(u);


// promise (resolve, reject)




// async and await


//Write a function that 




