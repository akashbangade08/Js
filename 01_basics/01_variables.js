const accountId = 123
let accountEmail = "akash@google.com"
var accountPass = "12345678"
accountCity = "Kolhapur"
let accountState;

// accountId = 2 Not allowed because it is constant
accountEmail = "abc@gmail.com"
accountPass = "947323"
accountCity = "Pune"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPass,accountCity,accountState]);

