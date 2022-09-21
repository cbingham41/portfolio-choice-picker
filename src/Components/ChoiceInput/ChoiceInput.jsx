import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import "./ChoiceInput.scss";

const ChoiceInput = ({ inputValue, updateInput, addChoice, isEmpty }) => {
  const theme = useContext(ThemeContext);
  return (
    <div className="inputOutsideWrapper">
      <form className="inputinsideWrapper">
        <input
          type="text"
          className="addChoiceText"
          value={inputValue}
          onChange={updateInput}
        />
        <input
          type="submit"
          className="addChoiceButton"
          value="Add Choice"
          onClick={addChoice}
          style={
            isEmpty
              ? { backgroundColor: theme.accent, color: theme.bright }
              : {
                  backgroundColor: theme.appBackground,
                  color: theme.flip,
                }
          }
        />
      </form>
    </div>
  );
};

export default ChoiceInput;
