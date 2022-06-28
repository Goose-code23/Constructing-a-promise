const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
  };
  
  // Write your code below:
  const myExecutor = (resolve, reject) =>{
  if(inventory.sunglasses >0){
    resolve('Sunglasses order processed.');
  }else{
    reject('That item is sold out.');
  }
  }
  // In our constructor we are using our function to check inventory
  // if our condition is meet we resolve else we reject
  function orderSunglasses(){
    return new Promise(myExecutor);
  }
  
  // we create a function that will return our promise
  
  const orderPromise = orderSunglasses();
  
  //called our function
  
  console.log(orderPromise);