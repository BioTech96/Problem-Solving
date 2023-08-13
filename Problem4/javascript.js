// Checking the user's gender by the length of the characters if it is 1 then its a boy else its a girl

userGenCheck = char => {
   if (char.length === 1)
   {
    return("User is a Boy");
   }
   else
   {
    return("User is a Girl");
   }
}

console.log(userGenCheck('j'))