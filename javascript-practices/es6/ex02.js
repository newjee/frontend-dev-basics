/**
 * const: 블록 범위의 상수
 */

//1. 블록 범위

try {

  if(true) {
    const n = 10;

  }  
  console.log(n);
} catch (error) {
  console.error("error: "+ error);
}

//2. 대입에러 (assignment)
try { 
  if(true) {
    const n = 10;
    n  = 20;
  }  
  console.log(n);
} catch (error) {
  console.error("error: "+ error);
}

