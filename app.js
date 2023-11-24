const express = require ("express");
const app = express();
const url = require ("url")
app.use(express.json())
const PORT = 2017;

app.listen (PORT, () => {
 console.log ("App is connected to port "  +  PORT );
});

let dataBase = [
{
 category: 1,
 childName: "john",
 age1: "six months",
 grade: "infant"
},

{
category: 2,
childName: "Mary",
age2: "two years",
grade: "toddler"
},

{
category: 3,
childName: "Ray",
age3: "thirteen years",
grade: "teenager"

}]



app.get("/express/v1/homepage", (req, res) => {
    return res.status(200).json({message: "hello, welcome to my app"})

});parseInt

app.post("/express/v1/minors", (req, res) =>{
    const { age } = req.body
    if (typeof (age) === "number"){
        return res.status(400).json({ message: "better luck next time" })
    }
    if (req.body.childName === "Ray") {
        return res.status(200).json ({message : "Ray is 13 years old", ageReturn: age})
    }
// change to req.params using , 2.check if age is actually a number using an if check using post or put (parseInt)
});
 
app.post("/express/v1/users/:age", (req, res) => {
    const { age } = req.params
    //let newAge = parseInt(age) //parseInt converts the string format of the url to a number, .toString converts to string 
    let newAge = +age
    if (typeof(newAge) === "number"){
        return res.status(200).json({message: "valid response" , correctAge: newAge})

    }
});

app.post("/express/v1/toddlers", (req, res) => {
    const { category1 } = req.body
    console.log(category1)
   let age = "" + category1 //parseInt converts the string format of the url to a number, .toString converts to string 
    if (typeof(age) === "string"){
        return res.status(200).json({message: "valid response" , correctAge: age})

    }
});

app.put("/express/v1/users/:name", (req, res) => {
    //const { query, pathname } = url.parse(req.url, true);
    const { name } = req.params
    //if (pathname === "/express/v1/users") return res.status(400).json({message: "bad request"})

    if (!name) {return res.status(400).json ({message: "bad request"})}
    
    if (typeof (name) !== "string"){
      return res.status(400).json({message: "invalid input"})
    }
    else return res.status (200).json ({message: "Mary is nice", data: name })
});


// Overview page
    
