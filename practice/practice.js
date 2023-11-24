const addNum = (a,b) =>{
return a + b
}
console.log(addNum(2,3))

function moduNum(c,a) {
return  c % a
}
console.log(moduNum(6,3))

const lastChar = (sample) => {
    let lastIndex = sample.length - 1
    return sample[lastIndex]

}
console.log(lastChar("chukwuemeka "))

const square = (a,s) =>{
return a**s // ** is the operator for square
}
console.log(square(2,3))


const tenOp = (a,b,c) => {
if  (a > b && a > c) {
    return a
}

if (b > a && b > c){
   return b
}
 if (c > a && c > b) {
    return c
}

}
console.log(tenOp(3, 10, 9))
// Assignment . add the four other outcome to tenOp


const divisible = (a,z) =>{
    if ( a % z === 0){
        return `${a} is divisible by ${z}`
    }
    else return "not divisible"

    }
    console.log(divisible(8,3))

const typ = (a) =>{
if (typeof(a) === "object"){
return "this is an obj"
}
else{
 return "not an obj"
}
}
console.log(typ({resp: "hello world"}))


const roundUp = (b,c) =>{
   let result = Math.round(b/c)

   return result
}
console.log(roundUp(7,2))

const roundDown = (m,e) =>{
    let result1 = Math.floor(m/e)
    return result1
}
console.log(roundDown(7,2))


const avgNum = (n) =>{
    let sum = 0;
for (let i = 0; i < n.length; i = i+1 ){

    sum = sum + n[i]
}

let result2 = sum/n.length
console.log(result2)

}
avgNum([3,2,3,4])


//design a search function to return a customer name

//const cusName = (item,position) =>{

// question ; do a function to calculate age using date of birth
//step 1;do a function that takes full date of birth as a parameter
//step 2; subtract the current year from year of birth
//step 3; subtract the current month from the month of birth
//step 4, if we are in the birth month and today's date is less than the birth date, reduce age by 1

const calAge = (test) =>{
 
    let today = new Date()
    let birthDate = new Date(test)

    let age = today.getFullYear() - birthDate.getFullYear();

    let month = today.getMonth() - birthDate.getMonth();

    // if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())){
    //     age-- // 0r age = age -1
    // }

     return age;
}
 console.log(calAge("2000-12-14"))


 const bobbleSort5 = (array5) => {
 let sort = true
do
 {
    
    sort = false;
 for (i= 0; i <= array5.length - 1; i++) {
    if ( array5[i] > array5[i + 1]) {// ie if element 1 is greater than the next element,swap it

    let placeHolder = array5[i]
        array5[i] = array5[i + 1]
        array5[i + 1] = placeHolder
        sort = true;
    }
 }
} while (sort) {
    return array5
 }
 }
console.log(bobbleSort5([5,42,6,1]))
 


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