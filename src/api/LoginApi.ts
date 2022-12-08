import {axiosGetRequest} from "../config/AxiosConfig";

export const getLoginInfo = async (code : string | null) => {

  const result = await axiosGetRequest(`/accounts/kakao`, {
    authorizationCode: code
  });
  return result.data;
}
