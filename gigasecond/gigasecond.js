export const gigasecond = (date) => {
  let dateTime = date.getTime();
  let endDate = new Date(dateTime + 1000000000000);
  return endDate;
}