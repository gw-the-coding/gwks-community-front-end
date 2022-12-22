import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {StorageUtil} from "../../config/StorageUtil";
import {axiosKakaoLogin} from "../../config/AxiosConfig";
import {getLoginInfo, getUserInfo} from "../../api/LoginApi";

export default function KakaoLoginRedirectionPage (props: any) {
  const navigate = useNavigate();
  useEffect(() => {
    const doTokenValidate = async () => {

      const userSysId = new URL(window.location.href).searchParams.get("userSysId");
      const userData = await getUserInfo(userSysId);
      //
      if (userData.state.code === 'BEFORE_SIGN') {
        navigate(`/join/?userSysId=${userSysId}&email=${userData.email}`)
        return;
      } else {
        StorageUtil.local.setItem("accessToken", userData.accessToken);
        StorageUtil.local.setItem("userSysId", userData.userSysId);
        StorageUtil.local.setItem("state", JSON.stringify(userData.state));
        StorageUtil.local.setItem("userName",userData.name);
        StorageUtil.local.setItem("userData", JSON.stringify(userData));
        StorageUtil.local.setItem("level",JSON.stringify(userData.authority));
        navigate("/");
      }
    };
    doTokenValidate();
  }, []);

  return (
    <>
      로그인성공!
    </>
  );
}
