import React, { Component } from 'react';
import styled from 'styled-components';

import { red, darkRed, grey } from '../styles/colors';
import { FlexCol, MainText, InfoBubble } from '../components';
import { desktop } from 'util/breakpoints';

const NOT_SELECTED = 0;
const HOVER = 1;
const SELECTED = 2;
const SELECTED_AND_HOVER = 3;

const LARGE_COLLAGE_NUM_IMAGES = 200;

const GRID_ROWS = 20;
const GRID_COLS = GRID_ROWS;

const GridSquareBase = styled.div`
  position: relative;
  width: 100%;
  background-color: ${props => props.color};
`;

class GridSquare extends Component {
  state = {
    mouseOn: false,
  };

  render() {
    return (
      <GridSquareBase
        {...this.props}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        color={this.getColor()}
      />
    );
  }

  getColor = () => {
    const { selected, mouseOnGrid } = this.props;
    switch (selected) {
      case SELECTED:
        return red;
      case SELECTED_AND_HOVER:
        return mouseOnGrid ? darkRed : red;
      case HOVER:
        return mouseOnGrid ? darkRed : grey;
      default:
        return grey;
    }
  };

  onMouseEnter = () => {
    this.props.onMouseEnter();
    this.setState({ mouseOn: true });
  };

  onMouseLeave = () => {
    this.setState({ mouseOn: false });
  };
}

const GridWrapper = styled.div`
  background: white;
  border: 2px solid white;
  margin-bottom: 36px;
  cursor: pointer;
  position: relative;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 2px;

  grid-template-columns: repeat(${GRID_COLS}, ${305 / GRID_COLS}px);
  grid-template-rows: repeat(${GRID_ROWS}, ${305 / GRID_COLS}px);
  width: 343px;

  ${desktop`
    grid-template-columns: repeat(${GRID_COLS}, ${562 / GRID_COLS}px);
    grid-template-rows: repeat(${GRID_ROWS}, ${562 / GRID_ROWS}px);
    width: 600px;
    height: 600px;
  `}
`;

const Grey = styled.span`
  color: grey;
`;

const StyledCol = styled(FlexCol)`
  align-self: stretch;
`;

const SlowDisclaimer = styled(({ className }) => (
  <InfoBubble className={className}>Large collages can take up to 3 minutes to generate</InfoBubble>
))`
  margin: 0 0 32px 0;
`;

class SizeSelectionGrid extends Component {
  state = {
    cells: new Array(GRID_ROWS).fill(new Array(GRID_COLS).fill(NOT_SELECTED)),
    mouseOn: false,
    mouseX: 0,
    mouseY: 0,
    bottomRight: { row: -1, col: -1 },
    hoverBottomRight: { row: -1, col: -1 },
  };

  render() {
    const isLarge = (() => {
      const { bottomRight } = this.state;
      const count = (bottomRight.col + 1) * (bottomRight.row + 1);
      return count >= LARGE_COLLAGE_NUM_IMAGES;
    })();

    const isHoverLarge = (() => {
      const { hoverBottomRight } = this.state;
      const count = (hoverBottomRight.col + 1) * (hoverBottomRight.row + 1);
      return count >= LARGE_COLLAGE_NUM_IMAGES;
    })();

    return (
      <StyledCol>
        <MainText>{this.printSize()}</MainText>
        <GridWrapper>
          <Grid onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave}>
            {this.state.cells.map((row, rowNum) => (
              <>
                {row.map((selected, colNum) => (
                  <GridSquare
                    key={`${rowNum},${colNum}`}
                    onMouseEnter={() => this.onMouseEnterSquare(rowNum, colNum)}
                    onClick={() => this.onClickSquare(rowNum, colNum)}
                    selected={selected}
                    mouseOnGrid={this.state.mouseOn}
                  />
                ))}
              </>
            ))}
          </Grid>
        </GridWrapper>
        {(isLarge || (this.state.mouseOn && isHoverLarge)) && <SlowDisclaimer />}
      </StyledCol>
    );
  }

  getBottomRight = () =>
    this.state.mouseOn ? this.state.hoverBottomRight : this.state.bottomRight;

  getSizeHeadingFromBottomRight = (bottomRight = this.state.bottomRight) => {
    const cols = bottomRight.col + 1;
    const rows = bottomRight.row + 1;
    return `${cols} x ${rows}`;
  };

  printSize = () => {
    const selectedSize = this.getSizeHeadingFromBottomRight();
    const hoverSize = <Grey>{this.getSizeHeadingFromBottomRight(this.state.hoverBottomRight)}</Grey>;
    if (!this.state.mouseOn) {
      return selectedSize;
    }
    if (this.props.sizeSelected) {
      if (this.hoveringOverSelected()) {
        return selectedSize;
      }
      return (
        <span>
          {selectedSize} <Grey>({hoverSize})</Grey>
        </span>
      );
    }
    return hoverSize;
  };

  onMouseOver = () => this.setState({ mouseOn: true });

  onMouseLeave = () => this.setState({ mouseOn: false });

  onMouseEnterSquare = (newRow, newCol) => {
    const selectedRow = this.state.bottomRight.row;
    const selectedCol = this.state.bottomRight.col;
    this.setState({
      cells: this.state.cells.map((row, rowNum) =>
        row.map((selected, colNum) => {
          if (selected === SELECTED || selected === SELECTED_AND_HOVER) {
            if (rowNum <= newRow && colNum <= newCol) {
              if (
                selectedRow < newRow ||
                selectedCol < newCol ||
                (selectedRow === newRow && selectedCol === newCol)
              ) {
                return SELECTED;
              }
              return SELECTED_AND_HOVER;
            }
            return SELECTED;
          }
          return rowNum <= newRow && colNum <= newCol ? HOVER : NOT_SELECTED;
        }),
      ),
      hoverBottomRight: { row: newRow, col: newCol },
    });
  };

  onClickSquare = (newRow, newCol) => {
    this.setState({
      cells: this.state.cells.map((row, rowNum) =>
        row.map((_, colNum) =>
          rowNum <= newRow && colNum <= newCol ? SELECTED : NOT_SELECTED,
        ),
      ),
      bottomRight: { row: newRow, col: newCol },
    });
    this.props.onSelectGridSize(newRow + 1, newCol + 1);
  };

  hoveringOverSelected = () => {
    return (
      this.state.bottomRight.row === this.state.hoverBottomRight.row &&
      this.state.bottomRight.col === this.state.hoverBottomRight.col
    );
  };
}

export default SizeSelectionGrid;
