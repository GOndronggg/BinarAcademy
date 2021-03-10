const checkPrime = (num) => {
  if (num < 0) {
    return "not prime";
  } else if (num > 0 && num <= 2) {
    return "prime";
  } else {
    return num % 2 == 0 ? "not prime" : "prime";
  }
};
module.exports = checkPrime;
