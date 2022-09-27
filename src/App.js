import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Appointment />} path="/appointment"></Route>
          <Route element={<Home />} path="/"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
