import styled from "styled-components";

export const Container = styled.button`
  background-color: ${(props) => (props.whiteSchema ? "#f5f5f5" : "#000000")};
  color: ${(props) => (props.whiteSchema ? "#000000" : "#f5f5f5")};
  height: 45px;
  border-radius: 5px;
  border: 2px solid var(--black);
  font-family: "Roboto Mono", monospace;
  font-weight: bold;
  margin-top: 16px;
  width: 100%;
  transition: 0.5s;
  :hover {
    border: 2px solid var(--dark-green);
    background-color: var(--details-color);
    color: var(--black);
  }
`;
