const formatText = (value, index) => {
  switch (index) {
    case 25:
      return [value, 0, 0, 0];
    case 10:
      return [0, value, 0, 0];
    case 5:
      return [0, 0, value, 0];
    case 1:
      return [0, 0, 0, value];
    default:
      return [0, 0, 0, 0];
  }
};

const makeChange = (amount) => {
  const coins = [25, 10, 5, 1];
  const possibilities = [];
  if (amount > 0) {
    for (let index = 0; index < coins.length; index += 1) {
      if (amount % coins[index] === 0) {
        possibilities.push(formatText((amount / coins[index]), coins[index]));
      }
    }
  } else {
    console.log("Invalid input.");
  }
  return console.log(possibilities);
};
