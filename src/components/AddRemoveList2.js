import { useState } from "react";

const AddRemoveList = () => {
  const [list, setList] = useState(["First"]);
  const [inputValue, setInputValue] = useState("");

  const onAddClick = () => {
    setList([...list, inputValue]);
    setInputValue("");
  }

  const onRemoveClick = (indexToRemove) => {
    setList(list.filter((item, index) => index !== indexToRemove))
  }
  
  return (
    <div>
      <ul>
        { list.map((item, index) => {
            return <li onClick={() => onRemoveClick(index)}>{item}</li>
          }) }
      </ul>
      <input
        placeholder="Add an Item"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={onAddClick}>Add</button>
    </div>
  )
};

export default AddRemoveList;
