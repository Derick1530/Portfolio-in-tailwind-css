import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Home';

import Covid from './components/Home/categories/Covid19';
import AllCategories from "./components/Home/categories/AllCategories"
import BBCnews from './components/Home/categories/BBC_news';
import TechCrunch from './components/Home/categories/TechCrunch';
import Navbar from './components/Home/navbar';
import SearchData from './components/Home/__modules__/SearchData';
import topHeadLines from './components/Home/categories/topHeadLines';
import Footer from './components/Home/Footer';
import French from './components/Home/__modules__/Languages/French';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/top_headlines" element={<topHeadLines />} />
        <Route path="/search/:id" element={<SearchData />} />
        <Route path="/covid_19" element={<Covid />} />
        <Route path="/BBC_news" element={<BBCnews />} />
        <Route path="/TechCrunch" element={<TechCrunch />} />
        <Route path="/all_categories" element={<AllCategories />} />
        <Route path="/french" element={<French />} />

      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
