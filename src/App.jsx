import Main from "./components/Main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main />} path="/"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
