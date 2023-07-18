import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Body from "./components/Body";
import Form from "./components/Form";
import { Element } from "react-scroll";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Element name="howItWorks">
        <Body />
      </Element>
      <Element name="becomeHost">
        <Form />
      </Element>
    </>
  );
};

export default App;
