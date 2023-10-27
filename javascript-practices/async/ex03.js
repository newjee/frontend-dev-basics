// 비동기 함수
const myAsyncFn = (param) => {
  return new Promise((resolve, reject) => {
    // 비동기 코드
    setTimeout(() => {
      if (param === 'data') {  
        resolve("ok"); // 성공 시 resolve 호출
      } else { 
        reject(new Error('fail')); // 실패 시 reject 호출
      }
    }, 2000);
  });
};

// usage2 >> async ~ await 함수
const ex03 = async() => {
  const result = await myAsyncFn("data");
  console.log(result);
}

ex03(); 
console.log("wait......");
 