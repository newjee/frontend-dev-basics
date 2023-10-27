/**
 * 구조 분해 (Destructing)
 */

//ex01-basic

const user = {

  firstName : '희도',
  lastName: '고',
  email : 'hido@gmail.com'
};

// const firstName = user.firstName;
// const lastName = user.lastName;
const email = user.email;
// console.log(firstName, lastName, email);


console.log("\n--------");

const {firstName} = user;
const {lastName} = user;
// const {email} = user;

console.log(firstName, lastName, email);


//ex02- default value
console.log("\n[ex02]--------");

const goods = {
  name : 'TV',
  price: 10000,
  countStock : 10
}

const {name, price,countStock=0, countSold=0} = goods;
console.log(name, price, countStock, countSold);

//ex03- 구조 분해 대상이 되는 객체의 속성 이름과 변수 이름이 다를 경우,
console.log("\n[ex03]--------");
const person = {
  n: '희도',
  c: 'korea'
}

const {n: fullName, c: country} = person;

console.log(fullName, country);

//ex04- 내부 객체 (nested object)의 구조분해
console.log("\n[ex04]--------");
const sutdent = {
  name : '희도',
  age : 18,
  score : {
    math : 100,
    korean : 30,
    science : 50
  }
}

const {
  name: studentName,
  score: {math, korean, science, music = 0}   } = sutdent;


console.log(studentName, math, science, music);
console.log(
`
${studentName}의 점수
수학 : ${math}
과학 : ${science}
음악 : ${music}
  `);


//ex05- 함수 파라미터
console.log("\n[ex05]--------");

const averageScore = ({score: {math, korean, science, music = 0}}) => {
  return (math+korean+science+music) / 4
}

console.log(averageScore(sutdent));

//ex06- 배열 구조 분해 : basic
console.log("\n[ex06]--------");
const color = [155, 200, 75];

let [red, green, blue] = color;

console.log(color);
console.log(red, blue);

//ex07- 배열의 구조 분해 : default value
console.log("\n[ex07]--------");
[red, green, blue, alpha =0] = color;
console.log(red, blue,alpha);

//ex08- 배열의 구조 분해 : skip value
console.log("\n[ex08]--------");
const[,,colorOfBlue] = color;
console.log(colorOfBlue);

//ex09- swap
console.log("\n[ex09]--------");
let x =10 ;
let y = 20;
console.log(x, y);

const tmp = x;
x = y;
y = tmp;
console.log(x, y);

[y,x] = [x,y];
console.log(x, y);

//ex10- 배열의 구조 분해 : ...(array spread operator)
console.log("\n[ex10]--------");
const colors =['red', 'orange', 'yellow','green', 'blue', 'indigo', 'violet'];
console.log(colors);

const [firstColor, secondColor, ...othersColor] = colors;
console.log(firstColor, secondColor);
console.log(othersColor);

//마지막에만 사용 가능!!!
// const [firstColor2, secondColor2, ...othersColor2, lastColor] = colors;

// 함수 파라미터에서 구조 분해 된 경우..., argument 대용
console.log(colors);
console.log('Colors',...colors);
console.log('Colors',othersColor);

//ex11- 배열의 구조 분해 : ...를 함수의 파라미터로 사용
const f = (...colors) => { return colors.join(' ');
  // console.log(colors)
}

console.log(f('red', 'yellow', 'blue'));
