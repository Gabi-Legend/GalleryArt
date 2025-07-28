import Main from "./components/Main/Main";
import CreateArt from "./components/CreateArt/CreateArt";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main />} path="/"></Route>
        <Route element={<CreateArt />} path="/artwork"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
