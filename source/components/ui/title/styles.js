import styled from 'styled-components';

export const StyleTitle = styled.h1`
  line-height: 40px;
  font-weight: 400;
  max-width: ${(props) => (props.$maxWidth ? `${props.$maxWidth}px` : '100%')};
  margin: 0;
  margin-bottom: ${(props) =>
    props.$marginBottom ? `${props.$marginBottom}px` : 0};
  font-size: ${(props) => {
    switch (props.level) {
      case 1:
        return '36px';
      case 2:
        return '30px';
      case 3:
        return '24px';
      case 4:
        return '18px';
      default:
        return '16px';
    }
  }};
`;
