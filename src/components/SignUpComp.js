import React from "react";
import padlock from "../img/padlock.png";
import styled from "styled-components";
import { Switch, Route, Link } from "react-router-dom";
import SignInComp from "./SignUpComp";

const Wrapper = styled.div`
  width: 350px;
  height: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10%;
  display: flex;
  justify-content: center;
  background-color: #121212;
`;

const Inner = styled.form`
  width: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto", sans-serif;
  justify-content: center;
  overflow: hidden;
`;

const Icon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: pink;
  margin-bottom: 10px;
`;

const SignIn = styled.div`
  margin-bottom: 20px;
  color: #929292;
`;

const InputNames = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 0;
`;

const FirstName = styled.input`
  width: 45%;
  height: 30px;
  background: initial;
  border: 1px solid #424242;
  border-radius: 3px;
  outline: none;
  color: #929292;
`;

const LastName = styled.input`
  width: 45%;
  height: 30px;
  background: initial;
  border: 1px solid #424242;
  border-radius: 3px;
  outline: none;
  color: #929292;
`;

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  height: 30px;
  background: initial;
  border: 1px solid #424242;
  border-radius: 3px;
  outline: none;
  color: #929292;
  margin: 8px 0;
`;

const CheckboxWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Checkbox = styled.input`
  margin: 0 5px 0 0;
  font-size: 12px;
`;

const Button = styled.button`
  width: 100%;
  border-radius: 3px;
  border: none;
  background-color: #a1d1f8;
  font-size: 9px;
  padding: 9px;
  margin-bottom: 15px;
  cursor: pointer;
  font-weight: bold;
`;

const Links = styled.div`
  width: 100%;
  font-size: 10px;
  color: #a1d1f8;
  margin-bottom: 40px;
  text-align: end;
`;

const Span = styled.span`
  font-size: 11px;
  color: #929292;
`;

export default function SignUpComp() {
  return (
    <Wrapper>
      <Inner>
        <Icon>
          <img src={padlock} alt="" />
        </Icon>
        <SignIn>Sign up</SignIn>
        <InputNames>
          <FirstName placeholder="First Name*"></FirstName>
          <LastName placeholder="Last Name*"></LastName>
        </InputNames>
        <InputsWrapper>
          <Input placeholder="Email Adress *"></Input>
          <Input placeholder="Password *"></Input>
        </InputsWrapper>
        <CheckboxWrapper>
          <Checkbox type="checkbox" />
          <Span>
            I want to receive inspiration, marketing promoyions and updates via
            email
          </Span>
        </CheckboxWrapper>
        <Button>SIGN UP</Button>
        <Links>
          <Link
            to="/sign_in"
            style={{
              textDecoration: "none",
              color: "#a1d1f8",
              border: "none",
              padding: 0,
              margin: 0,
              cursor: "pointer",
            }}
            class="hover-item"
          >
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
