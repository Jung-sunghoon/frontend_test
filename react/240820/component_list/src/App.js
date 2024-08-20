// function App() {
//   return <Hello name="licat" />;
// }

// function Hello(props) {
//   const name = props.name;

//   return (
//     <div>
//       {/* <h1>안녕, {name} 1호</h1>
//       <h1>안녕, {name} 2호</h1>
//       <h1>안녕, {name} 3호</h1>
//       <h1>안녕, {name} 4호</h1>
//       <h1>안녕, {name} 5호</h1>
//       <h1>안녕, {name} 6호</h1>
//       <h1>안녕, {name} 7호</h1>
//       <h1>안녕, {name} 8호</h1>
//       <h1>안녕, {name} 9호</h1>
//       <h1>안녕, {name} 10호</h1> */}
//     </div>
//   );
// }

// export default App;

// function App() {
//   return <Hello name="licat" />;
// }

// function Hello(props) {
//   const name = props.name;
//   const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //1~10호를 만들 것입니다.

//   return (
//     <div>
//       {nums.map((i, index) => (
//         <h1 key={index}>
//           안녕, {name} {i}호
//         </h1>
//       ))}
//     </div>
//   );
// }

// export default App;

import React from "react";
// import Counter from "./Counter";
import NavBar from "./NavBar";

export default function App() {
  return <NavBar />;
  // <Counter />;
}
