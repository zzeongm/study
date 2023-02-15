import React, { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(number + 1);
  };
  const onDerease = () => {
    setNumber(number - 1);
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDerease}>-1</button>
    </div>
  );
}

export default Counter;

//const numberState = useState(0); -> 개발자가 임의로 지정한 변수
//const number = numberState[0]; -> 왜 let이 아닌 const? If you change the state, the component will clearly re-render right? So if it re-renders count will never be "reassigned"
//const setNumber = numberState[1];
//배열 비구조화 할당 사용
