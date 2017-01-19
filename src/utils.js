const isInteger = data => data === parseInt(data, 10);

const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - (min + 1))) + min;

export { isInteger, getRandomNumber };
