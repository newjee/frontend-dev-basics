
// 비동기 함수
const myAsyncFn = (param, callback) =>
{ //
  // 비동기 코드
  // 1) 파일 시스템 접근(file io)
  // 2) 네트워크 통신
  // 3) sql to DB 
  // 4) setTimeout

  setTimeout(() => {

    if(param === 'data') {  
      callback(null, 'ok');
    } else {
      callback(new Error('fail'), null);

    }

  }, 2000)

}

//test
myAsyncFn("", (error, result) => {
  if(error) {
    console.error(error);
    return;
  }

  console.log(result);

  // 콜백 지옥...
  syncFn2("", () => {



  })
});

console.log("wait......");

