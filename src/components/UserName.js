import { useRef, useState } from "react";

const UserName = () => {
    const [userName, setUserName] = useState("");
    const [userNameInput, setUserNameInput] = useState("");
    const inputRef = useRef(null);

    const inputOnChange = e => {
        const inputValue = e.target.value;
        setUserNameInput(inputValue);
    }

    const inputSubmit = () => {
        // setUserName(userNameInput);
        setUserName(inputRef.current.value);
        setUserNameInput("");
    }

    return (
        <div>
            <input
                value={userNameInput}
                onChange={inputOnChange}
                ref={inputRef}
            />
            <button onClick={inputSubmit}>Enter</button>
            <div>{`User Name: ${userName}`}</div>
        </div>
    )
};

export default UserName;