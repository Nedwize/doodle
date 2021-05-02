import styled from "styled-components";

export default styled.div`
  background-color: #fff;
  color: #121212;
  height: auto;
  width: 100%;
  padding: 4px 0px;
  /* text-align: center; */
  text-decoration: none;
  display: flex;
  font-size: 16px;
  font-weight: bold;
  align-items: center;
  /* justify-content: space-between; */
  /* border: 1px solid lightgray; */
  /* box-shadow: 0 5px 10px 0 hsl(0deg 0% 23% / 25%); */

  &:nth-child(even) {
    background-color: #ededed;
  }
`;
