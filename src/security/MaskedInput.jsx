export const MaskedInput = ({ value = "" }) => {
  const maskedValue = value.toString().replace(/\d(?=\d{4})/g, "*");

  return <input type="text" value={maskedValue} readOnly />;
};
