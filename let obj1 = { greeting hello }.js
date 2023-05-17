let obj1 = { "greeting": "hello" };
let obj2 = obj1;
obj1["greeting"] = "Bye";
console.log(obj1);
console.log(obj2);

output is:
{ greeting: 'Bye' }
{ greeting: 'Bye' }

// obj1 and obj2 both refer to the same object with the property "greeting" As both obj1 and obj2 point to the same object, printing either of them will display the modified object with the updated value of "greeting" as "Bye". Therefore, both console.log(obj1) and console.log(obj2) output { greeting: 'Bye' }.