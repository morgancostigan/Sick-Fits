import styled from 'styled-components';

const RemoveButton = styled.button`
  background: none;
  color: black;
  font-size: 2rem;
  border: 0;
  position: absolute;
  z-index: 2;
  right: 0;
  &:hover{
    background: var(--red);
    cursor: pointer;
  }
`;

export default RemoveButton;
