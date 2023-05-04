import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Calculator from './components/Calculator';
// import Quote from './components/Quotes';
// import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Books />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/*" element={<div>Page not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
