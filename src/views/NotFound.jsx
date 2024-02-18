import { Container } from "react-bootstrap";
import construccion from "../assets/R.jpg";

const NotFound = () => {
  return (
    <Container className="pt-5">
      <h1 className="mb-4">
        Lo siento la ruta que intentas consultar no está disponible
      </h1>
      <img src={construccion} alt="" width={550} />
    </Container>
  );
};
export default NotFound;
