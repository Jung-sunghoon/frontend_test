// import { useState } from "react";

// function App() {
//   const [message, setMessage] = useState("hello world");

//   const handleOnMouseEnter = () => {
//     setMessage("안녕하세요~");
//   };

//   const handleOnMouseLeave = () => {
//     setMessage("안녕히가세요~");
//   };

//   return (
//     <div onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
//       {message}
//     </div>
//   );
// }
// export default App;

import { useState } from "react";
import Login from "./components/Login";
import Homepage from "./components/Homepage";

function App() {
  const [isLogined, setIsLogined] = useState(false);

  const user = {
    idUser: "jaehyun@weniv.com",
    pwUser: "1234",
  };

  return (
    <>
      {isLogined ? (
        <Homepage />
      ) : (
        <Login userInfo={user} isLogin={setIsLogined} />
      )}
    </>
  );
}

export default App;
