console.log("7" > 7)
console.log("2">"21")
console.log("KL">"S")


output is :
false
false
false

//"7" is not greater than the number 7 the string is coerced to a number, and "7" as a number is equal to 7. Therefore, the comparison evaluates to false.
// same case "2","21" false
//and the 3rd operation are out check is first index letter "k","s" "K" has a smaller Unicode value than "S"comparison evaluates to false