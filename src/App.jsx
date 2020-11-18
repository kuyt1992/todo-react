import React from "react";

const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };
  return (
    <React.Fragment>
      <h1 style={{ color: "red" }}>Hello</h1>
      <p style={contentStyle}>お元気ですか？</p>
      <button onClock={onClickButton}>ボタン</button>
    </React.Fragment>
  );
};

export default App;
