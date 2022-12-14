import { useState } from "react";

const DisableButton = () => {
    const [input, setInput] = useState("");

    return (
        <div>
            <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
            ></input>
            <button disabled={!input.length}>Submit</button>
        </div>
    );
};

export default DisableButton;
