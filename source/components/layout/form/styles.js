import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: ${(props) => props.theme.tabletWidth}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
  }

  @media (min-width: ${(props) => props.theme.laptopWidth}) {
    gap: 100px;
  }
`;
