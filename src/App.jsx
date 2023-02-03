import { PageHome } from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

import { PageLogin } from './pages/Login';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<PageLogin />} />
          <Route path="/home" element={<PageHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
