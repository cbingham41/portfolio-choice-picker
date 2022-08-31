import React, { useContext, useState } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import "./PickerCarousel.scss";

const PickerCarousel = ({ choiceList }) => {
  const theme = useContext(ThemeContext);
  const [chosenItem, setChosenItem] = useState("");
  const pickChoice = () => {
    setChosenItem(choiceList[Math.floor(Math.random() * choiceList.length)]);
  };

  return (
    <div class="carouselWrapper">
      {chosenItem ? (
        <div
          className="carousel"
          style={{ backgroundColor: theme.appBackground }}
        >
          <div className="chosenItem" style={{ color: theme.accent }}>
            {chosenItem}
          </div>
        </div>
      ) : (
        []
      )}

      <input
        type="button"
        value="Make A Choice"
        className="pickerButton"
        style={
          choiceList.length
            ? { backgroundColor: theme.accent, color: theme.bright }
            : {
                backgroundColor: theme.appBackground,
                color: theme.flip,
              }
        }
        onClick={pickChoice}
      />
    </div>
  );
};

export default PickerCarousel;
