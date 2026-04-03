import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {

    useEffect(() => {
        document.title = "Online Exam System";
    }, []);

    return (
        <div className="py-2 px-4 md:px-16 lg:px-24">

            {/* Hero Section */}
            <div className="container mx-auto py-12 text-center">
                <h1 className="text-4xl font-bold mb-4 text-title">
                    Hệ thống thi online
                </h1>
                <p className="text-gray-600 mb-6">
                    Nền tảng luyện thi và kiểm tra kiến thức dành cho học sinh
                </p>

                <Link
                    to="/exams"
                    className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
                >
                    Bắt đầu thi ngay
                </Link>
            </div>

            {/* Features Section */}
            <div className="container mx-auto py-12">
                <h2 className="text-2xl font-bold mb-6 text-center">
                    Tính năng nổi bật
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                    <div className="p-6 shadow rounded-lg text-center">
                        <h3 className="font-semibold text-lg mb-2">
                            📝 Làm bài thi online
                        </h3>
                        <p className="text-gray-600">
                            Làm bài thi mọi lúc, mọi nơi
                        </p>
                    </div>

                    <div className="p-6 shadow rounded-lg text-center">
                        <h3 className="font-semibold text-lg mb-2">
                            ⏱️ Chấm điểm tự động
                        </h3>
                        <p className="text-gray-600">
                            Kết quả hiển thị ngay sau khi nộp bài
                        </p>
                    </div>

                    <div className="p-6 shadow rounded-lg text-center">
                        <h3 className="font-semibold text-lg mb-2">
                            📊 Theo dõi tiến độ
                        </h3>
                        <p className="text-gray-600">
                            Xem lại lịch sử và cải thiện điểm số
                        </p>
                    </div>

                </div>
            </div>

            {/* Exam List Preview */}
            <div className="container mx-auto py-12">
                <h2 className="text-2xl font-bold mb-6 text-center">
                    Bài thi phổ biến
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

                    {[1,2,3,4,5].map((item) => (
                        <div key={item} className="p-4 border rounded-lg shadow hover:shadow-lg transition">
                            <h3 className="font-semibold mb-2">
                                Đề thi #{item}
                            </h3>
                            <p className="text-sm text-gray-500 mb-3">
                                Môn: Toán
                            </p>
                            <Link
                                to={`/exam/${item}`}
                                className="text-blue-500 hover:underline"
                            >
                                Làm bài
                            </Link>
                        </div>
                    ))}

                </div>
            </div>

        </div>
    );
}