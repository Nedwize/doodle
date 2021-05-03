import styled from "styled-components";

export default styled.input`
  padding: 12px 20px;
  margin: 10px;
  width: 360px;
  display: inline-block;
  border: 2px solid dodgerblue;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 18px;
  font-weight: 500;
  transition: 200ms;
  &:focus {
    outline: none;
    border: 2px solid purple;
  }
`;
