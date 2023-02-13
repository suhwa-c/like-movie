import axios from "axios";

const KMDB_API_KEY = "VGIK9V4C0JW0U7CZRYP4";

// open api 요청 url
const useOpenApiUrls = [
  "https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2",
];

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
    if (useOpenApiUrls.includes(config.url)) {
      console.log("config", config, config.url);
      config.headers["Authorization"] = KMDB_API_KEY;
    }
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
