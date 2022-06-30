import "./styles.css";

import Login from "./components/Login";
import List from "./components/List";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/home"
            element={
              <List setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
            }
          />
          <Route
            path="/"
            element={
              <Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

// isLoggedIn ? <Main /> : <Login />
