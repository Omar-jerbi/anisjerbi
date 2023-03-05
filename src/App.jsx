import './App.css';
import Header from './components/header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacts from './components/contacts/Contacts';
import Gallery from './components/gallery/Gallery';
import Press from './components/press/Press';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import { initializeApp } from 'firebase/app'
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { useState } from 'react';


function App() {
  const fbConfig = {
    projectId: "anis-jerbi-art-website",
    storageBucket: "anis-jerbi-art-website.appspot.com",
    messagingSenderId: "163221941358",
  }

  const app = initializeApp(fbConfig);
  const storage = getStorage(app)
  const storageRef = ref(storage);
  const imagesRef = ref(storageRef, 'BGfooter.jpeg');

  const [x, setX] = useState('')

  getDownloadURL(imagesRef).then((url) => setX(url))

  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route exact index element={<Home />} />
          <Route exact path='/contacts' element={<Contacts />} />
          <Route exact path='/gallery' element={<Gallery test={x} />} />
          <Route exact path='/press' element={<Press />} />
        </Routes>

        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
