import styled, { css } from 'styled-components';

const colStyles = css`
  flex-direction: column;

  >:not(:last-child) {
    margin-bottom: 20px;
  }

  >:last-child {
    margin-top: 24px;
  }
`;

const rowStyles = css`
  flex-direction: row-reverse;
  >:not(:last-child) {
    margin-bottom: 0;
    margin-left: 24px;
  }

  >:last-child {
    margin-top: 0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;

  ${colStyles}

  @media (min-width: 768px) {
    ${props => props.row && rowStyles}
  }
`;

export default ButtonContainer;
