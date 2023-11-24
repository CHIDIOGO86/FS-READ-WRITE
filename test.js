
let findDupM =  (arroy) => {  // change to async await.
    //return new Promise ((resolve, reject) => {
        let y = {};
        for (i = 0; i <= arroy.length; i++) {
            if (y[arroy[i]]) {
                //resolve(console.log(arroy[i]));
               return (arroy[i]);
            }
            y[arroy[i]] = true;
        }
        return "no duplicate found";
        //reject(-1);
    //});
    };
  console.log (findDupM([4,5,4,6,7]))


  //FILE SYSTEM (fs): its a module used to read & write/accessing data. its similar to file explorer
  // what kind of information is fs used for? JSON (javascript object notation)

