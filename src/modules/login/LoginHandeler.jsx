import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";

const LoginHandeler = (props) => {
    const navigate = useNavigate();
    // 인가코드 백으로 보내는 작업 하는곳
    const code = new URL(window.location.href).searchParams.get("code");
    console.log(code);

    //인가코드 백으로 보내는 코드
    useEffect(() => {
        if (!code) {
          alert("인가 코드가 존재하지 않습니다.");
          navigate("/");
          return;
        }

        const kakaoLogin = async () => {
            try {
              const res = await api.get(`/auth/kakao/callback?code=${code}`, {
                headers: {
                  "Content-Type": "application/json; charset=utf-8",
                }, 
              //withCredentials: true,
              });
              console.log(res.data);
              // accessToken과 refreshToken을 응답에서 추출
              const { accessToken, refreshToken } = res.data;

              // 로컬 스토리지에 저장
              localStorage.setItem("accessToken", accessToken);
              //아직 안됨
              //localStorage.setItem("refreshToken", refreshToken);
              navigate("/home");
            } catch (err) {
              console.error("로그인 실패", err);
              alert('로그인 처리 중 오류가 발생했습니다. 재시도해주세요.');
            }
          };
        
          kakaoLogin();
    }, []);
    
      return (
        <div className="LoginHandeler">
          <div className="notice">
            <p>로그인 중입니다.</p>
            <p>잠시만 기다려주세요.</p>
            <div className="spinner"></div>
          </div>
        </div>
      );
    };
    
export default LoginHandeler;