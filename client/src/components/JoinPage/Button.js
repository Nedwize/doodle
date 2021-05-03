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
  font-size: 24px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: 200ms;

  &:hover {
    background-color: #146ca4;
    border: 2px solid #146ca4;
  }
`;
