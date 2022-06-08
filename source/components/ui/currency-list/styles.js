import styled from 'styled-components';

export const Select = styled.select`
  font-size: 20px;
  width: 80px;
  border-radius: 5px;
  padding: 10px 5px;
  border: 1px solid ${(props) => props.theme.colors.darkGrey};
  font-family: inherit;
  background-color: ${(props) => props.theme.colors.lightGrey};
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;
