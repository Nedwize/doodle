import styled from "styled-components";

export default styled.div`
  background-color: #000;
  border: 2px solid #fff;
  border-radius: 50%;
  height: ${(props) => `${props.value + 10}px`};
  width: ${(props) => `${props.value + 10}px`};
  cursor: pointer;
  padding: 0;
  margin: 0.5em;
`;
