import React, { useState, useRef, useEffect } from "react";
import { themeList, ThemeContext } from "../../Context/ThemeContext";
import ChoicePicker from "../ChoicePicker/ChoicePicker";

const AppData = () => {
  //==============================
  // List of choices
  //==============================
  const [choiceList, setChoiceList] = useState(
    localStorage.getItem("choiceList")
      ? JSON.parse(localStorage.getItem("choiceList"))
      : []
  );
  const [isEmpty, setisEmpty] = useState(!choiceList.length > 0);
  useEffect(() => {
    setisEmpty(!choiceList.length > 0);
  }, [choiceList]);

  // Add to list
  const [inputValue, setInputValue] = useState("");
  const updateInput = (e) => {
    setInputValue(e.target.value);
  };
  const addChoice = (e) => {
    e.preventDefault();
    if (inputValue) {
      setChoiceList([...choiceList, inputValue]);
      setInputValue("");
    }
  };

  // Remove from list
  const deleteChoice = (delIndex) => {
    setChoiceList(
      choiceList.filter((value, index) => {
        return index !== delIndex;
      })
    );
  };

  // Update localStorage
  const previousChoiceList = useRef(choiceList);
  useEffect(() => {
    if (
      JSON.stringify(previousChoiceList.current) !== JSON.stringify(choiceList)
    ) {
      localStorage.setItem("choiceList", JSON.stringify(choiceList));
      previousChoiceList.current = [...choiceList];
    }
  }, [choiceList]);

  //==============================
  // Themes
  //==============================
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("themeMode")
      ? localStorage.getItem("themeMode")
      : "light"
  );
  const toggleTheme = (e) => {
    e.preventDefault();
    if (themeMode === "light") {
      setThemeMode("dark");
    } else {
      setThemeMode("light");
    }
  };

  //==============================
  // Conditional rendering
  //==============================
  return (
    <ThemeContext.Provider value={{ ...themeList[themeMode] }}>
      <ChoicePicker
        inputValue={inputValue}
        updateInput={updateInput}
        choiceList={choiceList}
        isEmpty={isEmpty}
        addChoice={addChoice}
        deleteChoice={deleteChoice}
        toggleTheme={toggleTheme}
      />
    </ThemeContext.Provider>
  );
};

export default AppData;
