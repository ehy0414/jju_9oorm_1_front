import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginHandeler from './modules/login/LoginHandeler';
import LoginPage from './page/LoginPage';
import HomePage from './page/HomePage';
import ClassPage from './page/ClassPage';
import ClassDetailPage from './page/ClassDetailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 첫 화면 로그인 화면 */}
        <Route path='/' element={<LoginPage/>} />

        {/* 홈페이지 */}
        <Route path='/home' element={<HomePage/>} />

        {/* 클래스 페이지 */}
        <Route path='/class' element={<ClassPage/>} />

        {/* 클래스 상세페이지 */}
        <Route path='/classDetail' element={<ClassDetailPage/>} />

        <Route
          path="/auth/kakao/callback" //redirect_url
          element={<LoginHandeler />} //당신이 redirect_url에 맞춰 꾸밀 컴포넌트
        />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
