const cConverter = require("currency-converter-lt")
//const cConverter = require("curreny-converter-lt")

//let currencyConverter = new cConverter ()

//let currencyConverter = new cConverter({from:"USD", to:"JPY", amount:100})

let currencyConverter = new cConverter({ from: "USD", to: "JPY", amount: 100 });

currencyConverter.rates("JPY").then(response);

    console.log(response)


    

    //currencyConverter.currencyName("JPY").then((response) => {

    //    console.log(response); // Log the response inside the .then() callback.
    //}).catch((error) => {

      //  console.error(error); // Handle any errors that might occur during the conversion.
   // });    

