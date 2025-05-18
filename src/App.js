import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TestPage from './page/TestPage';
import LoginHandeler from './login/LoginHandeler';
import LoginPage from './page/LoginPage';
import HomePage from './page/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 첫 화면 로그인 화면 */}
        <Route path='/' element={<LoginPage/>} />

        {/* 홈페이지 */}
        <Route path='/home' element={<HomePage/>} />

        <Route
          path="/auth/kakao/callback" //redirect_url
          element={<LoginHandeler />} //당신이 redirect_url에 맞춰 꾸밀 컴포넌트
        />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
