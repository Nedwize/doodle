import CanvasDraw from "react-canvas-draw";

import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import PlayAreaContainer from "./components/PlayAreaContainer";
import CanvasContainer from "./components/CanvasContainer";
import ChatBox from "./components/ChatBox";
import Footer from "./components/Footer";

import Palette from "./components/Palette";
import Players from "./components/PlayersBar/index";
import { useEffect, useState } from "react";

import { io } from "socket.io-client";

function App() {
  const [brushColor, setBrushColor] = useState("#000");
  const [brushRadius, setBrushRadius] = useState(7);
  const [saveableCanvas, setSaveableCanvas] = useState("");

  useEffect(() => {
    const socket = io("http://localhost:4000", { transports: ["websocket"] });

    socket.on("message", (message) => {
      console.log(message);
    });
  }, []);

  return (
    <Wrapper>
      <Nav />
      <PlayAreaContainer>
        <Players />
        <CanvasContainer>
          <CanvasDraw
            onChange={() => console.log("onChange")}
            canvasWidth={"60vw"}
            canvasHeight={"75vh"}
            gridColor={"rgba(150,150,150,0.2)"}
            brushColor={brushColor}
            brushRadius={brushRadius}
            ref={(canvasDraw) => setSaveableCanvas(canvasDraw)}
          />
        </CanvasContainer>
        <ChatBox />
      </PlayAreaContainer>
      <Footer>
        <Palette
          setColor={(e) => {
            setBrushColor(e);
          }}
          clearCanvas={() => {
            saveableCanvas.clear();
          }}
          undoCanvas={() => {
            saveableCanvas.undo();
          }}
          setRadius={(e) => {
            setBrushRadius(e);
          }}
        />
      </Footer>
    </Wrapper>
  );
}

export default App;
