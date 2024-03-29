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

// usage1 >> ~then ~catch
myAsyncFn("data")
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.error(error);
  });

console.log("wait......");
 