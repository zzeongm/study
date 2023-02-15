import React from "react";

function Wrapper({ children }) {
  const style = {
    border: "2px solid black",
    padding: "16px",
  };

  return <div style={style}>{children}</div>;
}

export default Wrapper;

//컴포넌트 태그 사이에 넣은 값을 조회할땐 props.children으로 조회를 한다.