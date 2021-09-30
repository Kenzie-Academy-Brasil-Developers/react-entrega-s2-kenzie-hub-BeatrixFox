import styled from "styled-components";

export const Container = styled.div`
  background: var(--back-blue);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 10px;
  text-align: center;
  h1 {
    margin: 20px auto 5px;
    font-size: 40px;
  }
`;

export const SectionInput = styled.form`
  flex: 1;
  margin-top: 15px;
  padding: 0 10px;
  section {
    display: flex;
    > div {
      max-width: 60%;
      flex: 1;
      margin-right: 5px;
    }
    button {
      max-width: 260px;
      height: 60px;
      margin: 0;
    }
  }
  @media (min-width: 900px) {
    width: 800px;
    margin: 15px auto;
  }
`;

export const ListLanguages = styled.div`
  padding: 0 30px;
  margin: 20px auto;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  div {
    margin: 16px;
  }
  @media (min-width: 1100px) {
    width: 1100px;
  }
`;
