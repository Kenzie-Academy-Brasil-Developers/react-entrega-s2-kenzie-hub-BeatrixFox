import { Container } from "./style";
import { FiBook } from "react-icons/fi";
import Button from "./../Button/Button";

const Card = ({ title, status, onClick }) => {
  return (
    <Container>
      <span>
        <FiBook /> Linguagem Aprendida
      </span>
      <hr />
      <h2>{title}</h2>
      <p>Status : {status}</p>
      <Button text="Deletar" onClick={() => onClick(title)}></Button>
    </Container>
  );
};

export default Card;
