/*EXAMPLE ONE*/

/* const noMondays = new Promise((resolve,reject)=>{
  if(new Date().getDay() !== 1){
    resolve("Good, it's not monday");
  }else{
    reject("Someone has a case of the Mondays!");
  }
});

noMondays
  .then(res => console.log(res))
  .catch(err => console.log(err));

  console.log('Este es un console log sincrono'); */


  /*EXAMPLE TWO*/

  const tossCoin = () =>{
    return Math.random() > 0.5 ? "Heads":"Tails";
  }

  /* FUNCION SINCRONA */

  const fiveHeadsSync = () =>{
    let headsCount = 0;
    let attemps = 0;
    while(headsCount < 5){
      attemps++;
      let result = tossCoin();
      console.log(`${result} was flipped`);
      if(result === "Heads"){
        headsCount++;
      }else{
        headsCount = 0;
      }
    }
    return `It took ${attemps} tries to flip five "Heads"`;
  }


  /* FUNCION ASINCRONA */

  const fiveHeadsAsync = () =>{
    return new Promise((resolve,reject)=>{

      let headsCount = 0;
      let attemps = 0;
      while(headsCount < 5){
      attemps++;
      let result = tossCoin();
      console.log(`${result} was flipped`);
      if(result === "Heads"){
        headsCount++;
      }else{
        headsCount = 0;
      }
    }
  
    if(attemps<100){
      resolve (`It took ${attemps} tries to flip five "Heads"`);
    }
    else{
      reject("Sorry, it's taken too many tries");
    }

    });
  }

  fiveHeadsAsync()
    .then(res => console.log(res))
    .catch(err => console.log(err))

 /*  console.log(fiveHeadsSync()); */
  console.log("This message runs before the asynchronous function ends");
