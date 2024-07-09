import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import styles from "./App.module.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className={styles.gradient}>
          <div className="container">
            <Routes>
              <Route exact path="/medcenter" element={<Home />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
