import styled, { keyframes } from "styled-components";
import RegistrationImg from "../../assets/programador.jpg";

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
  }
`;

export const SectionForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
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

  form {
    margin: 40px 0px;
    width: 800px;
    text-align: center;
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;

    h1 {
      margin-bottom: 32px;
    }
    > div {
      margin-top: 10px;
      width: 400px;
    }
    p {
      margin: 8px auto;
    }
    a {
      color: var(--details-color);
      font-weight: bold;
    }
  }
`;
