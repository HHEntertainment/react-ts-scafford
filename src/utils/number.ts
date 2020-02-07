export const numberWithCommas = (numberString: string): string => numberString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
