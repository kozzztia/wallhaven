import Layout from './components/Layout/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from './pages/Page/Page';
import links from './consts';
import Home from './pages/Home/Home';


function App() {
  return (
    <BrowserRouter basename='/wallhaven/'>
      <Layout>
        <Routes>
          {links.map(link => {
            if (link.href === "/") {
              return <Route key={link.id} path={link.href} element={<Home />} />
            }
            return <Route key={link.id} path={link.href} element={<Page />} />
          })}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App
