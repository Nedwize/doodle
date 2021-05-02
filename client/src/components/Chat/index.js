import ChatBox from "./ChatBox";
import ChatMessage from "./ChatMessage";
import ChatContainer from "./ChatContainer";
import InputBox from "./InputBox";

const arr = [
  "17689900968790099879688767",
  "aasfusgaoasin",
  "afhausdhas",
  "aishosahd",
  "paishfoa",
  "aisfhalsh",
];

const Chat = () => {
  return (
    <ChatBox>
      <InputBox type="text" placeholder="Type Your Guess Here" style={{}} />
      <ChatContainer>
        {arr.map((element) => {
          return (
            <ChatMessage>
              <p
                style={{
                  paddingLeft: "8px",
                  paddingTop: "4px",
                  paddingBottom: "4px",
                  margin: "0",
                }}
              >{`Aman : ${element}`}</p>
            </ChatMessage>
          );
        })}
      </ChatContainer>
    </ChatBox>
  );
};

export default Chat;
