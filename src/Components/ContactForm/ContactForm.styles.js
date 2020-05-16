import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  font-family: "Ubuntu", sans-serif;
`;

export const Container = styled.div`
  box-shadow: 0px 2px 3px 0px rgba(50, 50, 50, 0.5);
  border-radius: 2px;
  width: 300px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  font-family: "Ubuntu", sans-serif;
  margin: 0 0 20px;
`;
export const Lable = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  margin: 0 0 5px;
`;

export const Input = styled.input`
  border-radius: 3px;
  padding: 5px;
  font-size: 18px;
  font-weight: 500;
  border: 1px solid #a9a9a9;
  :hover {
    border: 1px solid #1a3a97;
  }
`;

export const Button = styled.button`
  padding: 5px;
  font: 400 16px "Ubuntu", sans-serif;
  margin-top: 10px;
  height: 30px;
  width: 100%;
  border-radius: 3px;
  border: none;
  box-shadow: 0px 2px 3px 0px rgba(50, 50, 50, 0.5);
  color: white;
  background-color: #1a3a97;
  :hover {
    background-color: #0d2b7b;
  }
`;
