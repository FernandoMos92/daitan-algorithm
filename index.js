const coins = [25, 10, 5, 1];

const results = [
  [0, 0, 0, 28],
  [0, 0, 1, 23],
  [0, 0, 2, 18],
  [0, 0, 3, 13],
  [0, 0, 4, 8],
  [0, 0, 5, 3],
  [0, 1, 0, 18],
  [0, 1, 1, 13],
  [0, 1, 2, 8],
  [0, 1, 3, 3],
  [0, 2, 0, 8],
  [0, 2, 1, 3],
  [1, 0, 0, 3],
];

const makeChange = (amount, arrayOfCoins) => {
  const possibilities = [];
  const amountIsLessThenZero = amount < 0;
  if (amountIsLessThenZero) {
    throw new Error('Amount is less then zero');
  }
  const maxCoinRepetitions = arrayOfCoins.map((coin) =>
    Math.floor(amount / coin),
  );
  for (let i = 0; i <= maxCoinRepetitions[0]; i++) {
    for (let j = 0; j <= maxCoinRepetitions[1]; j++) {
      for (let k = 0; k <= maxCoinRepetitions[2]; k++) {
        for (let l = 0; l <= maxCoinRepetitions[3]; l++) {
          const currentAmount =
            i * arrayOfCoins[0] +
            j * arrayOfCoins[1] +
            k * arrayOfCoins[2] +
            l * arrayOfCoins[3];
          const isValid = currentAmount === amount;
          if (isValid) {
            possibilities.push([i, j, k, l]);
          }
        }
      }
    }
  }
  return possibilities;
};

console.log(makeChange(28, coins));
