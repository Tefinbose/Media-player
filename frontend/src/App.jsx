import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Watchhistory from "./pages/Watchhistory";

function App() {
  return (
    <>
      <Header />

      {/* <FontAwesomeIcon icon={faHouse} /> */}

      {/* Wrap inside the Routes */}
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="watchhistory" element={<Watchhistory />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
