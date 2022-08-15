import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Signup from './Components/Signup/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacts from './Components/Contact/Contacts';
import About from './Components/About/About';
import NoPage from './Components/NoPage/NoPage';
import purple from './Assets/images/blue-car.jpg'
import BackgroundImg from './Components/Background/BackgroundImg';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="signup" element={<Signup />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contacts />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
