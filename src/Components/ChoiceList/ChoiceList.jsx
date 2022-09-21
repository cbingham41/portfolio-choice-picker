import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import "./ChoiceList.scss";

const ChoiceList = ({ choiceList, deleteChoice }) => {
  const theme = useContext(ThemeContext);
  return (
    <div
      className="listWrapper"
      style={{ backgroundColor: theme.appSecondary }}
    >
      <ul className="unorderedList">
        {choiceList.map((value, index) => {
          return (
            <li
              key={`${value}-${index}`}
              className="choiceItem"
              style={{
                color: theme.flip,
                backgroundColor: theme.background,
              }}
            >
              {value}
              <input
                className="choiceButton"
                type="button"
                value="Delete"
                style={{
                  backgroundColor: theme.cardBackground,
                  color: theme.flip,
                }}
                onClick={() => {
                  deleteChoice(index);
                }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ChoiceList;
