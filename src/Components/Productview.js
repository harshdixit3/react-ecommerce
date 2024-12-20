import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const Productview = ({ productModal }) => {
  function productComponent() {
    return (
      <Col className="mb-4">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={productModal.image} />
          <Card.Body>
            <Card.Title>{productModal.name}</Card.Title>
            <Card.Text>{productModal.price}</Card.Text>
            <Button variant="primary">Add to cart</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
  return productComponent();
};

export default Productview;
