import styled from "styled-components";

const Button1 = styled.button`
  padding: 10px;
  background-color: blue;
  color: white;
`;

const Button2 = styled(Button1)`
  border-radius: 10px;
  border: none;
  color: black;
  font-weight: bold;
  box-shadow: rgba(0, 0, 0, 0.3) 0 0 1px 2px;
`;

const Button4 = styled(Button1)`
  border-radius: 15px;
  border: none;
  background-color: yellow;
  font-weight: bold;
  box-shadow: rgba(0, 0, 0, 0.3) 0 0 1px 2px;
`;

export { Button1, Button2, Button4 };
