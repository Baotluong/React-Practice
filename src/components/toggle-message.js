import { useState } from "react";

const ToggleMessage = () => {
    const [showMessage, setShowMessage] = useState(false);

    return (
        <div>
            <div onClick={() => {setShowMessage(!showMessage)}}>Show message?</div>
            {showMessage &&
                <div >This is the message!</div>}
        </div>
    );
}

export default ToggleMessage;
