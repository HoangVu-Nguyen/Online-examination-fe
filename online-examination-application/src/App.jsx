import { Routes, Route } from "react-router-dom";

import HomePage from "./features/HomePage";
import LoginPage from "./features/auth/pages/LoginPage";
// import RegisterPage from "./features/auth/pages/RegisterPage";

function App() {
    return (
        <Routes>

            <Route path="/" element={<HomePage />} />

            {/* Auth */}
            <Route path="/login" element={<LoginPage />} />
            {/*<Route path="/register" element={<RegisterPage />} />*/}

            <Route path="/exams" element={<div>Danh sách đề thi</div>} />
            <Route path="/exam/:id" element={<div>Làm bài thi</div>} />

            <Route path="*" element={<div>404 Not Found</div>} />

        </Routes>
    );
}

export default App;