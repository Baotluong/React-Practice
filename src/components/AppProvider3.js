import { createContext, useContext, useState } from "react";

const initData = {
  number: 1,
  word: 'moo'
};

const context = createContext();

export const useData = () => {
  const { data } = useContext(context);
  return data;
}

export const useDataUpdate = () => {
  const { changeNumber } = useContext(context);
  return { changeNumber };
}

const AppProvider = ({ children }) => {
  const [data, setData] = useState(initData);

  const changeNumber = (newNumber) => {
    setData({ ...data, number: newNumber });
  }

  const value = {
    data,
    changeNumber
  }

  return (
    <context.Provider value={value}>
      { children }
    </context.Provider>
  )
};

export default AppProvider;