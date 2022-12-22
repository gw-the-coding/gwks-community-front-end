import Header from "../layouts/Header";
import TopMenu from "../layouts/TopMenu";
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";
import {useState} from "react";
import {joinUser} from "../../service/UsersService";
import {useNavigate} from "react-router-dom";

export default function JoinPage(props: any) {

  const navigate = useNavigate();

  const userSysId = new URL(window.location.href).searchParams.get("userSysId")??"";
  const initialEmail = new URL(window.location.href).searchParams.get("email")??"";
  if (userSysId === "") {

  }

  const [email, setEmail] = useState(initialEmail as string);
  const [name, setName] = useState('' as string);
  const [nickName, setNickName] = useState('' as string);
  const [birthyear, setBirthyear] = useState('' as string);
  const [community, setCommunity] = useState('NOT_YET' as string);

  async function submitJoin(event: any) {
    event.preventDefault();
    const userData = {
      userSysId,
      email,
      name,
      nickName,
      birthyear,
      community
    }
    const result = await joinUser(userData);
    if (result.data.resultCode === '0001') {
      alert('회원가입에 성공하였습니다.');
      navigate("/");
    }
    return;
  }

  return (
    <>
      <Header />
      <TopMenu />
      <main className="container">
        <div className="my-3 p-3 bg-body rounded shadow-sm">
          <h3 className="border-bottom pb-3 mb-0">회원가입</h3>

          <Form className={"mt-4"} onSubmit={(event) => submitJoin(event)}>
            <FormGroup row>
              <Label
                for="exampleEmail"
                sm={2}
              >
                이메일
              </Label>
              <Col sm={10}>
                <Input
                  disabled
                  id="exampleEmail"
                  name="email"
                  placeholder="with a placeholder"
                  type="email"
                  defaultValue={initialEmail}
                  onChange={(v) => setEmail(v.target.value)}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label
                for="username"
                sm={2}
              >
                사용자 이름
              </Label>
              <Col sm={10}>
                <Input
                  id="username"
                  name="name"
                  placeholder="사용자 이름"
                  type="text"
                  onChange={(v: any) => setName(v.target.value)}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label
                for="nickname"
                sm={2}
              >
                닉네임
              </Label>
              <Col sm={10}>
                <Input
                  id="nickname"
                  name="name"
                  placeholder="닉네임"
                  type="text"
                  onChange={(v) => setNickName(v.target.value)}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label
                for="exampleEmail1"
                sm={2}
              >
                또래
              </Label>
              <Col sm={10}>
                <Input
                  id="exampleEmail1"
                  name="birthyear"
                  placeholder="출생연도를 입력해주세요(ex: 1990년생 => 90)"
                  type="text"
                  onChange={(v) => setBirthyear(v.target.value)}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label
                for="exampleSelect"
                sm={2}
              >
                공동체
              </Label>
              <Col sm={10}>
                <Input
                  id="exampleSelect"
                  name="select"
                  type="select"
                  onChange={(v) => setCommunity(v.target.value)}
                >
                  <option value={'NOT_YET'}>
                    미정
                  </option>
                  <option value={'ONE'}>
                    1청년부
                  </option>
                  <option value={'TWO'}>
                    2청년부
                  </option>
                  <option value={'THREE'}>
                    3청년부
                  </option>
                  <option value={'MERRY_BRIDGE'}>
                    신혼브릿지
                  </option>
                </Input>
              </Col>
            </FormGroup>
            <Button block>회원가입</Button>
          </Form>
        </div>
      </main>
    </>
  );
}
