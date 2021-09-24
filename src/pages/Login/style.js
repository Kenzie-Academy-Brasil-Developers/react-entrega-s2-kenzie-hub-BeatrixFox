import styled, { keyframes } from "styled-components";
import RegistrationImg from "../../assets/Linguagem-de-Programação.png";

export const Container = styled.div`
  background-color: var(--back-blue);
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const BaseBack = styled.div`
  @media (min-width: 1000px) {
    flex: 1;
    background: url(${RegistrationImg}) no-repeat center var(--black);
    background-size: contain;
    border: 1px solid var(--black);
  }
`;

export const SectionForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
`;

const appearFromLeft = keyframes`
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
  animation: ${appearFromLeft} 1s;

  form {
    margin: 80px 0px;
    width: 400px;
    text-align: center;
    h1 {
      margin-bottom: 32px;
    }
    > div {
      margin-top: 16px;
    }
    p {
      margin-top: 8px;
    }
    a {
      color: var(--details-color);
      font-weight: bold;
    }
  }
`;
