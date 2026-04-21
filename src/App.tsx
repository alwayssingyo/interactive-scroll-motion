import "./App.scss";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/home";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
