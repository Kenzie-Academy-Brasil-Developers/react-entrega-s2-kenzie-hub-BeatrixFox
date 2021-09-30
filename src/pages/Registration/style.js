import styled, { keyframes } from "styled-components";
import RegistrationImg from "../../assets/programador.jpg";

export const Container = styled.div`
  background-color: var(--back-blue);
  display: flex;
  align-items: stretch;
`;

export const BaseBack = styled.div`
  @media (min-width: 950px) {
    flex: 1;
    background: url(${RegistrationImg}) no-repeat center var(--black);
    background-size: contain;
  }
`;

export const SectionForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  h1 {
    margin-top: 40px;
  }
`;

const appearFromRight = keyframes`
from{
	opacity: 0;
	transform: translateX(50px);
}
to{
	opacity: 1;
	transform: translateX(0px)
}
`;

export const AnimationMove = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: ${appearFromRight} 1s;
  width: 80%;
  margin: 0 auto;

  form {
    margin: 40px auto;
    text-align: center;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 100%;

    h1 {
      margin-bottom: 32px;
    }
    > div {
      margin: 10px auto 0;
      width: 100%;
    }
    p {
      margin: 8px auto;
    }
    a {
      color: var(--details-color);
      font-weight: bold;
    }
  }
  @media (min-width: 850px) {
    width: 100%;
    form {
      width: 800px;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      > div {
        margin-top: 10px;
        width: 400px;
      }
    }
  }
`;
