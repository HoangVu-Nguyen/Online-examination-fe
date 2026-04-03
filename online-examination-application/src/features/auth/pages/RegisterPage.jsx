import { useState } from 'react';
import './LoginPage.css'; // Quan trọng: Dòng này gọi file CSS ở Bước 3 vào!

export default function LoginPage() {
    const [role, setRole] = useState('student');

    const handleLogin = async (e) => {
        e.preventDefault();

        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            const res = await fetch(
                "https://unwifely-pamella-interrailway.ngrok-free.dev/api/auth/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                }
            );

            const data = await res.json();

            if (res.ok) {
                alert("Đăng nhập thành công!");
                console.log(data);
            } else {
                alert(data.message || "Lỗi đăng nhập");
            }

        } catch (error) {
            console.error(error);
            alert("Không thể kết nối server");
        }
    };

    return (
        <div className="login-container">
            {/* CỘT TRÁI */}
            <div className="login-banner">
                <div className="banner-content">
                    <h1>Hệ Thống Thi Trực Tuyến</h1>
                    <p>Nền tảng quản lý học tập, giao bài và tổ chức thi tiện lợi, minh bạch.</p>
                    <img
                        src="https://illustrations.popsy.co/blue/student-going-to-school.svg"
                        alt="Education"
                        className="banner-image"
                    />
                </div>
            </div>

            {/* CỘT PHẢI */}
            <div className="login-form-section">
                <div className="form-wrapper">
                    <div className="form-header">
                        <h2>Xin chào! 👋</h2>
                        <p>Vui lòng đăng ký để tiếp tục</p>
                    </div>

                    <div className="role-toggle">
                        <button
                            type="button"
                            onClick={() => setRole('student')}
                            className={role === 'student' ? 'active' : ''}
                        >
                            🎓 Học sinh
                        </button>
                        <button
                            type="button"
                            onClick={() => setRole('teacher')}
                            className={role === 'teacher' ? 'active' : ''}
                        >
                            👨‍🏫 Giáo viên
                        </button>
                    </div>

                    <form onSubmit={handleLogin} className="login-form">
                        <div className="input-group">
                            <label>Số điện thoại hoặc Email</label>
                            <input type="text" placeholder="Nhập số điện thoại / email" required />
                        </div>

                        <div className="input-group">
                            <label>Mật khẩu</label>
                            <input type="password" placeholder="••••••••" required />
                        </div>

                        <div className="form-options">
                            <label className="remember-me">
                            </label>
                            <a href="#" className="forgot-password">Quên mật khẩu?</a>
                        </div>

                        <button type="submit" className="btn-submit">Đăng ký</button>
                    </form>

                    {role === 'student' && (
                        <div className="social-login">
                            <div className="divider"><span>Hoặc đăng nhập với</span></div>
                            <div className="social-buttons">
                                <button type="button">Google</button>
                                <button type="button" className="btn-zalo">Zalo</button>
                            </div>
                        </div>
                    )}

                    <p className="register-link">
                        Đã có tài khoản? <a href="/login">Đăng nhập ngay</a>
                    </p>
                </div>
            </div>
        </div>
    );
}