import { useEffect, useRef } from "react";

const FocusMe = ({ shouldFocus }) => {
    const inputRef = useRef(null);

    useEffect(() => {
        shouldFocus && inputRef.current.focus();
    }, [shouldFocus]);

    return (
        <div>
            <input ref={inputRef}/>
            <button onClick={() => inputRef.current.focus() }>Focus Me!</button>
        </div>
    );
}

export default FocusMe;
