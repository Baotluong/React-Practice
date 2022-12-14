import { createContext, useContext, useState } from "react";

export const context = createContext();
const initData = {
  number: 1,
  word: "moo",
};

export const useData = () => {
  const { data } = useContext(context);
  return data;
}

export const useDataUpdate = () => {
  const { changeNumber, changeWord } = useContext(context);
  return { changeNumber, changeWord };
}

const AppProvider = ({ children }) => {
  const [data, setData] = useState(initData);
  const changeWord = (newWord) => {
    setData({ ...data, word: newWord });
  };
  const changeNumber = (newNumber) => {
    setData({ ...data, number: newNumber });
  };

  const value = {
    data,
    changeNumber,
    changeWord
  };

  return (
    <context.Provider value={value}>
      {children}
    </context.Provider>
  );
};

export default AppProvider;
