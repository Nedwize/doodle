import styled from "styled-components";

export default styled.div`
  background-color: ${(props) => props.color};
  height: 3em;
  width: 3em;
  cursor: pointer;
  border: 3px solid white;
  border-radius: 50%;
  padding: 4px;
  margin-right: 1em;
`;
