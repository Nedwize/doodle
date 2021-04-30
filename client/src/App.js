import Demo from "./components/Canvas";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import PlayAreaContainer from "./components/PlayAreaContainer";
import PlayersBar from "./components/PlayersBar";
import CanvasContainer from "./components/CanvasContainer";
import ChatBox from "./components/ChatBox";
import Footer from "./components/Footer";
import CanvasDraw from "react-canvas-draw";

function App() {
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
          />
        </CanvasContainer>
        <ChatBox />
      </PlayAreaContainer>
      <Footer />
    </Wrapper>
  );
}

export default App;
