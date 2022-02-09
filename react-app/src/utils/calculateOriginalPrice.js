const calculateOriginalPrice = (discountedPrice, discount) => {
  const original = discountedPrice / (1 - discount / 100);
  const difference = original - discountedPrice;
  return { original: original.toFixed(2), saving: difference.toFixed(2) };
};

export default calculateOriginalPrice;
