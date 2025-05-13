import axios from "axios";

const api = axios.create({
    // spring server url
    baseURL: "http://localhost:8080/"
})

// 요청 전에 토큰을 자동으로 헤더에 추가
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

export default api ;