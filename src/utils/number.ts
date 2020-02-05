export const numberWithCommas = (numberString: string) => {
  return numberString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
