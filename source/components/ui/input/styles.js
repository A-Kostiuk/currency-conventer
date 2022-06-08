import styled from 'styled-components';

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;

export const Field = styled.input`
  width: 100%;
  border-radius: 5px;
  padding: 10px 20px;
  border: 1px solid ${(props) => props.theme.colors.darkGrey};
  font-family: inherit;
  background-color: ${(props) => props.theme.colors.lightGrey};
  font-size: 20px;
`;
