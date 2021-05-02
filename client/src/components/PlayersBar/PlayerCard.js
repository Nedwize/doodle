import styled from "styled-components";

export default styled.div`
  background-color: #fff;
  color: #121212;
  height: 2.2em;
  width: 13vw;
  margin: 8px 10px;
  padding: 3px 5px;
  text-align: center;
  text-decoration: none;
  display: flex;
  font-size: 16px;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid lightgray; */
  box-shadow: 0 5px 10px 0 hsl(0deg 0% 23% / 25%);

  &:nth-child(even) {
    background-color: #ededed;
  }
`;
