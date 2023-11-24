
const fs = require ("fs")
const fsRead = fs.readFileSync('../studentDbAss.txt', "utf-8");
 
// console.log(fsRead)



  const fsWrite =
    
    `{
        "SID": "4",
        "studentName": "Uju",
        "studentNumber": "5",
        "class": "four",
       "age": "7 years",/     "USSD": "False"
       }`
   
  
 
//  fs.writeFileSync("studentDbAss.txt" , fsWrite, {encoding:"utf-8" , flag: "a"}
//  )
 
// console.log(fsWrite)

//ASYNCHRONOUS VERSION OF READING FILE WITH FILE SYSTEM

fs.readFile("../studentDbAss.txt", 'utf-8', (err,data1) => { //call back makes it asynchronous
         if(err) {
     return console.log("ERROR!"); 
          } 
          console.log(data1)
 })
    


//asychronous version of writing files

fs.writeFile('../Ass folder/newDb.txt', fsWrite, 'utf-8',(err) => {
    if(err) {
        return ("wrong input");
    }
    console.log("written new file")
})


fs.readFile('../Ass folder/newDb.txt', 'utf-8',(err,data2) => {
    if(err) {
    return console.log ("message")
    }
    console.log(data2)

})


//ASSIGNMENT: CREATE A FOLDER, CREATE ANOTHER DATABASE INSIDE THE NEW FOLDER