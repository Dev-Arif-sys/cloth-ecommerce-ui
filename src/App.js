import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import HomeUi from './Components/HOME/HomeUi/HomeUi';
import Appbar from './Components/Shared/Appbar/Appbar';

function App() {
  return (
    <BrowserRouter>
      <Appbar></Appbar>
      {/* <HomeUi></HomeUi> */}
      <Routes>
        {/* <Route exact path="/">
          <HomeUi></HomeUi>
        </Route> */}
        {/* <Route path="/homeUi">
          <HomeUi></HomeUi>
        </Route> */}
        <Route path='/' element={<HomeUi />} />

        <Route path='/home' element={<HomeUi />} />
        <Route path='/dashboard' element={<Dashboard></Dashboard>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
