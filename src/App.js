import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Auth from "./components/Auth";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<Auth />}></Route>
          <Route path="/login" element={<Auth formType="login" />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
