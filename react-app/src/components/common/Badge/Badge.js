import './Badge.css';

const Badge = ({ className, text }) => {
  return <span className={`badge ${className}`}>{text}</span>;
};

export default Badge;
