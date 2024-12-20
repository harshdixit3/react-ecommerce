const Carditemview = ({ CartItemModal }) => {
  return (
    <div>
      {CartItemModal.productModal.name} - {CartItemModal.quantity} -
      {CartItemModal.productModal.price}
    </div>
  );
};

export default Carditemview;
