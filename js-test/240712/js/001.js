// this

// call
var peter = {
  name: "Peter Parker",
  sayName: function () {
    console.log(this.name);
  },
};

var bruce = {
  name: "Bruce Wayne",
};

peter.sayName.call(bruce);

// apply
var peter = {
  name: "Peter Parker",
  sayName: function (is, is2) {
    console.log(this.name + " is " + is + " or " + is2);
  },
};

var bruce = {
  name: "Bruce Wayne",
};

peter.sayName.apply(bruce, ["batman", "richman"]);

// bind
function sayName() {
  console.log(this.name);
}

var bruce = {
  name: "bruce",
  sayName: sayName,
};

var peter = {
  name: "peter",
  sayName: sayName.bind(bruce),
};

peter.sayName();
bruce.sayName();

// 화살표 함수의 this
// 일반 함수
// const person = {
//   name: "hojun",
//   age: 25,
//   a() {
//     console.log(this);
//     console.log(this.name);
//     function b() {
//       console.log(this);
//       console.log(this.name);
//       function c() {
//         console.log(this);
//         console.log(this.name);
//       }
//       c();
//     }
//     b();
//   },
// };
// person.a();

// 화살표 함수
const person = {
  name: "hojun",
  age: 25,
  a() {
    console.log(this);
    console.log(this.name);
    let b = () => {
      console.log(this);
      console.log(this.name);
      let c = () => {
        console.log(this);
        console.log(this.name);
      };
      c();
    };
    b();
  },
};
person.a();

// setTimeout에서 왜 this가 window를 가리킬까?
// const obj = {
//   num: 1,
//   func() {
//     setTimeout(function () {
//       console.log(this);
//     }, 1000);
//   },
// };

// const obj = {
//   num: 1,
//   func() {
//     console.log(this, "this1");
//     setTimeout(function () {
//       console.log(this, "this2");
//     }, 1000);
//   },
// };

// obj.func();

// this가 obj를 가리키려면
const obj = {
  num: 1,
  func() {
    setTimeout(() => {
      console.log(this);
    }, 1000);
  },
};

// 함수 심화
// 구조분해할당을 이용한 아규먼트 처리

function 함수4(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부) {
  // 회원 등급 권한
  console.log("함수기능");
  return;
}

함수4("Gold", true, true, true, "대화방 전체 백업 가능", true); // 가독성이 떨어진다.

function 함수4({ 회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부 }) {
  console.log("함수기능");
  console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부);
  return;
}

함수4({
  회원등급: "Gold",
  글쓰기: true,
  글읽기: true,
  채널관리: false,
  백업: "부분가능",
  소셜로그인여부: true,
});

///////입력되지 않은 값은 undefined///////

function 함수4({ 회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부 }) {
  console.log("함수기능");
  console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부);
  return;
}

함수4({
  회원등급: "Gold",
  채널관리: false,
  백업: "부분가능",
  소셜로그인여부: true,
});

///////초깃값 설정1///////

// function 함수4({
//   회원등급 = 'Gold',
//   글쓰기 = true,
//   글읽기 = true,
//   채널관리 = true,
//   백업 = '부분가능',
//   소셜로그인여부 = true
//   }){
//   console.log('함수기능')
//   console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부)
// }

// 함수4({
//   회원등급 : 'Silver',
//   소셜로그인여부: true
// })

///////초깃값 설정2///////
// function 함수4({
//   회원등급: 'Gold', // 안되는 이유? 식별자가 없음
//   글쓰기,
//   글읽기,
//   채널관리,
//   백업,
//   소셜로그인여부
//   }){
//   console.log('함수기능')
//   console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부)
//   return
// }

함수4({
  회원등급: "Silver",
  소셜로그인여부: true,
});

////// 아규먼트 없이 호출 가능 //////
function 함수({ a = 2, b = 1, c = 3 } = {}) {
  console.log(a, b, c);
  return a + b + c;
}
console.log(함수({ a: 20, b: 30, c: 10 }));
함수(); // 아규먼트 없이 호출 가능

// 설명
// O
function 함수(a = 10, b = 20, c = 30) {
  return a + b + c;
}
함수();

// X
function 함수({ a = 10, b = 20, c = 30 }) {
  return a + b + c;
}
함수();

// O
function 함수({ a = 10, b = 20, c = 30 }) {
  return a + b + c;
}
함수({}); // 이 코드를 축소한 코드가 위의 코드입니다.

// 함수에서 받는 부분         // 아규먼트를 전달해주는 부분
// let {one = 1, two = 2} = {one:100}
// let {one = 1, two = 2} = {}  // 이 방식이 간소화된 것입니다.
// let {a=10, b=20, c=30} = undefined

// rest 문법
function 함수2(a, b, ...c) {
  console.log(c);
  return Math.max(...c);
}

함수2("hello", "world", 10, 20, 30, 40);

function 함수2([a, b], ...c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

함수2([1, 2], 10, 20, 30, 40);

// 매개변수의 초기화
function 함수3(a = 10, b = 20, c = 30) {
  return a + b + c;
}

console.log(함수3());
console.log(함수3(100));
console.log(함수3(100, 200));
console.log(함수3(100, 200, 300));

console.log(함수3((c = 1000))); // 1050

console.log(함수3((c = 1000), (a = 2000))); // 3030

// 함수 3의 a, b, c와 console.log에 들어있는 a,c는 다른 것.
// 매개변수와 변수의 차이를 알아야 함.
// 함수에 들어간 인자는 매개변수, console.log에 있는 c는 새로운 변수를 선언해서 1000을 할당한 것. a도 마찬가지
