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


//ex04 : this를 어휘적으로 바인딩()
console.log("\nex04--------");

const hido={
  name : '희도',
  friends : ['도일', '코난', '장미'],
  printfriends: function() {
    //this : 희도.....
    this.friends.forEach( (friend) => {
      console.log(`${this.name}의 친구 ${friend}`);
    })
  }
}

hido.printfriends()
