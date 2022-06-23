import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './view/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route index element={<Home />} />
        {/* <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} /> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
