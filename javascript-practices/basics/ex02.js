/**
 * 변수와 자료형
 * ===============
 * -기본타입-
 * undefined
 * number
 * string
 * boolean
 * -객체타입-
 * object
 * function
 */

console.log("==기본타입(undefinde/number/string/boolean)==");

var u = undefined; //var u; 정의와 선언을 구분하지 않는다...
// myVariable; // ref  error

var i = 10;
var i = 20;
var s = "Hello World";
var b = true;

console.log(u + ":" + typeof u);
console.log(i + ":" + typeof i);
console.log(s + ":" + typeof s);
console.log(b + ":" + typeof b);

console.log("==객체타입(object)==");
var i2 = new Number(10);
var s2 = new String('hello');
var b2 = new Boolean(true);
var o = new Object();
var a = new Array();
var d = new Date();

var F = function() {
    // this.a = a;
}

// var o = new F(10);
console.log(i2 + ":"+ typeof i2 + ":" + (i2 instanceof Number));
console.log(s2 + ":" + typeof s2 + ":" + (s2 instanceof String));
console.log(b2 + ":" + typeof b2 + ":" + (b2 instanceof Boolean));
console.log(o + ":" + typeof o + ":" + (o instanceof Object));
console.log(a + ":" + typeof a + ":" + (a instanceof Array));
console.log(d + ":" + typeof d + ":" + (d instanceof Date));

// console.log(o.a, typeof o);

console.log("==객체타입(function)==");


console.log("==유사객체 : 원시 타입도 메소드 호출 가능==");
console.log(b2.valueOf());
console.log(b.valueOf()); // => new Boolean(b).valueOf()
console.log(new Boolean(b).valueOf());

//