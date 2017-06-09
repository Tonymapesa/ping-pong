//business logic
var userInput = prompt("Enter a number to start the game.");

var userNumber = parseInt(userInput);
//console.log(typeof (userInput));

var numberArr = [];

for (var i = 1; i <= userNumber; i++){
    numberArr.push(i);
}

//console.log(numberArr);

numberArr.map(function (num){
  if ((num % 3 ===0) && (num % 5 ===0)){
       //ping pong
       num = 'ping pong';
  } else if (num % 3 === 0){
     //pong
       num = 'pong';
  } else if (num % 3 === 0){
   //ping
   num = 'ping';
 } else {
      // do not change the number
 } // else
  console.log(num);
});
