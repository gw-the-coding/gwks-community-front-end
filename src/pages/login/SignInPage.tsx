import {useNavigate} from "react-router-dom";
import Header from "../layouts/Header";
import TopMenu from "../layouts/TopMenu";

export default function SignInPage(props: any) {
  const navigate = useNavigate();
  const loginWithKakao = () => {
    navigate("/login/kakao");
  }
  return (
    <>
      <Header />
      <TopMenu />
      <main className="container">
        <div className="my-3 p-3 bg-body rounded shadow-sm">
          <h3 className="border-bottom pb-3 mb-0">로그인</h3>
          <div className={"mt-4"}>
            <a id="custom-login-btn" onClick={loginWithKakao}>
              <img src="//k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" alt="카카오 로그인 버튼"/>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
