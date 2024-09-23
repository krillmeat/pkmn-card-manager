export const getSet = cardNumber => cardNumber.split("_")[0];

export const noNegative = number => number < 0 ? 0 : number;