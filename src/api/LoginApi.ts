import {axiosGetRequest} from "../config/AxiosConfig";

export const getLoginInfo = async (code : string | null) => {

  const result = await axiosGetRequest(`/accounts/kakao`, {
    authorizationCode: code
  });
  return result.data.data;
}

export const getUserInfo = async (userSysId: any) => {
  const result = await axiosGetRequest(`/accounts/${userSysId}`);
  return result.data.data;
}
