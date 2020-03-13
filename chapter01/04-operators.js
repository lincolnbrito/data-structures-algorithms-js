//arithmetic operators
var num = 0;
console.log("num = 0:", num);

num = num + 2;
console.log("num = num + 2:", num);

num = num * 3;
console.log("num = num * 3:", num);

num = num / 2;
console.log("num = num / 2:", num);

num++
console.log("num++:", num);

num--;
console.log("num--:", num);

//assignment operators
num += 1;
console.log("num += 1 (num = num+1) ~> ", num);

num -= 2;
console.log("num -= 2 (num = num-2) ~> ", num);

num *= 3;
console.log("num *= 3 (num = num*3) ~> ", num);

num /= 2;
console.log("num /= 2 (num = num/2) ~> ", num);

//comparison operators
console.log("num == 1 ~> ", (num == 1));
console.log("num === 1 ~> ", (num === 1));
console.log("num != 1 ~> ", (num != 1));
console.log("num > 1 ~> ", (num > 1));
console.log("num < 1 ~> ", (num < 1));
console.log("num >= 1 ~> ", (num >= 1));
console.log("num <= 1 ~> ", (num <= 1));


//logical operators
console.log("true && false ~> ", (true && false));
console.log("true || false ~> ", (true || false));
console.log("!true ~> ", (!true));

//bitwise operators
console.log("5 & 1 ~> ", (5 & 1));
console.log("5 | 1 ~> ", (5 | 1));
console.log("~5 ~> ", (~5));
console.log("5 ^ 1 ~> ", (5 ^ 1));
console.log("5 << 1 ~> ", (5 << 1));
console.log("5 >> 1 ~> ", (5 >> 1));


//typeof operator return the type of the variable or expression
console.log('typeof num: ', typeof num);
console.log('typeof Packt: ', typeof 'Packt');
console.log('typeof true: ', typeof true);
console.log('typeof [1,2,3]: ', typeof [1, 2, 3]);
console.log('typeof {name: john}: ', typeof { name: 'john' });

//delete operator
var myObj = { name: 'John', age: 21 };
delete myObj.age;
console.log(myObj);