// // 요청을 위한 XHR객체 생성
// const requestObj = new XMLHttpRequest();
// console.log(requestObj.readyState); // 0

// // 요청을 준비(요청을 open) open메서드의 첫번째 요소에는 http method, 두번째에는 요청을 보낼 URL
// requestObj.open("GET", "https://test.api.weniv.co.kr/mall");
// console.log(requestObj.readyState); // 1
// // 요청 보낼때, 요청 상태가 바뀔때 마다 실행될 콜백함수 설정.
// requestObj.onreadystatechange = () => {
//   console.log(requestObj.readyState);

//   // readystate : 요청을 보내는 클라이언트의 상태를 의미합니다.
//   // readystate의 종류
//   // 0 (UNSENT) - XHR 객체가 생성되었지만 아직 초기화되지 않았습니다.
//   // 1 (OPENED) - open()함수가 호출되어 요청이 초기화되었습니다.
//   // 2 (HEADERS_RECEIVED) - send()함수가 호출되었습니다.
//   // 3 (LOADING) - 데이터를 다운받는 중 입니다.
//   // 4 (DONE) - 통신이 완료되었습니다.
//   if (requestObj.readyState === 4 && requestObj.status === 200) {
//     const result = requestObj.responseText;
//     console.log(JSON.parse(result)[0]);
//   }
// };
// requestObj.send();

// const req = new Promise((resolve, reject) => {
//   const requestObj = new XMLHttpRequest();
//   requestObj.open("GET", "https://test.api.weniv.co.kr/mall");
//   requestObj.onreadystatechange = () => {
//     if (requestObj.readyState === 4 && requestObj.status === 200) {
//       const result = JSON.parse(requestObj.responseText);
//       resolve(result);
//     } else if (requestObj.readyState === 4 && requestObj.status !== 200) {
//       reject(
//         new Error(
//           `호출이 정상적으로 이뤄지지 않았습니다.: ${requestObj.status}`
//         )
//       );
//     }
//   };
//   requestObj.send();
// });

// req
//   .then((resolveResult) => {
//     console.log(resolveResult);
//     const data = resolveResult;
//     const myOl = document.createElement("ol");

//     data.forEach((element) => {
//       const myLi = document.createElement("li");
//       const productName = document.createElement("p");
//       const price = document.createElement("p");

//       myLi.id = element.id;
//       productName.textContent = element.productName;
//       price.textContent = element.price;

//       myLi.append(productName);
//       myLi.append(price);

//       myOl.appendChild(myLi);
//     });
//     document.body.appendChild(myOl);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const req = fetch("https://test.api.weniv.co.kr/mall");
function render(data) {
  const myUl = document.createElement("ul");
  const myLi = document.createElement("li");
  const productName = document.createElement("p");
  const price = document.createElement("p");
  const img = document.createElement("img");

  myLi.id = data.id;
  productName.textContent = data.productName;
  price.textContent = data.price;
  img.src = "https://test.api.weniv.co.kr/" + data.thumbnailImg;

  myLi.append(productName);
  myLi.append(price);
  myLi.append(img);

  myUl.appendChild(myLi);
  document.body.appendChild(myUl);
}

req
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    json.forEach(render);
  })
  .catch((error) => {
    console.error(error);
  });
