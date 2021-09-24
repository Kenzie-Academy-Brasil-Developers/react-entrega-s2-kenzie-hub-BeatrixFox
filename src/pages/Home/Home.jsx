import { Workplace, Container, SectionsButtons } from "./styleHome";
import Button from "../../components/Button/Button";
import { useHistory, Redirect } from "react-router";

const Home = ({ authorized }) => {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  if (authorized) {
    return <Redirect to="/ListProgramsLanguages" />;
  }

  return (
    <Container>
      <Workplace>
        <h1>
          I<span>.</span>Know<span>.</span>This!
        </h1>
        <h3>Liste seus conhecimentos na area da programação</h3>
        <SectionsButtons>
          <Button
            whiteSchema
            onClick={() => handleNavigation("/Registration")}
            text={"Cadastre-se"}
          ></Button>
          <Button
            onClick={() => handleNavigation("/Login")}
            text={"Login"}
          ></Button>
        </SectionsButtons>
      </Workplace>
    </Container>
  );
};
export default Home;
