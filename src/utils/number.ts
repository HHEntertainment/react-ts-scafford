export const numberWithCommas = (numberString: string): string => {
  return numberString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
