import {useEffect} from "react";

export default function KakaoLoginPage (props: any) {
  useEffect(() => {
    const oauth = async () => {
      const redirectionUrl = `${process.env.REACT_APP_OAUTH_URL}/api/v1/accounts/kakao/`;
      window.location.replace(`https://kauth.kakao.com/oauth/authorize?client_id=7b512bfbe3a9c4c39baf19fd2984f20d&redirect_uri=${redirectionUrl}&response_type=code`)
    };
    oauth();
  }, []);
  return (
    <>
      <div></div>
    </>
  )
}
