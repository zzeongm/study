import React from "react";
import Hello from "./Hello";
import logo from "./image/favicon.ico";
import Wrapper from "./Wrapper"
function App() {
  const name = "react";
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: 24,
    padding: "1rem",
  };
  return (
    <Wrapper>
      <img src={logo} alt="logo" />
      <Hello name="react" isSpecial={true}/>
      <Hello/>
      <div style={style}>{name}</div>
    </Wrapper>
  );
}

export default App;

//두개 이상의 태그는 무조건 하나의 태그로 감싸져있어야 한다.
