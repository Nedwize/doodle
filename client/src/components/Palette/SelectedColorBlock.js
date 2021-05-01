import styled from "styled-components";

export default styled.div`
  background-color: ${(props) => props.color};
  height: 2.5em;
  width: 2.5em;
  cursor: pointer;
  border: 3px solid white;
  border-radius: 50%;
  padding: 4px;
  margin-right: 1em;
`;
