/**
 * Arrow function
 */

const power = function(x) {
  return x*x;
}

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(n) {
  // console.log(`${n}: ${power(n)} `)
  // no 계행
  process.stdout.write(`${n}: ${power(n)}\t `)
})


//ex01
console.log("\n--------");
numbers.forEach(function(n) {
  const result =(function(x) {
  return x*x;
  })(n);

  process.stdout.write(`${n}: ${result}\t `)
})


console.log("\n--------");
numbers.forEach(function(n) {
  const result = ((x) => {return x*x;})(n);

  process.stdout.write(`${n}: ${result}\t `)
})

console.log("\n--------");
numbers.forEach(function(n) {
  const result = ((x) => x*x) (n);

  process.stdout.write(`${n}: ${result}\t `)
})

console.log("\n--------");
numbers.forEach(function(n) {
  const result = (x => x*x)(n);

  process.stdout.write(`${n}: ${result}\t `)
})


//ex02
console.log("\nex02--------");
numbers.forEach(function(n) {

  process.stdout.write(`${n}: ${(x => x*x)(n)}\t `)
})

const power2 = () => {
  x*x
}

console.log("\n--------");
numbers.forEach((n) => {

  process.stdout.write(`${n}: ${(x => x*x)(n)}\t `)
})

console.log("\n--------");
numbers.forEach(n =>  process.stdout.write(`${n}: ${(x => x*x)(n)}\t `))


//ex03 여러행 함수
console.log("\nex03--------");

[5, 3, 15, 1045, 43, 92]
.forEach(n =>  {
  if(n%5 ==0){
  process.stdout.write(`${n}: ${(x => x*x)(n)}\t `)

  }
});
  

//5의 배수만...

