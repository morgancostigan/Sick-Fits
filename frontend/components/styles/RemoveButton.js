import styled from 'styled-components';

const RemoveButton = styled.button`
  background: none;
  color: black;
  font-size: 2rem;
  border: 0;

  &:hover{
    color: var(--red);
    cursor: pointer;
  }
`;

export default RemoveButton;
