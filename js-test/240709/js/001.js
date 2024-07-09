// 숫자형 메서드
console.log("---parseInt---");

// 문자열 데이터 => 숫자형
console.log(parseInt("36"));
console.log(typeof parseInt("36"));
console.log(parseInt("36px"));
console.log(parseInt("12.5px"));
console.log(parseInt("width: 25px")); // NaN

// 실수형
console.log("---parseFloat---");
console.log(parseFloat("12.5px"));
console.log(parseFloat("12.5.6px"));
console.log(parseFloat("12.345.6px"));

console.log("---isNaN---");
console.log(isNaN(23));
console.log(isNaN(undefined));
console.log(isNaN("12345"));
console.log(isNaN("hello"));
// isNaN은 자동으로 숫자를 변환

console.log("---Number.isNaN---");
console.log(Number.isNaN(23));
console.log(Number.isNaN(undefined));
console.log(Number.isNaN("2345"));
console.log(Number.isNaN("hello"));
console.log(Number.isNaN(NaN));
console.log(Number.isNaN("hello" * 3));
// Number.isNaN은 형변환 X. 숫자형 NaN일 경우에만 true를 반환

console.log("---toFixed---");
const pi = 3.1415926;
console.log(pi.toFixed(2));
console.log(pi.toFixed(10));
console.log(typeof pi.toFixed(10));
console.log(pi.toFixed());
// 결과는 문자형
