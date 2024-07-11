// 반복문 퀴즈

// 1. 1부터 100까지 짝수의 합을 구하는 반복문 코드
let result = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    result += i;
  }
  console.log(result);
}

// 2. 반의 평균을 구하는 반복문 코드 (reduce 사용 X)
const score = [84, 92, 39, 55, 71];

let sum = 0;
let avg = 0;
for (let i = 0; i < score.length; i++) {
  sum += score[i];
}
avg = sum / score.length;
console.log(avg);
