import React from "react";
import { StyledButton } from "./components/StyledPropsButton";

export default function App6() {
  return (
    <>
      <StyledButton color="danger" size="large" fullwidth="true">
        hello
      </StyledButton>
      <StyledButton color="success">hello</StyledButton>
      <StyledButton color="fail" size="large" fullwidth="true">
        hello
      </StyledButton>
    </>
  );
}
