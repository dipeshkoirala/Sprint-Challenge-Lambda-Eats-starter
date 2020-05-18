import React from "react";
import MyMain from "./component/mainPage";
import PizzaBuilder from "./component/form";
import Header from "./component/header/header";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <h1 align="center">Lambda Eats</h1>
      <Header />
      {/* <HeadPic /> */}

      <Route exact path="/" component={MyMain} />
      <Route path="/component" component={PizzaBuilder} />
    </>
  );
};
export default App;
