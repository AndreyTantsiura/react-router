import React, { useState } from "react";
import padlock from "../img/padlock.png";
import { Switch, Route, Link } from "react-router-dom";
import SignUpComponent from "./SignUpComp";
import {
  Wrapper,
  Inner,
  Icon,
  SignIn,
  InputsWrapper,
  Input,
  CheckboxWrapper,
  Checkbox,
  Links,
  Span,
} from "./styledFormsComponents";

export default function SignInComp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (e) => {
    const emailCheck = new RegExp(/^\S{3,}@\S{2,}\.\D{2,}/);
    setEmail(e.target.value);

    if (e.target.value.match(emailCheck)) {
      e.target.style.borderColor = "green";
    } else {
      e.target.style.borderColor = "red";
    }
  };

  const passwordHandler = (e) => {
    const passCheck = new RegExp(/(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}/);
    setPassword(e.target.value);

    if (e.target.value.match(passCheck)) {
      e.target.style.borderColor = "green";
    } else {
      e.target.style.borderColor = "red";
    }
  };

  const registeredEmail = localStorage.getItem("email");
  const registeredPassword = localStorage.getItem("password");
  const registeredFirstName = localStorage.getItem("firstName");
  const registeredLasttName = localStorage.getItem("lastName");

  function SignInClicked(e) {
    if (registeredEmail === email && registeredPassword === password) {
      alert(
        "User: " +
          registeredFirstName +
          " " +
          registeredLasttName +
          ", is registered!"
      );
    } else
      alert(
        "Error!!! User with this data is not registered! Please, go to tab Sign Up"
      );
  }

  return (
    <Wrapper>
      <Inner>
        <Icon>
          <img src={padlock} alt="" />
        </Icon>
        <SignIn>Sign in</SignIn>
        <InputsWrapper>
          <Input
            type="e-mail"
            value={email}
            onChange={(e) => emailHandler(e)}
            placeholder="Email Adress *"
          ></Input>
          <Input
            type="password"
            value={password}
            onChange={(e) => passwordHandler(e)}
            placeholder="Password *"
          ></Input>
        </InputsWrapper>
        <CheckboxWrapper>
          <Checkbox type="checkbox" />
          <Span>Remember me</Span>
        </CheckboxWrapper>
        <Link to="/sign_in" className="button" onClick={SignInClicked}>
          SIGN IN
        </Link>
        <Links>
          <Link to="/sign_in" className="hover-item">
            Forgot password?
          </Link>
          <Link to="/sign_up" className="hover-item">
            Don't have an account? Sign Up
          </Link>
        </Links>
        <Span>Copifight &#169; Your website 2020.</Span>
      </Inner>
      <Switch>
        <Route path="/sign_up" component={SignUpComponent}></Route>
      </Switch>
    </Wrapper>
  );
}
