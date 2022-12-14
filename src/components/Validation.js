import { useState } from "react"

const Validation = () => {
  const [inputValue, setInputValue] = useState({ value: "", error: false });

  const inputOnChange = e => {
    const value = e.target.value;
    const error = value.length > 5;
    setInputValue({ value, error });
  }
  
  return (
    <div>
      <input
        value={inputValue.value}
        onChange={inputOnChange}
      />
      { inputValue.error &&
        <div>Maximum 5 char limit!</div> }
    </div>
  )
}

export default Validation;
