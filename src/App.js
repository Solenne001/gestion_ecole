import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/* import Header from './component/Header/Header';
 */import Navbar from './component/Navbar/Navbar';
import Annonces from './pages/Annonces';
import Chatt from './pages/Chatt';
import Notes from './pages/Notes';
import Planning from './pages/Planning';
import Financement from './pages/Financement';
import "./encapsule.css"
import Inscriptions from './component/Inscriptions/Inscriptions';
import Connexions from './component/Connexions/Connexions';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      
     
          
          <Routes>
            <Route index element={<Inscriptions/>}/>
            <Route path="/connect" element={<Connexions/>}/>
          <Route path="/" element={<Navbar />} >
          <Route path="/Annonces" element={<Annonces />} />
          <Route path="/Chat" element={<Chatt />} />
          <Route path="/Notes" element={<Notes />} />
          <Route path="/Planning" element={<Planning />} />
          <Route path="/Financement" element={<Financement />} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
