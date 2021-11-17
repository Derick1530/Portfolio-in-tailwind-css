import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Home';

import Covid from './components/Home/__modules__/categories/Covid19';
import AllCategories from "./components/Home/__modules__/categories/AllCategories"
import BBCnews from './components/Home/__modules__/categories/BBC_news';
import TechCrunch from './components/Home/__modules__/categories/TechCrunch';
import Navbar from './components/Home/__modules__/navbar';
import SearchData from './components/Home/__modules__/SearchData';
import topHeadLines from './components/Home/__modules__/categories/topHeadLines';
import Footer from './components/Home/__modules__/Footer';

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
      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
