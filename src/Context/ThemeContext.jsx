import { createContext } from "react";

export const themeList = {
  light: {
    themeName: "light",
    background: "#FFFFFF",
    appBackground: "#FBEEE6",
    appHover: "F6F6F6",
    cardBackground: "#EDBB99",
    appPrimary: "#C0392B",
    appSecondary: "#FDEDEC",
    header: "#000000",
    accent: "#CB4335",
    accentHover: "#7300FE",
    flip: "#212121",
    bright: "#FFFFFF",
  },
  dark: {
    themeName: "dark",
    background: "#121212",
    appBackground: "#5D5D5D",
    appHover: "7300fe",
    cardBackground: "#292929",
    appPrimary: "#000000",
    appSecondary: "#1F1F1F",
    header: "#909090",
    accent: "#FF98FE",
    accentHover: "#7300FE",
    flip: "#E1E1E1",
    bright: "#000000",
  },
};

export const ThemeContext = createContext(themeList["light"]);
