import './App.css';
import Header from './components/header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacts from './components/contacts/Contacts';
import Gallery from './components/gallery/Gallery';
import Press from './components/press/Press';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route index element={<Home></Home>} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/press' element={<Press />} />
        </Routes>

        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
