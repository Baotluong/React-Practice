import { useState } from "react";

const AddTwoNumbers = () => {
    const [one, setOne] = useState();
    const [two, setTwo] = useState();
    const [total, setTotal] = useState("");

    return (
        <div>
            <input
                onChange={(e) => setOne(Number(e.target.value))}
                placeholder="First Number"
            />
            <input
                onChange={(e) => setTwo(Number(e.target.value))}
                placeholder="Second Number"
            />
            <button onClick={() => setTotal(one + two)}>Add Two Numbers</button>
            <div>{`Total: ${total}`}</div>
        </div>
    );
};

export default AddTwoNumbers;
