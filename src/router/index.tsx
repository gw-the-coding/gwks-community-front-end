import {createBrowserRouter} from "react-router-dom";
import Board from "../pages/board/BoardPage";
import SignInPage from "../pages/login/SignInPage";
import KakaoLoginPage from "../pages/login/KakaoLoginPage";
import KakaoLoginRedirectionPage from "../pages/login/KakaoLoginRedirectionPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Board />
  },
  {
    path: "/signin",
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
    path: "/:communityId",
    element: <Board />,
  }
])

export default router;
