import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import GoodsList from "./GoodsList";
import "./App.scss";

class App extends React.Component {
  render = () => {
    return (
      <div>
        <Header />
        <GoodsList category="Толщиномеры" />
      </div>
    );
  };
}

ReactDOM.render(<App />, document.getElementById("root"));
