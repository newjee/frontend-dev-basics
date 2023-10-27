//import

//-1&2. unamed export 모듈에서 import 할 땐 반드시 이름 지정
import myFunction from './ex07-1.mjs';
import myObject from './ex07-2.mjs';


console.log(myFunction(2, 1));
console.log(myObject.add(2, 1),myObject.substract(2, 1));


// 객체 분해
const { add, substract} = myObject;
console.log(add(2, 1),substract(2, 1));


//-3
//1) named 다수 객체 import 시 객체 분해
import {add3,substract3} from './ex07-3.mjs';
console.log(add3(2,1), substract3(2,1));

//2) named export는 import 대상이 다수가 될 수 있기 떄문에 특정이름 지정 못함
import * as m from './ex07-3.mjs'
console.log(m.add3(2,1), m.substract3(2,1));

//-4






