import { useState } from 'react';

export default function LoginPage() {
  // State quản lý tab vai trò: 'student' (Học sinh) hoặc 'teacher' (Giáo viên)
  const [role, setRole] = useState('student');

  const handleLogin = (e) => {
    e.preventDefault();
    // Xử lý logic gọi API đăng nhập tại đây
    console.log(`Đăng nhập với vai trò: ${role}`);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* CỘT TRÁI: Phần Banner/Branding (Ẩn trên mobile, hiện trên màn hình lớn) */}
      <div className="hidden lg:flex lg:w-1/2 bg-blue-600 items-center justify-center relative overflow-hidden">
        {/* Lớp phủ background trang trí */}
        <div className="absolute inset-0 bg-blue-700 opacity-20 transform -skew-x-12 scale-150"></div>
        
        <div className="relative z-10 text-center px-12 text-white">
          <h1 className="text-4xl font-bold mb-4">Hệ Thống Thi Trực Tuyến</h1>
          <p className="text-lg text-blue-100">
            Nền tảng quản lý học tập, giao bài và tổ chức thi tiện lợi, minh bạch.
          </p>
          {/* Bạn có thể chèn file hero.png từ thư mục assets vào đây */}
          <div className="mt-8">
            <img 
              src="/src/assets/hero.png" 
              alt="Education Illustration" 
              className="max-w-md mx-auto drop-shadow-2xl rounded-lg bg-white/10 p-4"
              onError={(e) => e.target.style.display = 'none'} // Ẩn nếu chưa có ảnh
            />
          </div>
        </div>
      </div>

      {/* CỘT PHẢI: Form Đăng nhập */}
      <div className="flex w-full lg:w-1/2 items-center justify-center p-8 sm:p-12">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl lg:shadow-none lg:p-0">
          
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Xin chào! 👋</h2>
            <p className="text-gray-500 mt-2">Vui lòng đăng nhập để tiếp tục</p>
          </div>

          {/* Toggle Chọn Vai Trò (Giống style Azota) */}
          <div className="flex p-1 mb-8 bg-gray-100 rounded-lg">
            <button
              onClick={() => setRole('student')}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-md transition-all duration-200 ${
                role === 'student'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              🎓 Học sinh
            </button>
            <button
              onClick={() => setRole('teacher')}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-md transition-all duration-200 ${
                role === 'teacher'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              👨‍🏫 Giáo viên
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Số điện thoại hoặc Email
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="Nhập số điện thoại / email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mật khẩu
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                <span className="ml-2 text-sm text-gray-600">Ghi nhớ đăng nhập</span>
              </label>
              <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                Quên mật khẩu?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md transition-colors duration-200"
            >
              Đăng nhập
            </button>
          </form>

          {/* Dành cho Học sinh: Đăng nhập nhanh qua Zalo/Google (Tùy chọn thường thấy ở VN) */}
          {role === 'student' && (
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Hoặc đăng nhập với</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button className="flex justify-center items-center py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Google
                </button>
                <button className="flex justify-center items-center py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-blue-600 font-semibold">
                  Zalo
                </button>
              </div>
            </div>
          )}

          <p className="mt-8 text-center text-sm text-gray-600">
            Chưa có tài khoản?{' '}
            <a href="#" className="font-semibold text-blue-600 hover:text-blue-500">
              Đăng ký ngay
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}