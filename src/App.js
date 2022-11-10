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
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import ProtectedRoute from './Pages/Login/ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<ProtectedRoute><Appointment /></ProtectedRoute>} path="/appointment"></Route>
            <Route element={<Login />} path="/login"></Route>
            <Route element={<Register />} path="/register"></Route>
            <Route element={<Home />} path="/"></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
