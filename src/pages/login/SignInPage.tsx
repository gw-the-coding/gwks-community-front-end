import {useNavigate} from "react-router-dom";

export default function SignInPage(props: any) {
  const navigate = useNavigate();
  const loginWithKakao = () => {
    navigate("/login/kakao");
  }
  return (
    <>
      <main>
        <a id="custom-login-btn" onClick={loginWithKakao}>
          <img src="//k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" alt="카카오 로그인 버튼"/>
        </a>
      </main>
    </>
  );
}
