import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './pages/signup/SignUp';
import Login from './pages/login/Login';
import VerificationPage from './pages/verification/VerificationPage';
import ForgetPasswordPage from './pages/forgetPassword/ForgetPasswordPage';
import ForgetPasswordVerifyPage from './pages/forgetPasswordVerify/ForgetPasswordVerifyPage';
import ChangePasswordPage from './pages/changePassword/ChangePasswordPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-email" element={<VerificationPage />} />
        <Route path="/forget-password" element={<ForgetPasswordPage />} />
        <Route path="/forget-password-verify" element={<ForgetPasswordVerifyPage />} />
        <Route path="/change-password" element={<ChangePasswordPage />} />
      </Routes>
    </Router>
  );
}

export default App;
