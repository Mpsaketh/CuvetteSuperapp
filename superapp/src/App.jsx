import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/Register';
import DashboardPage from './pages/Dashboard';
import CategoryPage from './pages/Category';
import EntertainmentPage from './pages/Entertainment';
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterPage />}></Route>
          <Route path="/category" element={<CategoryPage />}></Route>
          <Route path="/dashboard" element={<DashboardPage />}></Route>
          <Route path="/entertainment" element={<EntertainmentPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
