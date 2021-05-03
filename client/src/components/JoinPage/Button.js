import styled from "styled-components";

export default styled.button`
  background-color: darkblue;
  border: 2px solid darkblue;
  color: white;
  width: 360px;
  margin: 10px 10px;
  padding: 15px 50px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: 200ms;
  box-shadow: 0 5px 10px 0 hsl(0deg 0% 10% / 25%);

  &:hover {
    background-color: blueviolet;
    border: 2px solid blueviolet;
  }
`;
