import { Navbar } from "./components/NavBar/Navbar";
import Shopping from "./components/Shopping/Shopping";
import { BrowserRouter , Route, Routes} from "react-router-dom";
import About from "./components/About/About";
import Card from "./components/Shopping/AddCart/Card";
import CardForm from "./components/Shopping/AddCart/CardForm";
import SignUp from "./components/Shopping/Authentication/SignUp";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navbar />} />
            <Route path="/shopping" element={<Shopping />} />
            <Route path="/about" element={<About />} />
            <Route path="/card" element={<Card />} />
            <Route path="/FormCard" element={<CardForm />} />
            <Route path="/signup" element={<SignUp />} />


        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
