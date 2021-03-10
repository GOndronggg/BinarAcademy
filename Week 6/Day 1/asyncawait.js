const getNumber = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 1000); // Delay for 1 seconds
  });
};

const calcNumber = async () => {
  const number = await getNumber();
  return number ** 2;
};

const oddEven = async () => {
  const number = await calcNumber();
  const result = number % 2 == 0 ? "genap" : "ganjil";
  console.log(`bilangan ${number} itu bilangan ${result}`);
};

oddEven();
