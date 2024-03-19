const saveDate = (formData) => {
  const DATE = new Date(`${+formData.yy + 30}/${formData.mm}/${formData.dd}`);

  return localStorage.setItem("date", DATE);
};

export default saveDate;
