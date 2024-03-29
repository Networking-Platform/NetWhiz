import FirstLesson from "./FirstLesson";
import SecondLesson from "./SecondLesson";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/firstlesson" />}></Route>
          <Route path="firstlesson" element={<FirstLesson />}></Route>
          <Route path="secondlesson" element={<SecondLesson />}></Route>
          <Route path="*" element={<NoMatch />}></Route>

          <Route></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

function NoMatch() {
  return <div>NoMatch</div>;
}
