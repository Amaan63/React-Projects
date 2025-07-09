import Header from "./component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddHabbit from "./pages/AddHabbit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddHabbit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
