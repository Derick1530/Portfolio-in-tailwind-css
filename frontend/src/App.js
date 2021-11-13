import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Post from './app/initials/Post';
import Homepage from './components/Home';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
