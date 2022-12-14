import { useDataUpdate, useData } from "./AppProvider3";

const AppConsumer = () => {
    const { changeNumber } = useDataUpdate();
    const { number, word } = useData();

    return (
        <div>
            { `word: ${word} number: ${number}` }
            <button onClick={() => changeNumber(number + 1)}>+1</button>
        </div>
    );
};

export default AppConsumer;
