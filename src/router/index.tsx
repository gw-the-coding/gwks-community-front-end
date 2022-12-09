import {createBrowserRouter} from "react-router-dom";
import Board from "../pages/board/BoardPage";
import SignInPage from "../pages/login/SignInPage";
import KakaoLoginPage from "../pages/login/KakaoLoginPage";
import KakaoLoginRedirectionPage from "../pages/login/KakaoLoginRedirectionPage";
import JoinPage from "../pages/login/JoinPage";
import MyPage from "../pages/login/MyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Board />
  },
  {
    path: "/login",
    element: <SignInPage />
  },
  {
    path: "/login/kakao",
    element: <KakaoLoginPage />
  },
  {
    path: "/login/kakao/callback",
    element: <KakaoLoginRedirectionPage />
  },
  {
    path: "/join",
    element: <JoinPage />
  },
  {
    path: "/mypage",
    element: <MyPage />
  },
  {
    path: "/:communityId",
    element: <Board />,
  }
])

export default router;
