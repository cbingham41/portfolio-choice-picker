import React, { useContext } from "react";
import ChoiceInput from "../ChoiceInput/ChoiceInput";
import ChoiceList from "../ChoiceList/ChoiceList";
import PickerCarousel from "../PickerCarousel/PickerCarousel";
import { ThemeContext } from "../../Context/ThemeContext";
import "./ChoicePicker.scss";

const ChoicePicker = ({
  inputValue,
  updateInput,
  choiceList,
  addChoice,
  deleteChoice,
  toggleTheme,
  isEmpty,
}) => {
  const theme = useContext(ThemeContext);
  return (
    <div className="appWrapper" style={{ backgroundColor: theme.background }}>
      <header
        className="themeWrapper"
        style={{ backgroundColor: theme.appPrimary }}
      >
        <h1 className="appTitle">Choice Picker</h1>
        <input
          type="button"
          className="themeToggle"
          value={theme.themeName}
          onClick={toggleTheme}
        />
      </header>
      <div className="subHeader">
        <h4 style={{ color: theme.header }}>
          Have better things to do with your time?{" "}
          <span style={{ color: theme.accent }}>Don't decide, just click!</span>
        </h4>
      </div>
      <section className="choiceWrapper">
        <ChoiceInput
          inputValue={inputValue}
          updateInput={updateInput}
          addChoice={addChoice}
          isEmpty={isEmpty}
        />

        <ChoiceList choiceList={choiceList} deleteChoice={deleteChoice} />

        <PickerCarousel choiceList={choiceList} />
      </section>
    </div>
  );
};

export default ChoicePicker;
