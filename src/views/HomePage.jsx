import { Container } from "react-bootstrap";
import torta from "../assets/Cake.jpg";

const HomePage = () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">
        {" "}
        Bienvenido a <span className="fw-bold">Happy Cake</span>{" "}
      </h1>
      <h6> El lugar de los pasteles felices </h6>
      <img src={torta} alt="" width={450} />
    </Container>
  );
};
export default HomePage;
