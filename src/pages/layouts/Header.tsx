import {useNavigate} from "react-router-dom";

export default function Header () {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" aria-label="Main navigation">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">광성교회 청년마을</a>
          <form className="d-flex">
            <button className="btn btn-warning" onClick={() => navigate("/signin")} >로그인</button>
          </form>
        </div>
      </nav>
    </>
  );
}
