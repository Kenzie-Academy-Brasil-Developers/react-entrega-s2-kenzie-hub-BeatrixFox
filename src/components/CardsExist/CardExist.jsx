import { useState } from "react";
import { Container } from "../../pages/ListProgramsLanguages/style";
import api from "../../services/api";

const CardExist = () => {
  const [codePrograms, setCodePrograms] = useState();
  const listTech = () => {
    api
      .get("https://kenziehub.herokuapp.com/users")
      .then((response) => {
        console.log(response.data);
        setCodePrograms(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Container>
      <span>Linguagens já adicionadas</span>
      <button onClick={() => listTech()}>listar</button>
    </Container>
  );
};
export default CardExist;
