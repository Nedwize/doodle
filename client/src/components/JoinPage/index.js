import Wrapper from "./Wrapper";
import FormContainer from "./FormContainer";
import HeaderContainer from "./HeaderContainer";
import Text from "./Text";
import Button from "./Button";
import InputBox from "./InputBox";
import Container from "../Container";
import { useState } from "react";

const JoinPage = () => {
  const [showForm, setShowForm] = useState("null");
  const doodle = "DOODLE";

  const renderForms = () => {
    if (showForm === "null") {
      return (
        <Container column>
          <Button onClick={() => setShowForm("join")}>Join PlayRoom</Button>
          <Button onClick={() => setShowForm("create")}>Create PlayRoom</Button>
        </Container>
      );
    } else if (showForm === "join") {
      return (
        <Container column>
          <InputBox placeholder="Enter your name" />
          <InputBox placeholder="Enter PlayRoom ID" />
          <Button>Play!</Button>
          <a
            href="#"
            style={{ cursor: "pointer" }}
            onClick={() => setShowForm("null")}
          >
            Go Back
          </a>
        </Container>
      );
    } else if (showForm === "create") {
      return (
        <Container column>
          <InputBox placeholder="Enter your name" />
          <Button>Play!</Button>
          <a
            href="#"
            style={{ cursor: "pointer" }}
            onClick={() => setShowForm("null")}
          >
            Go Back
          </a>
        </Container>
      );
    }
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
          {[...doodle].map((element) => {
            return (
              <Text
                color={randomColor()}
                rotation={`rotate(${generateSign()}${generateRandom()}deg)`}
              >
                {element}
              </Text>
            );
          })}
        </HeaderContainer>
        {renderForms()}
      </FormContainer>
    </Wrapper>
  );
};

const generateRandom = () => {
  const num = Math.floor(Math.random() * 30 + 10);
  return num.toString();
};
const generateSign = () => {
  const sign = Math.floor(Math.random() * 10 + 1) > 5 ? "-" : "+";
  return sign;
};

export default JoinPage;
