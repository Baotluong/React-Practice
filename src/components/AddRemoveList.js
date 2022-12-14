import { useState } from "react";

const AddRemoveList = () => {
  const [list, setList] = useState(["First Item"]);
  const [inputValue, setInputValue] = useState('');

  const onAddButtonClick = () => {
    setList([...list, inputValue])
    setInputValue("")
  }

  const removeItemOnClick = index => {
    setList(list.filter((item, i) => index !== i ));
  }

  return (
    <div>
      <ul>
        { list.map((item, index) => {
          return (
            <li onClick={() => removeItemOnClick(index)}>{item}</li>
          )
        }) }
      </ul>
      <input
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
        placeholder="Add to List" />
      <button onClick={onAddButtonClick}>Add</button>
    </div>
  )
};

export default AddRemoveList;