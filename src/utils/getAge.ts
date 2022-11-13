const getAge = (timeStamp: string) => {
  const difference = Math.abs(Date.now() - +timeStamp);
  const seconds = difference / 1000;
  const days = seconds / 86400;
  const years = days / 365;
  return Math.floor(years);
};

export default getAge;
