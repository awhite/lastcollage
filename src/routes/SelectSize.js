import React, { useReducer } from 'react';
import styled from 'styled-components';
import { InputScreen, Button, SizeSelectionGrid } from '../components';
import { SelectType } from '../routes';
import { KEY_ENTER } from '../util/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SelectSize = ({ navigate }) => {
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
  }

  const [state, dispatch] = useReducer(reducer, {
    sizeSelected: false,
    rowNum: -1,
    colNum: -1,
  });

  const onSelectOption = key => {
    const { rowNum, colNum } = state;
    navigate(SelectType, { rowNum, colNum });
  };

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
        <Button onClick={() => onSelectOption(KEY_ENTER)} disabled={!state.sizeSelected}>Next</Button>
      </Container>
    </InputScreen>
  )
}

export default SelectSize;
