const getAge = (birthday: string) => {
  const ageDifference = Date.now() - new Date(birthday).getTime();
  const ageDate = new Date(ageDifference);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

export default getAge;
