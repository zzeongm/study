import React from "react";

function Hello({name}) {
  return <div>{name}</div>;
}

Hello.defaultProps = {
    name:'이름없음'
}

export default Hello;

//리액트 컴포넌트를 만들 땐 react를 불러와주어야 한다.
//리액트 컴포넌트는 함수형태로 작성 할 수도 있고 클래스형태로도 작성 할 수 있다.
//리액트 컴포넌트에서는 XML 형식의 값을 반환해줄 수 있는데 이를 JSX라 한다.
