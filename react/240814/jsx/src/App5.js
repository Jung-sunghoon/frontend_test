import Licat from "./components/Licat";
import Time from "./components/Time";
import Resume from "./components/Resume";

function App5() {
  return (
    <div>
      <Licat name="gary" />
      <Time />
      <Resume
        hello="안녕하세요"
        name="개리"
        hobby="게임"
        food="고기"
        color="blue"
      />
    </div>
  );
}

export default App5;
