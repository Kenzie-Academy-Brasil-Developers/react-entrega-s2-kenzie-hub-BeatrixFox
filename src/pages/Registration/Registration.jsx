import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { AnimationMove, BaseBack, Container, SectionForm } from "./style";
import { Link } from "react-router-dom";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory, Redirect } from "react-router";
import api from "../../services/api";
import { toast } from "react-toastify";

const Registration = ({ authorized }) => {
  const nameRegex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
  const passwordRegexLetter = /(?=.*[A-Z])(?=.*[a-z])/;
  const passwordRegexnumber = /(?=.*[0-9])/;
  const passwordRegexSpecial = /(?=.*[!@#$&*])/;

  const history = useHistory();

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório")
      .matches(nameRegex, "Somente letras"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Senha obrigatório")
      .matches(passwordRegexLetter, "Não possui letra minuscula e maiuscula")
      .matches(passwordRegexSpecial, "Não possui caracter especial")
      .matches(passwordRegexnumber, "Não possui numero")
      .min(8, "No minimo 8 caracteres"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitForm = ({
    name,
    email,
    password,
    bio,
    contact,
    course_module,
  }) => {
    const user = { name, email, password, bio, contact, course_module };
    api
      .post("/users", user)
      .then((_) => {
        toast.success("Cadastro realizado com Sucesso");
        return history.push("/Login");
      })
      .catch((err) => {
        toast.error(`Falha no cadastro. Tente novamente`);
      });
  };
  if (authorized) {
    return <Redirect to="/ListProgramsLanguages" />;
  }

  return (
    <Container>
      <BaseBack />
      <SectionForm>
        <AnimationMove>
          <form onSubmit={handleSubmit(onSubmitForm)}>
            <Input
              register={register}
              name="name"
              icon={FiUser}
              label="Name"
              placeholder="Name"
              error={errors.name?.message}
            ></Input>
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
            <Input
              register={register}
              name="confirmPassword"
              icon={FiLock}
              label="Confirmação de senha"
              placeholder="Confirmação de senha"
              type="password"
              error={errors.confirmPassword?.message}
            ></Input>
            <Input
              register={register}
              name="bio"
              icon={FiUser}
              label="Bio"
              placeholder="Biografia"
              error={errors.bio?.message}
            ></Input>
            <Input
              register={register}
              name="contact"
              icon={FiUser}
              label="Contact"
              placeholder="Contact"
              error={errors.contact?.message}
            ></Input>
            <Input
              register={register}
              name="course_module"
              icon={FiUser}
              label="Course"
              placeholder="Course"
              error={errors.course_module?.message}
            ></Input>
            <Input
              register={register}
              name="date"
              icon={FiUser}
              label="date"
              placeholder="Data"
              error={errors.date?.message}
            ></Input>

            <Button type="submit" text={"Enviar"}></Button>
            <p>
              Já tem conta? Faça o seu <Link to="/Login">login</Link>
            </p>
          </form>
        </AnimationMove>
      </SectionForm>
    </Container>
  );
};

export default Registration;
