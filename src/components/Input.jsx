function Input(props) {
  const { placeholder } = props;
  return (
    <input
      placeholder={placeholder}
      onChange={() => console.log("Your text")}
    />
  );
}
export default Input;
