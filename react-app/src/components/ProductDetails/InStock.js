import { AiOutlineCheck } from 'react-icons/ai';

const InStock = () => {
  return (
    <div className="in-stock">
      <AiOutlineCheck className="in-stock-icon" />
      <span className="in-stock">In stock</span>
    </div>
  );
};

export default InStock;
