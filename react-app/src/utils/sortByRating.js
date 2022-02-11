const sortByRating = (products) => {
  const sorted = products.sort((a, b) => b.rating - a.rating);
  return sorted.slice(0, 8);
};

export default sortByRating;
