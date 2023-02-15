import React from "react";
import ReactDOM from "react-dom/client";
import App1 from "./App1";
import App2 from "./App2";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App1 />
    <App2 />
  </React.StrictMode>
);

//ReactDOM.render의 역할은 브라우저에 있는 실제 DOM 내부에 리액트 컴포넌트를
//렌더링하겠다는 것을 의미한다.
