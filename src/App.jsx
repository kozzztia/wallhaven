import Layout from './components/Layout/Layout';  
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from './pages/Page/Page';
import links from './consts';


function App() {
  return (
    <BrowserRouter basename='/wallhaven/'>
      <Layout>
        <Routes>
        {links.map(link => (
            <Route key={link.id} path={link.href} element={<Page />} />
          ))}
          <Route path="/lovely" element={<h2>lovely</h2>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App
