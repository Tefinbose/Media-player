import axios from "axios";

export const commonApi = async (httpMethod, url, reqBody) => {
  const reqConfig = {
    method: httpMethod,
    url,
    data: reqBody,
    headers: { "Content-Type": "application/json" }, //There's no uploaded content here
  };

  return await axios(reqConfig)
    .then((res) => {
      return res;  
    })
    .catch((err) => {
      return err.message;      // reject
    });
};
