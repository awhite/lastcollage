import React, { useReducer } from 'react';
import styled from 'styled-components';

import { InputScreen, Button, SizeSelectionGrid, ButtonContainer, BackButton } from '../components';
import { KEYCODE_ENTER } from '../util/constants';
import { useKeyButton } from 'hooks';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SelectSize = ({ navigation: { navigateNext, navigateBack } }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'selectGridSize':
        const { rowNum, colNum } = action.payload;
        return {
          ...state,
          sizeSelected: true,
          rowNum,
          colNum,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    sizeSelected: false,
    rowNum: -1,
    colNum: -1,
  });

  const isFormFilled = () => state.sizeSelected;

  const onSelectOption = () => {
    if (!isFormFilled()) return;
    const { rowNum, colNum } = state;
    navigateNext({ rowNum, colNum });
  };

  useKeyButton(KEYCODE_ENTER, onSelectOption);

  const onSelectGridSize = (rowNum, colNum) => dispatch({
    type: 'selectGridSize',
    payload: {
      rowNum,
      colNum,
    },
  });

  return (
    <InputScreen title="Click a square in the grid below to specify the collage size">
      <SizeSelectionGrid
        sizeSelected={state.sizeSelected}
        onSelectGridSize={onSelectGridSize}
      />
      <Container>
        <ButtonContainer row>
          <Button onClick={onSelectOption} disabled={!isFormFilled()}>Next</Button>
          <BackButton onClick={navigateBack} />
        </ButtonContainer>
      </Container>
    </InputScreen>
  );
};

export default SelectSize;
