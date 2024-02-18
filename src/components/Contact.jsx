import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Contact() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Su Correo</Form.Label>
        <Form.Control type="email" placeholder="sucorreo@ejemplo.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Escriba lo que desee</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      <Button variant="danger" type="submit">
        Enviar
      </Button>
    </Form>
  );
}

export default Contact;
