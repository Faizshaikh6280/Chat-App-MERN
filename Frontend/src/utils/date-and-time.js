export const extractTime = function (datestring) {
  const date = new Date(datestring);
  const hour = padWithZero(date.getHours());
  const mints = padWithZero(date.getMinutes());

  return `${hour}:${mints}`;
};

const padWithZero = function (number) {
  return `${number}`.toString().padStart(2, 0);
};
