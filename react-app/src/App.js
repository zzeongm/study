import React from "react";
import Hello from "./components/Hello";
import logo from "./image/favicon.ico";
import Wrapper from "./components/Wrapper";
import Counter from "./components/Counter";
import Input from "./components/Input";
import MultipleInput from "./components/MultipleInput";
import UserList from "./components/UserList";
function App() {
  const name = "react";
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: 24,
    padding: "1rem",
  };
  const logoStyle = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "10px",
  };
  return (
    <div>
      <div style={logoStyle}>
        <img src={logo} alt="logo" />
      </div>
      <Wrapper>
        <Hello name="react" isSpecial={true} />
        <Hello />
        <div style={style}>{name}</div>
      </Wrapper>
      <Wrapper>
        <Counter />
      </Wrapper>
      <Wrapper>
        <Input />
        <MultipleInput />
      </Wrapper>
      <Wrapper>
        <UserList />
      </Wrapper>
    </div>
  );
}

export default App;

//두개 이상의 태그는 무조건 하나의 태그로 감싸져있어야 한다.
