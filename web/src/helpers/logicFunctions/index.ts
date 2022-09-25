export const getNoFibonacciNumber = (n: number): number => {
  if (n < 1) {
    throw new Error('erro');
  }
  if (n === 1) {
    return 4;
  }
  const res = (n - 1) + n;

  return res * 2;
};
