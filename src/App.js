import React from "react";
import MyMain from "./component/mainPage";
import PizzaBuilder from "./component/form";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>

      {/* <HeadPic /> */}

      <Route exact path="/" component={MyMain} />
      <Route path="/component" component={PizzaBuilder} />
    </>
  );
};
export default App;
