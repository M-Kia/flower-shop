import Cookies from "js-cookie";
import axios from "axios";

export async function apiHandler(
  functionName: string,
  data: { [key: string]: string },
  method: "post" | "get" | "patch" | "delete" = "post"
) {
  let headers: { [key: string]: string } = {};
  let token = Cookies.get("token");
  if (typeof token !== "undefined") {
    headers = { Authorization: `hmh ${token}` };
  }

  if (method.toLowerCase() === "get") {
    return axios.get(`/api/${functionName}`, {
      params: data,
      headers,
    });
  }
  if (method.toLowerCase() === "delete") {
    return axios.delete(`/api/${functionName}`, {
      headers,
      data,
    });
  }
  return axios[method](`/api/${functionName}`, data, {
    headers,
  });
}
