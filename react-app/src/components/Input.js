import React, { useState } from "react";

function Input() {
  const [text1, setText1] = useState("");

  const [text2, setText2] = useState("");

  const onChange = e => {
    setText1(e.target.value);
  };

  const click = e => {
    setText2(e.target.value);
  };
  const reset = () => {
    setText1("");
  };
  return (
    <div>
      <input onChange={onChange} value={text1} />
      <button onClick={reset}>초기화</button>
      <button onClick={click}>입력</button>
      <div>
        <b>값: {text1}</b>
        <b>입력된 값: {text2}</b>
      </div>
    </div>
  );
}
export default Input;
