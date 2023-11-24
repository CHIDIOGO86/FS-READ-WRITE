
//FILE SYSTEM (fs): its a module used to read & write/accessing data. its similar to file explorer
  // what kind of information is fs used for? JSON (javascript object notation)


const fs = require("fs");

const textIn = fs.readFileSync('staffdb.txt', 'utf-8');
 
 console.log(textIn)


 const textOut = `{
    
    "ID": "7",
    "staffName": "Kemi",
    "staffNumber": "4454",
    "designation": "Ea",
    "phone number": "0838",
    "USSD": "False"
    }`
    
 
fs.writeFileSync('staffdb.txt', textOut, {encoding:'utf-8',flag:'a'}); // apends a new element/ID without deleting
//console.log('file written');

//fs.writeFileSync(path,content)


// Assignment  create another controller and another db.txt