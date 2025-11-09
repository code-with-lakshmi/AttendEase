import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleDemoLogin = (role) => {
    if (role === 'student') {
      setEmail('studentdemo@gmail.com');
      setPassword('123456');
    } else if (role === 'teacher') {
      setEmail('teacherdemo@gmail.com');
      setPassword('123456');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email === 'studentdemo@gmail.com' && password === '123456') {
      navigate('/student-dashboard');
    } else if (email === 'teacherdemo@gmail.com' && password === '123456') {
      console.log('Teacher login detected - redirect to teacher dashboard will be implemented');
      // navigate('/teacher-dashboard');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-center mb-6">
        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow">
          <span className="text-2xl">🎓</span>
        </div>
        <h1 className="text-3xl font-bold mt-4">AttendEase</h1>
        <p className="text-gray-600 text-sm">Smart Attendance & OD Management</p>
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-8 w-[380px]">
        <h2 className="text-center text-xl font-semibold mb-2">Welcome Back</h2>
        <p className="text-center text-gray-500 text-sm mb-6">Sign in to your account to continue</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full border rounded-md p-2 mt-1"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full border rounded-md p-2 mt-1"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center text-gray-400 text-sm">DEMO ACCOUNTS</div>

        <div className="flex justify-between mt-3 gap-4">
          <button 
            onClick={() => handleDemoLogin('student')}
            className="w-1/2 border py-2 rounded-md hover:bg-gray-100 transition"
          >
            Student Demo
          </button>
          <button 
            onClick={() => handleDemoLogin('teacher')}
            className="w-1/2 border py-2 rounded-md hover:bg-gray-100 transition"
          >
            Teacher Demo
          </button>
        </div>
      </div>
    </div>
  );
}