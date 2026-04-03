import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './features/auth/pages/LoginPage';
import RegisterPage from './features/auth/pages/RegisterPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Tạm thời chuyển hướng trang chủ về trang login */}
        <Route path="/" element={<Navigate to="/login" />} />
        
        {/* Các trang Auth */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;