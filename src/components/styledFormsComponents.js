import styled from "styled-components";

export const Wrapper = styled.div`
  width: 350px;
  height: 430px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10%;
  display: flex;
  justify-content: center;
  background-color: #121212;
`;

export const Inner = styled.form`
  width: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto", sans-serif;
  justify-content: center;
  overflow: hidden;
`;

export const Icon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: pink;
  margin-bottom: 10px;
`;

export const SignIn = styled.div`
  margin-bottom: 10px;
  color: #929292;
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Input = styled.input`
  height: 30px;
  background: initial;
  border: 1px solid grey;
  border-radius: 3px;
  outline: none;
  color: #929292;
  margin: 8px 0;
`;

export const CheckboxWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin 10px 0;
`;

export const Checkbox = styled.input`
  margin: 0 5px 0 0;
  font-size: 12px;
`;

export const Links = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  font-size: 10px;
  color: #a1d1f8;
  margin-bottom: 40px;
`;

export const Span = styled.span`
  font-size: 11px;
  color: #929292;
`;

export const InputNames = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 0;
`;

export const FirstName = styled.input`
  width: 45%;
  height: 30px;
  background: initial;
  border: 1px solid grey;
  border-radius: 3px;
  outline: none;
  color: #929292;
`;

export const LastName = styled.input`
  width: 45%;
  height: 30px;
  background: initial;
  border: 1px solid grey;
  border-radius: 3px;
  outline: none;
  color: #929292;
`;

