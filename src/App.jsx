import Layout from './components/Layout/Layout';  
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';


function App() {
  return (
    <BrowserRouter basename='/wallhaven/'>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/latest" element={<h2>letest</h2>} />
          <Route path="/toplist" element={<h2>toplist</h2>} />
          <Route path="/hot" element={<h2>hot</h2>} />
          <Route path="/random" element={<h2>random</h2>} />
          <Route path="/lovely" element={<h2>lovely</h2>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App
