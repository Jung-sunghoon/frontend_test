// 생성자
const me = {
  name: "한재현",
  address: "제주도 제주시 인다 1길",
  phoneNum: "010-8000-0000",
  canWalk: function () {
    console.log("재현이가 걷는다.");
  },
  teaching: function (student) {
    student.levelUp();
  },
};

const lion = {
  level: 1,
  levelUp: function () {
    this.level++;
  },
};

me.teaching(lion);

let myArr = new Array(1, 2, 3);
let myArr2 = new Array(4, 5, 6);

myArr2.length;
myArr.length;

myArr.forEach((item) => {
  console.log(item);
});

myArr2.forEach((item) => {
  console.log(item);
});

// const me = {
//   name: "정성훈",
//   age: 26,
//   mbti: "ISTP",
//   gamePlay: function (gameName) {
//     gameName.plusPlayTime();
//   },
// };

// const lol = {
//   playTime: 0,
//   plusPlayTime: function () {
//     this.playTime++;
//   },
// };

// const overWatch = {
//   playTime: 100,
//   plusPlayTime: function () {
//     this.playTime++;
//   },
// };

// me.gamePlay(lol);
// me.gamePlay(overWatch);
// console.log(lol);
// console.log(overWatch);

// function Robot(name) {
//   this.name = name;
//   this.sayYourName = function () {
//     console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
//   };
// }

// let robot1 = new Robot("브랜든");

// 프로토타입
// function NewFactory2(name) {
//   this.name = name;
// }

// NewFactory2.prototype.sayYourName = function () {
//   console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
// };

// 음식을 랜덤으로 뽑는 로봇 객체 생성자
function Robot(food) {
  this.food = food;
}

Robot.prototype.randomFood = function () {
  // 랜덤 인덱스 뽑기
  const randomIdx = Math.floor(Math.random() * this.food.length);
  // 배열에서 랜덤으로 나온 인덱스의 음식을 선택하기
  const selectedFood = this.food[randomIdx];
  // 음식 출력
  console.log(`오늘 메뉴는 ${selectedFood}입니다. 주인님.`);
};

// 음식 배열 생성
const foods = ["부대찌개", "김치찌개", "된장찌개", "순두부찌개", "청국장찌개"];
// 생성자 함수로 myRobot 인스턴스 생성
const myRobot = new Robot(foods);

// 함수 호출
myRobot.randomFood();

// 객체 상속
// function Parent() {
//   this.name = '재현';
// }
// Parent.prototype.rename = function (name) {
//   this.name = name;
// }
// Parent.prototype.sayName = function () {
//   console.log(this.name);
// }

// function Child() {
//   Parent.call(this);
// }

// Child.prototype = Object.create(Parent.prototype); // 지정된 프로토타입 객체를 갖는 새 객체를 만듭니다.

// Child.prototype.canWalk = function () {
//   console.log('now i can walk!!');
// }
