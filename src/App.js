import React from "react";
import Form from "./thirdPersonForm";
import customTheme from "./Assets/customTheme";
import logo_1 from "./insurance.8734ad56.svg";
import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@material-ui/styles";
import { ThemeProvider } from "@material-ui/core/styles";

const jss = create({
  plugins: [...jssPreset().plugins, rtl()],
});

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <StylesProvider jss={jss}>
        <div className="wrapper">
          <h2>سامانه مقایسه، مشاوره و خرید آنلاین بیمه</h2>
          <img src={logo_1} alt="Logo" />
          <h2>انتخاب بیمه نامه</h2>
          <ul className="insurance">
            <li>بیمه شخص ثالث</li>
            <li>بیمه بدنه</li>
            <li>بیمه موتور</li>
          </ul>
          <thirdPersonForm />
          <vehicleForm />
          <motorcycleForm />
        </div>
      </StylesProvider>
    </ThemeProvider>
  );
};

export default App;
