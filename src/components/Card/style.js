import styled from "styled-components";

export const Container = styled.div`
  background: var(--white);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  width: 220px;
  height: 210px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  border: 3px solid var(--black);
  color: var(--black);

  hr {
    width: 80%;
    margin: 0 16px;
  }
  h2 {
    font-size: 200%;
  }
  button {
    margin-top: 20px;
    align-self: flex-end;
  }
  svg {
    font-size: 1.1rem;
    margin-right: 4px;
    color: var(--back-blue);
    transform: translateY(3px);
  }
`;
