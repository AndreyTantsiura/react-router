import React, { useState } from "react";
import padlock from "../img/padlock.png";
import { Switch, Route, Link } from "react-router-dom";
import SignInComp from "./SignUpComp";
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
  InputNames,
  FirstName,
  LastName,
} from "./styledFormsComponents";

export default function SignUpComp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLAstNAme] = useState("");

  const fisrtNAmeHandler = (e) => {
    const nameCheck = new RegExp(/[A-Za-z]{3,}/);
    setFirstName(e.target.value);

    if (e.target.value.match(nameCheck)) {
      e.target.style.borderColor = "green";
      setFirstName(e.target.value);
    } else {
      e.target.style.borderColor = "red";
    }
  };

  const lastNameHandler = (e) => {
    const nameCheck = new RegExp(/[A-Za-z]{3,}/);
    setLAstNAme(e.target.value);

    if (e.target.value.match(nameCheck)) {
      e.target.style.borderColor = "green";
      setLAstNAme(e.target.value);
    } else {
      e.target.style.borderColor = "red";
    }
  };

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

  const rememberDataUser = () => {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
  };

  return (
    <Wrapper>
      <Inner>
        <Icon>
          <img src={padlock} alt="" />
        </Icon>
        <SignIn>Sign up</SignIn>
        <InputNames>
          <FirstName
            onChange={(e) => fisrtNAmeHandler(e)}
            placeholder="First Name*"
          ></FirstName>
          <LastName
            onChange={(e) => lastNameHandler(e)}
            placeholder="Last Name*"
          ></LastName>
        </InputNames>
        <InputsWrapper>
          <Input
            value={email}
            onChange={(e) => emailHandler(e)}
            placeholder="Email Adress *"
          ></Input>
          <Input
            value={password}
            onChange={(e) => passwordHandler(e)}
            placeholder="Password *"
          ></Input>
        </InputsWrapper>
        <CheckboxWrapper>
          <Checkbox type="checkbox" />
          <Span>
            I want to receive inspiration, marketing promoyions and updates via
            email
          </Span>
        </CheckboxWrapper>
        <Link to="/sign_in" className="button" onClick={rememberDataUser}>
          SIGN UP
        </Link>
        <Links>
          <Link to="/sign_in" className="hover-item">
            Aready have an account? Sign in
          </Link>
        </Links>
        <Span>Copifight &#169; Your website 2020.</Span>
      </Inner>
      <Switch>
        <Route path="/sign_in" component={SignInComp}></Route>
      </Switch>
    </Wrapper>
  );
}
