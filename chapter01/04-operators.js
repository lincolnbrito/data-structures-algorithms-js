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
