const accountId =  144553
let accountEmail = "vgujar@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed
accountEmail = "vgds.com"
accountPassword = "23232323"
accountCity = "Pune"

/*
Prefer not to use var because of issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])