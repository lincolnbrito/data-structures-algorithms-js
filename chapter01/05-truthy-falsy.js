"use strict";

function testTruthy(val) {
    return val ? console.log(val, ' ~> truthy') : console.log(val, ' ~> falsy');
}

testTruthy(true); //true
testTruthy(false); //false
testTruthy(new Boolean(false)); //true object is always true

testTruthy(''); //false
testTruthy('Packt'); //true
testTruthy(new String('')); //true object is always true

testTruthy(1); //true
testTruthy(-1); //true
testTruthy(NaN); //false
testTruthy(new Number(NaN)); //true object is always true

testTruthy({}); //truevobject is always true

var obj = { name: 'John' };
testTruthy(obj); //true
testTruthy(obj.name); //true
testTruthy(obj.age); //false
if (obj.idade) {
    console.log('rrfsdfsdf');
}