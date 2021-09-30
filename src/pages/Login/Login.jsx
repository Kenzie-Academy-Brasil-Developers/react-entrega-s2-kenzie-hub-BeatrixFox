import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { AnimationMove, Container, BaseBack, SectionForm } from "./style";
import { Link } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Redirect, useHistory } from "react-router";
import api from "../../services/api";
import { toast } from "react-toastify";

const Login = ({ authorized, setAuthorized }) => {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitForm = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        const { token } = response.data;
        localStorage.setItem("@IKnowThis::token", JSON.stringify(token));
        setAuthorized(true);
        toast.success("Sucesso. Acesso permitido");
        return history.push("/ListProgramsLanguages");
      })
      .catch((err) => {
        toast.error(`Falha! Senha ou email incorreto`);
      });
  };
  if (authorized) {
    return <Redirect to="/ListProgramsLanguages" />;
  }

  return (
    <Container>
      <SectionForm>
        <h1>Login</h1>
        <AnimationMove>
          <form onSubmit={handleSubmit(onSubmitForm)}>
            <Input
              register={register}
              name="email"
              icon={FiMail}
              label="Email"
              placeholder="Email"
              error={errors.email?.message}
            ></Input>
            <Input
              register={register}
              name="password"
              icon={FiLock}
              label="Senha"
              placeholder="Senha"
              type="password"
              error={errors.password?.message}
            ></Input>
            <Button type="submit" text={"Enviar"}>
              Enviar
            </Button>
            <p>
              Ainda não tem conta? Faça o seu{" "}
              <Link to="/Registration">cadastro</Link>
            </p>
          </form>
        </AnimationMove>
      </SectionForm>
      <BaseBack />
    </Container>
  );
};

export default Login;
