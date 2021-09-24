import { Container } from "./style";

const Button = ({ text, whiteSchema = false, ...rest }) => {
  return (
    <Container whiteSchema={whiteSchema} type="button" {...rest}>
      {text}
    </Container>
  );
};

export default Button;
