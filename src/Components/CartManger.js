import { products } from "../products";

const CartManger = () => {
  const defaultCartItemsModal = [
    {
      productModal: products[0],
      quantity: 2,
    },
    {
      productModal: products[2],
      quantity: 4,
    },
    {
      productModal: products[4],
      quantity: 5,
    },
    {
      productModal: products[6],
      quantity: 7,
    },
  ];
  return <div style={{ backgroundColor: "lightgreen" }}>CartManger</div>;
};

export default CartManger;
