import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TestPage from './page/TestPage';
import LoginHandeler from './login/LoginHandeler';
import LoginPage from './page/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route
          path="/auth/kakao/callback" //redirect_url
          element={<LoginHandeler />} //당신이 redirect_url에 맞춰 꾸밀 컴포넌트
        />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
