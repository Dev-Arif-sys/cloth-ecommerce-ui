import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeUi from './Components/HOME/HomeUi/HomeUi';
import Appbar from './Components/SHARED/Appbar/Appbar';
import CheckOut from './pages/CheckOut/CheckOut';
import Dashboard from './pages/dashboard/Dashboard';



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
        <Route path='/checkout' element={<CheckOut></CheckOut>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
