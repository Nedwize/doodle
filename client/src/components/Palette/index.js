import PaletteContainer from "./PaletteContainer";
import ColorInput from "./ColorInput";
import ColorBlock from "./ColorBlock";
import Container from "../Container";
import { useState } from "react";
import SelectedColorBlock from "./SelectedColorBlock";

const lightColors = [
  "#fff",
  "#c1c1c1",
  "#ef130b",
  "#ff7100",
  "#ffe400",
  "#00cc00",
  "#00b2ff",
  "#231fd3",
  "#a300ba",
  "#d37caa",
  "#a0522d",
];

const darkColors = [
  "#000",
  "#4c4c4c",
  "#740b07",
  "#c23800",
  "#e8a200",
  "#005510",
  "#00569e",
  "#0e0865",
  "#550069",
  "#a75574",
  "#63300d",
];

const Palette = ({ setColor }) => {
  const [selectedColor, setSelectedColor] = useState("#000");

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setColor(color);
  };

  return (
    <PaletteContainer>
      <Container>
        <SelectedColorBlock color={selectedColor} />
      </Container>
      <Container column>
        <Container>
          {lightColors.map((color, i) => {
            return (
              <ColorBlock
                color={color}
                key={i}
                onClick={(e) =>
                  handleColorSelect(e.target.getAttribute("color"))
                }
              />
            );
          })}
        </Container>
        <Container>
          {darkColors.map((color, i) => {
            return (
              <ColorBlock
                color={color}
                key={i}
                onClick={(e) =>
                  handleColorSelect(e.target.getAttribute("color"))
                }
              />
            );
          })}
        </Container>
      </Container>
    </PaletteContainer>
  );
};

export default Palette;
