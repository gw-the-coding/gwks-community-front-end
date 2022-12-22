import {useNavigate} from "react-router-dom";
import {getUserDataFromStorage} from "../../service/UsersService";
import {useEffect, useState} from "react";
import {StorageUtil} from "../../config/StorageUtil";

export default function Header () {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({} as any);
  const [name, setName] = useState("");
  const [state, setState] = useState({code: "", description: ""});
  const [level, setLevel] = useState({code: "", description: ""});

  useEffect(() => {
    const initalData = () => {
      let userDataFromStorage = getUserDataFromStorage();
      setUserData(userDataFromStorage);
      setState(userDataFromStorage.state || {code: "", description: ""});
      setLevel(userDataFromStorage.authority || {code: "", description: ""});
      setName(userDataFromStorage.name);
    }
    initalData();
  }, []);

  function logout() {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("로그아웃 하시겠습니까?")) {
      StorageUtil.local.logout();
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" aria-label="Main navigation">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">광성교회 청년마을</a>
          <form className="d-flex">
            {
              state.code === "" ?
                <button className="btn btn-warning" onClick={() => navigate("/login")}>로그인</button>
                :
                <>
                  <button disabled className={"btn btn-primary"}>
                    {`[${level.description}] ${name}, 반갑습니다.`}
                  </button>
                  &nbsp;
                  <button className={"btn btn-warning"} onClick={() => logout()}>로그아웃</button>
                </>
            }
          </form>
        </div>
      </nav>
    </>
  );
}
