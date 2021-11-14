import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Post from './app/initials/Post';
import { QueryClientProvider, QueryClient } from "react-query"
import Homepage from './components/Home';
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
