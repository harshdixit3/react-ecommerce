import ProductLister from "./ProductLister";
import CartManager from "./CartManger";
import Header from "./Header";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Col>{<Header></Header>}</Col>
        </Col>
      </Row>
      <Row>
        <Col lg={9}> {<ProductLister></ProductLister>}</Col>
        <Col lg={3}> {<CartManager></CartManager>}</Col>
      </Row>
    </Container>
  );
};

export default Home;
