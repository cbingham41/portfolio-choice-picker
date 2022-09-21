import React, { useContext, useState, useEffect, useRef } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import "./PickerCarousel.scss";

const PickerCarousel = ({ choiceList }) => {
  const theme = useContext(ThemeContext);
  const [chosenItem, setChosenItem] = useState("");
  const pickChoice = () => {
    setChosenItem(choiceList[Math.floor(Math.random() * choiceList.length)]);
  };
  const oldList = useRef(choiceList);
  useEffect(() => {
    if (oldList.current !== choiceList) setChosenItem("");
  }, [choiceList]);

  return (
    <div class="carouselWrapper">
      {chosenItem ? (
        <div className="carousel" style={{ color: theme.appBackground }}>
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
