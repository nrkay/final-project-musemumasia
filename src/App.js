import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {Routes, Route} from "react-router-dom"
import Collection from './pages/Collection';
import Faq from './pages/Faq';
import InputData from './pages/InputData';
import Barang from './pages/Barang';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />}/>
        <Route path='/' element={<HomePage />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/collection' element={<Barang/>} >
          <Route index element={<Collection/>} />
          <Route path="inputdata" element={<InputData />} />
        </Route>
        <Route path='/faq' element={<Faq />} />
      </Routes>
    </div>
  );
}

export default App;
