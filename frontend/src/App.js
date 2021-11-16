import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Post from './app/initials/Post';
import Homepage from './components/Home';

import Covid from './components/Home/__modules__/categories/Covid19';
import AllCategories from "./components/Home/__modules__/categories/AllCategories"
import BBCNews from './components/Home/__modules__/categories/BBC_news';
import Dm from './components/Home/__modules__/Dm';
import BBCnews from './components/Home/__modules__/categories/BBC_news';
import TechCrunch from './components/Home/__modules__/categories/TechCrunch';
import Navbar from './components/Home/__modules__/navbar';

import SearchData from './components/Home/__modules__/SearchData';
function App() {
  return (


    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/Top_headlines" element={<Post />} />
        <Route path="/search/:id" element={<SearchData />} />
        {/* <Route path="" element={<BBCNews />} /> */}
        <Route path="/covid_19" element={<Covid />} />
        <Route path="/BBC_news" element={<BBCnews />} />
        <Route path="/TechCrunch" element={<TechCrunch />} />
        <Route path="/dm" element={<Dm />} />
        <Route path="/all_categories" element={<AllCategories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
