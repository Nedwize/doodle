import ChatBox from "./ChatBox";
import ChatMessage from "./ChatMessage";
import ChatContainer from "./ChatContainer";
import InputBox from "./InputBox";
import ChatContent from "./ChatContent";

const arr = [
  "1768990097",
  "aasfusgaoasin",
  "afhausdhas",
  "aishosahd",
  "paishfoa",
  "aisfhalsh",
  "1768990097",
  "aasfusgaoasin",
  "afhausdhas",
  "aishosahd",
  "paishfoa",
  "aisfhalsh",
  "1768990097",
  "aasfusgaoasin",
  "afhausdhas",
  "aishosahd",
  "paishfoa",
  "aisfhalsh",
];

const Chat = () => {
  return (
    <ChatBox>
      <InputBox type="text" placeholder="Type Your Guess Here" />
      <ChatContainer>
        {arr.map((element) => {
          return (
            <ChatMessage>
              <ChatContent>{`Aman : ${element}`}</ChatContent>
            </ChatMessage>
          );
        })}
      </ChatContainer>
    </ChatBox>
  );
};

export default Chat;
