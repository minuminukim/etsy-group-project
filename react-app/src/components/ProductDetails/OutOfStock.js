import { AiOutlineClose } from 'react-icons/ai';

const OutOfStock = () => {
  return (
    <div className="out-of-stock">
      <AiOutlineClose className="out-of-stock-icon" />
      <span className="out-of-stock">Out Of Stock</span>
    </div>
  );
};

export default OutOfStock;
