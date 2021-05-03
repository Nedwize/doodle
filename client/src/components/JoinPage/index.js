import Wrapper from "./Wrapper";
import FormContainer from "./FormContainer";
import HeaderContainer from "./HeaderContainer";
import Text from "./Text";
import Button from "./Button";

const JoinPage = () => {
  const generateRandom = () => {
    const num = Math.floor(Math.random() * 30 + 10);
    return num.toString();
  };
  const generateSign = () => {
    const sign = Math.floor(Math.random() * 10 + 1) > 5 ? "-" : "+";
    return sign;
  };

  const randomColor = () => {
    const colors = [
      "#000",
      "#ef130b",
      "#ffe400",
      "#00cc00",
      "#00b2ff",
      "#231fd3",
      "#a300ba",
    ];
    const num = Math.floor(Math.random() * (colors.length - 1) + 1);
    return colors[num];
  };

  return (
    <Wrapper>
      <FormContainer>
        <HeaderContainer>
          <h3 style={{ marginBottom: "2px", color: "#404040" }}>Welcome to</h3>
        </HeaderContainer>
        <HeaderContainer>
          <Text
            color={randomColor()}
            rotation={`rotate(${generateSign()}${generateRandom()}deg)`}
          >
            D
          </Text>
          <Text
            color={randomColor()}
            rotation={`rotate(${generateSign()}${generateRandom()}deg)`}
          >
            O
          </Text>
          <Text
            color={randomColor()}
            rotation={`rotate(${generateSign()}${generateRandom()}deg)`}
          >
            O
          </Text>
          <Text
            color={randomColor()}
            rotation={`rotate(${generateSign()}${generateRandom()}deg)`}
          >
            D
          </Text>
          <Text
            color={randomColor()}
            rotation={`rotate(${generateSign()}${generateRandom()}deg)`}
          >
            L
          </Text>
          <Text
            color={randomColor()}
            rotation={`rotate(${generateSign()}${generateRandom()}deg)`}
          >
            E
          </Text>
        </HeaderContainer>
        <Button>Join PlayRoom</Button>
        <Button>Create PlayRoom</Button>
      </FormContainer>
    </Wrapper>
  );
};

export default JoinPage;
