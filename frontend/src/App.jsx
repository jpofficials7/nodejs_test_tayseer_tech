import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Record from './Record';
import Error from './Error';
import { Header } from './components/Header';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/record" element={<Record />} />
          <Route path="*" element={<Error />} />
          <Route />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
