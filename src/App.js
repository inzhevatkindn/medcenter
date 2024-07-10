import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contacts/Contact";
import styles from "./App.module.scss";

function App() {
  return (
    <Router basename="/medcenter">
      <div className="App">
        <Header />
        <div className={styles.gradient}>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contacts" element={<Contact />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
