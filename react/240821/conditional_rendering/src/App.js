import { useState } from "react";
import SimpleRouter from "./components/SimpleRouter";

const App = () => {
  const [role, setRole] = useState("guest");
  const [loading, setLoading] = useState(true);

  const roles = ["admin", "user", "guest"];

  // 로딩 상태를 2초 후에 false로 설정하여 로딩 완료를 시뮬레이션
  setTimeout(() => {
    const randomRole = roles[Math.floor(Math.random() * roles.length)];
    setRole(randomRole);
    setLoading(false);
  }, 2000); // 2초간 로딩 상태 유지

  return (
    <div>
      <SimpleRouter role={role} isLoading={loading} />
    </div>
  );
};

export default App;
