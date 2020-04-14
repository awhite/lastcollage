import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  >:not(:last-child) {
    margin-right: 24px;
  }
`;

export default ButtonContainer;
