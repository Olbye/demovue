import service from "../utils/request";

// get请求 查询所有用户
export const getUsers = () => {
  return service.request({
    url: "/user",
    method: "get",
    params: {}
  });
};
// 根据id查询
export const getUserById = id => {
  return service.request({
    url: `/user/${id}`,
    method: "get",
    params: {}
  });
};
// 根据条件查询
export const getUser = params => {
  return service.request({
    url: "/user",
    method: "get",
    params: params
  });
};
// add
export const addUser = data => {
  return service.request({
    url: "/user",
    method: "post",
    data: data
  });
};
// update
export const updateUser = data => {
  return service.request({
    url: "/user",
    method: "put",
    data: data
  });
};
// 根据id删除
export const deleteUser = id => {
  return service.request({
    url: `/user/${id}`,
    method: "delete",
    params: {}
  });
};
// 批量删除
export const deleteUsers = ids => {
  return service.request({
    url: "/user",
    method: "delete",
    params: {
      ids: ids
    }
  });
};