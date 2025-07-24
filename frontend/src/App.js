import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './media.css';
import { Home } from './pages/web/pages/Home';
import { AdminLogin } from './pages/admin/auth/AdminLogin';
import { Dashboard } from './pages/admin/pages/Dashboard';
import { AdminPrivate } from './pages/admin/auth/AdminPrivate';
import { DashHome } from './pages/admin/pages/DashHome';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/admin-login' element={<AdminLogin />} />
          <Route element={<AdminPrivate />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/dash-home' element={<DashHome />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
