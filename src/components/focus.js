import { useEffect, useRef } from "react";

const Focus = ({ shouldFocus }) => {
    const inputRef = useRef(null);

    useEffect(() => {
        shouldFocus && inputRef.current.focus();
    }, [shouldFocus]);

    return (
        <>
            <input ref={inputRef} />
        </>
    )
}

export default Focus;