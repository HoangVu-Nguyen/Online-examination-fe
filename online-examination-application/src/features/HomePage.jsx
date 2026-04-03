import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {

    useEffect(() => {
        document.title = "Online Exam System";
    }, []);

    return (
        <div className="home">

            {/* HERO */}
            <section className="hero">
                <h1>Hệ thống thi online</h1>
                <p>
                    Luyện thi và kiểm tra kiến thức mọi lúc, mọi nơi
                </p>

                <Link to="/login" className="btn-primary">
                    Bắt đầu ngay
                </Link>
            </section>

            {/* FEATURES */}
            <section className="features">
                <h2>Tính năng nổi bật</h2>

                <div className="feature-list">

                    <div className="feature-card">
                        <h3>📝 Làm bài thi</h3>
                        <p>Làm bài thi online nhanh chóng</p>
                    </div>

                    <div className="feature-card">
                        <h3>⏱️ Tính giờ</h3>
                        <p>Giới hạn thời gian giống thi thật</p>
                    </div>

                    <div className="feature-card">
                        <h3>📊 Kết quả</h3>
                        <p>Xem điểm ngay sau khi nộp bài</p>
                    </div>

                </div>
            </section>

            {/* EXAMS */}
            <section className="exams">
                <h2>Đề thi phổ biến</h2>

                <div className="exam-list">
                    {[1,2,3,4].map((item) => (
                        <div key={item} className="exam-card">
                            <h3>Đề thi #{item}</h3>
                            <p>Môn: Toán</p>

                            <Link to="/login">Làm bài</Link>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}