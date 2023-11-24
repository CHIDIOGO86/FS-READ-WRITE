
const fs = require ("fs")

//const fsWrite = require ("../testFd/studentControllerAss")


const fsWrite =
    
`{
    "vip": "4",
"vipName": "Uju",
"vipNumber": "5",
"class": "four",
"age": "7 years",    
}`

writeData = fsWrite
fs.writeFile("../testFd/dbNew.txt",  writeData,  "utf-8", (err) =>{
    if (err)
    {
    return console.log ("wrong info");

    }
    console.log ("file written")

})

