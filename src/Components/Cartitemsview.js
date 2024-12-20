import Cartitemview from "./Cartitemview";
const Cartitemsview = ({ CartItemsModal }) => {
  return (
    <div>
      {CartItemsModal.map((cartItemModal) => {
        return <Cartitemview cartItemModal={cartItemModal}></Cartitemview>;
      })}
    </div>
  );
};

export default Cartitemsview;
