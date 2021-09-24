import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--back-blue);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
`;

export const Workplace = styled.div`
  max-width: 400px;

  h1 {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 2.5rem;
    span {
      color: #a0fff4;
    }
  }

  h3 {
    margin-bottom: 2rem;
    font-size: 1.8rem;
    flex-wrap: wrap;
    font-family: "PT Serif", sans-serif;
  }
`;

export const SectionsButtons = styled.div`
  flex: 1;
  display: flex;
  margin-top: 1rem;

  button + button {
    margin-left: 1rem;
  }
`;
