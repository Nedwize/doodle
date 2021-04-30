import Demo from "./components/Canvas";
import CanvasDraw from "react-canvas-draw";

import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import PlayAreaContainer from "./components/PlayAreaContainer";
import PlayersBar from "./components/PlayersBar";
import CanvasContainer from "./components/CanvasContainer";
import ChatBox from "./components/ChatBox";
import Footer from "./components/Footer";
import PaletteContainer from "./components/PaletteContainer";
import ColorInput from "./components/ColorInput";
import { useState } from "react";

function App() {
  const [brushColor, setBrushColor] = useState("#000");

  return (
    <Wrapper>
      <Nav />
      <PlayAreaContainer>
        <PlayersBar />
        <CanvasContainer>
          <CanvasDraw
            onChange={() => console.log("onChange")}
            canvasWidth={"60vw"}
            canvasHeight={"75vh"}
            gridColor={"rgba(150,150,150,0.2)"}
            brushColor={brushColor}
          />
        </CanvasContainer>
        <ChatBox />
      </PlayAreaContainer>
      <Footer>
        <PaletteContainer>
          <ColorInput onChange={(e) => setBrushColor(e.target.value)} />
        </PaletteContainer>
      </Footer>
    </Wrapper>
  );
}

export default App;
