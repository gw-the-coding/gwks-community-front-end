import {useNavigate} from "react-router-dom";
import {getUserDataFromStorage} from "../../service/UsersService";
import {useEffect, useState} from "react";

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
      setState(userDataFromStorage.state);
      setLevel(userDataFromStorage.authority);
      setName(userDataFromStorage.name);
    }
    initalData();
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" aria-label="Main navigation">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">광성교회 청년마을</a>
          <form className="d-flex">
            <button className="btn btn-warning" onClick={() => navigate("/login")}>로그인</button>
          </form>
        </div>
      </nav>
    </>
  );
}
