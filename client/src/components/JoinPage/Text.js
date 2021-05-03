import styled from "styled-components";

export default styled.h1`
  border: 1px solid ${(props) => props.color};
  background-color: ${(props) => props.color};
  border-radius: 4px;
  text-align: center;
  margin-top: 10px;
  margin-left: 10px;
  padding: 10;
  width: 50px;
  /* color:  */
  /* transform: rotate(-20deg); */
  transform: ${(props) => props.rotation};
  box-shadow: 0 10px 10px 0 hsl(0deg 0% 3% / 50%);
  color: white;
`;
