import styled from "styled-components";

const StyledPropsButton = styled.button`
  background-color: ${(props) => {
    switch (props.color) {
      case "danger":
        return "red";
      case "success":
        return "green";
      case "fail":
        return "gray";
      default:
        return "black";
    }
  }};
  width: ${(props) => (props.fullwidth ? "100%" : "auto")};

  &:hover {
    transform: ${(props) =>
      props.size === "large" ? "scale(1.5)" : "scale(1)"};
  }
`;

export { StyledPropsButton };
