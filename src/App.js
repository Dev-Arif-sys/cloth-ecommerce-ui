import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/dashboard' element={<Dashboard></Dashboard>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
