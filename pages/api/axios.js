import axios from "axios";

const instanse = axios.create({
  baseURL: "",
  headers: {
    Authorization: "",
  },
});

// 요청 인터셉터
instanse.interceptors.request.use(
  (config) => {
    //내용
    return config;
  },
  (error) => {
    Promise.reject(error);
    return;
  }
);

// 응답 인터셉터
instanse.interceptors.response.use(
  (response) => {
    //내용
    return response;
  },
  (error) => {
    Promise.reject(error);
    return;
  }
);

export default instanse;
