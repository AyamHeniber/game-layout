import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './global.css';
import Homepage from './component/Homepage';
import LiveCasino from './component/LiveCasino';
import Slot from './component/Slot';
import Layout from './component/layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><LiveCasino /></Layout>} />
        <Route path="/all-games/slots" element={<Layout><Slot /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
