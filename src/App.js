import { Home } from './components/Pages/Home/Home';
import { AboutUS } from './components/Pages/AboutUS/AboutUS';
import { ContactUS } from './components/Pages/ContactUS/ContactUS';
import { NotFound } from './components/Pages/NotFound/NotFound';
import { Header } from './components/Layouts/Header/Header';


import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUS" element={<AboutUS />} />
        <Route path="/contactUS" element={<ContactUS />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>    
  );
}

export default App;
