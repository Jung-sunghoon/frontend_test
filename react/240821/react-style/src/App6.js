import React from "react";
import { StyledPropsButton } from "./components/StyledPropsButton";

export default function App6() {
  return (
    <>
      <StyledPropsButton color="danger" size="large" fullwidth="true">
        hello
      </StyledPropsButton>
      <StyledPropsButton color="success">hello</StyledPropsButton>
      <StyledPropsButton color="fail" size="large" fullwidth="true">
        hello
      </StyledPropsButton>
    </>
  );
}
