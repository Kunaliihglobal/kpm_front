import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreateItem from "./pages/CreateItem";
import EditItem from "./pages/EditItem";
import axios from "axios";

setInterval(() => {
  axios.get('https://kpm-front.onrender.com/')
  console.log("self ping")
}, 30000);

const App = () => (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateItem />} />
            <Route path="/edit/:id" element={<EditItem />} />
        </Routes>
    </Router>
);

export default App;
