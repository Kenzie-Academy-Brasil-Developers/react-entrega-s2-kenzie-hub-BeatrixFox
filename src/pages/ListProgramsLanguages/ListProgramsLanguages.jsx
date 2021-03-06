import { Redirect } from "react-router";
import { Container, ListLanguages, SectionInput } from "./style";
import Button from "./../../components/Button/Button";
import Input from "./../../components/Input/Input";
import { FiActivity, FiFile } from "react-icons/fi";
import Card from "../../components/Card/Card";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";

const ListProgramsLanguages = ({ authorized }) => {
  const [languanges, setLanguanges] = useState([]);
  const [token] = useState(
    JSON.parse(localStorage.getItem("@IKnowThis::token")) || ""
  );

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup.string().required("Senha obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitList = (data) => {
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        setLanguanges([...languanges, response.data]);
      })
      .catch((err) => toast.error(`Já existente, tente outro`));
  };

  useEffect(() => {
    api
      .get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setLanguanges(response.data.techs);
      })
      .catch((err) => console.log(err));
  });

  const deletTech = (tech) => {
    const techDel = languanges.find((techItem) => techItem.title === tech);

    api
      .delete(`/users/techs/${techDel.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setLanguanges(languanges.filter((techItem) => techItem.title !== tech));
      })
      .catch((err) => toast.error(`Erro , tente novamente`));
  };

  if (!authorized) {
    return <Redirect to="/Login" />;
  }

  return (
    <Container>
      <h1>Linguagens Dominadas</h1>
      <SectionInput onSubmit={handleSubmit(onSubmitList)}>
        <Input
          icon={FiFile}
          register={register}
          name="title"
          label="title"
          placeholder="Nome da Linguagem"
          error={errors.title?.message}
        ></Input>
        <Input
          icon={FiActivity}
          register={register}
          name="status"
          label="nivel"
          placeholder="nivel"
          error={errors.status?.message}
        ></Input>
        <Button type="submit" text={"Adicionar"}>
          Enviar
        </Button>
      </SectionInput>
      <ListLanguages>
        {languanges.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            status={item.status}
            onClick={deletTech}
          />
        ))}
      </ListLanguages>
    </Container>
  );
};

export default ListProgramsLanguages;
