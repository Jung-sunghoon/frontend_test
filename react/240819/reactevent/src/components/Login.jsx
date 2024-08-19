import { useState } from "react";

function Login({ userInfo, isLogin }) {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("submit");

    if (!id) {
      alert("아이디를 입력하지 않았습니다.");
      return;
    }

    if (!pw) {
      alert("비밀번호를 입력하지 않았습니다.");
      return;
    }

    if (id !== userInfo.idUser) {
      alert("아이디가 일치하지 않습니다.");
      return;
    } else if (pw !== userInfo.pwUser) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    } else {
      isLogin(true);
    }
  };

  const handleLoginInput = (e) => {
    console.log("id", e.target.value);
    setId(e.target.value);
  };

  const handlePasswordInput = (e) => {
    console.log("pw", e.target.value);
    setPw(e.target.value);
  };

  return (
    <form onSubmit={handleLoginSubmit}>
      <label>
        아이디 :
        <input type="text" onChange={handleLoginInput} value={id} />
      </label>
      <br />
      <label>
        비밀번호 :
        <input type="password" onChange={handlePasswordInput} value={pw} />
      </label>
      <button type="submit">로그인</button>
    </form>
  );
}

export default Login;
