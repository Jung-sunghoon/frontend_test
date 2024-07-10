// 객체 메서드

// 객체 프로퍼티 키, 밸류 , 키 밸류 쌍
const user1 = {
  name: "hati",
  job: "fe",
  sayHello: function () {
    console.log("Hello world!");
  },
};

console.log(Object.keys(user1)); // key 배열 반환
console.log(Object.values(user1)); // value 배열 반환
console.log(Object.entries(user1)); // 프로퍼티([키, 밸류]) 쌍을 배열로 반환

console.log("--- hasOwnProperty ---");
// in 과 같은 역할을 합니다.
// 객체의 프로퍼티 키가 있는지 없는지를 판별
console.log(user1.hasOwnProperty("name"));
console.log(user1.hasOwnProperty("company"));
// hasOwnProperty : 상속받은 프로퍼티는 찾지 못합니다.

console.log("--- for in ---");
for (const elem in user1) {
  // 프로퍼티의 키값들을 순회한다
  console.log(elem, user1[elem]);
}
