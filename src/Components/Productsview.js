import { Row } from "react-bootstrap";
import { products } from "../products";
import Productview from "./Productview";

const Productsview = () => {
  return (
    <div>
      <Row>
        {products.map((productModal) => {
          return <Productview productModal={productModal}></Productview>;
        })}
      </Row>
    </div>
  );
};

export default Productsview;
