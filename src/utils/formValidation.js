const formValidation = (formData) => {
  let errors = [];

  // check if field is empty or not a number
  for (let key in formData) {
    if (formData[key] === "") {
      errors.push("Fields can't be empty");
    } else if (isNaN(formData[key])) {
      errors.push("Fields must be type of number");
    }
  }

  // check if date is valid
  const { yy, mm, dd } = formData;
  const date = new Date(`${yy}/${mm}/${dd}`);
  const isValidDate =
    !isNaN(date) &&
    parseInt(dd) === date.getDate() &&
    parseInt(mm) === date.getMonth() + 1 &&
    parseInt(yy) === date.getFullYear();
  if (!isValidDate) {
    errors.push("Date is not valid");
  }

  return errors.length > 0 ? errors : null;
};

export default formValidation;
