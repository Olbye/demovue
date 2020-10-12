import service from "../utils/request";

// get请求
export const getUser = () => {
  return service.request({
    url: "user",
    method: "get",
    params: {}
  });
};
