import React, { Component } from 'react'
import styled from 'styled-components'

import { red, darkRed, grey } from '../styles/colors'
import { FlexCol, MainText, InfoBubble } from '.'

const NOT_SELECTED = 0
const HOVER = 1
const SELECTED = 2
const SELECTED_AND_HOVER = 3

const LARGE_COLLAGE_NUM_IMAGES = 200

const GRID_ROWS = 20
const GRID_COLS = GRID_ROWS

const GridSquareBase = styled.div`
  flex: 1 0 auto;
  position: relative;
  background-color: ${(props) => props.color};
  border: 1px solid white;

  ::after {
    content: '';
    float: left;
    display: block;
    padding-top: 100%;
  }
`

interface GridSquareProps {
  selected: number
  mouseOnGrid: boolean
  onMouseEnter: () => void
  onClick: () => void
}

interface GridSquareState {
  mouseOn: boolean
}

class GridSquare extends Component<GridSquareProps, GridSquareState> {
  state = {
    mouseOn: false,
  }

  render() {
    return (
      <GridSquareBase
        {...this.props}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        color={this.getColor()}
      />
    )
  }

  getColor = () => {
    const { selected, mouseOnGrid } = this.props
    switch (selected) {
      case SELECTED:
        return red
      case SELECTED_AND_HOVER:
        return mouseOnGrid ? darkRed : red
      case HOVER:
        return mouseOnGrid ? darkRed : grey
      default:
        return grey
    }
  }

  onMouseEnter = () => {
    this.props.onMouseEnter()
    this.setState({ mouseOn: true })
  }

  onMouseLeave = () => {
    this.setState({ mouseOn: false })
  }
}

const Grid = styled.div`
  margin: 0 auto;
  width: 90vw;
  max-width: 600px;
  height: 90vw;
  max-height: 600px;
  border: 1px solid white;
  margin-bottom: 36px;
  cursor: pointer;
`

const GridRow = styled.div`
  display: flex;
`

const Grey = styled.span`
  color: grey;
`

const StyledCol = styled(FlexCol)`
  align-self: stretch;
`

const SlowDisclaimer = styled(({ className }) => (
  <InfoBubble className={className}>
    Large collages can take up to 3 minutes to generate
  </InfoBubble>
))`
  margin: 0 0 32px 0;
`

interface Props {
  sizeSelected: boolean
  onSelectGridSize: (row: number, col: number) => void
}

type Point = { row: number; col: number }

interface State {
  cells: Array<Array<number>>
  mouseOn: boolean
  mouseX: number
  mouseY: number
  bottomRight: Point
  hoverBottomRight: Point
}

class SizeSelectionGrid extends Component<Props, State> {
  state = {
    cells: new Array(GRID_ROWS).fill(
      new Array(GRID_COLS).fill(NOT_SELECTED)
    ) as Array<Array<number>>,
    mouseOn: false,
    mouseX: 0,
    mouseY: 0,
    bottomRight: { row: -1, col: -1 },
    hoverBottomRight: { row: -1, col: -1 },
  }

  render() {
    const isLarge = (() => {
      const { bottomRight } = this.state
      const count = (bottomRight.col + 1) * (bottomRight.row + 1)
      return count >= LARGE_COLLAGE_NUM_IMAGES
    })()

    const isHoverLarge = (() => {
      const { hoverBottomRight } = this.state
      const count = (hoverBottomRight.col + 1) * (hoverBottomRight.row + 1)
      return count >= LARGE_COLLAGE_NUM_IMAGES
    })()

    return (
      <StyledCol>
        <MainText>{this.printSize()}</MainText>
        <Grid onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave}>
          {this.state.cells.map((row, rowNum) => (
            <GridRow key={`${rowNum}`}>
              {row.map((selected, colNum) => (
                <GridSquare
                  key={`${rowNum},${colNum}`}
                  onMouseEnter={() => this.onMouseEnterSquare(rowNum, colNum)}
                  onClick={() => this.onClickSquare(rowNum, colNum)}
                  selected={selected}
                  mouseOnGrid={this.state.mouseOn}
                />
              ))}
            </GridRow>
          ))}
        </Grid>
        {(isLarge || (this.state.mouseOn && isHoverLarge)) && (
          <SlowDisclaimer />
        )}
      </StyledCol>
    )
  }

  getBottomRight = () =>
    this.state.mouseOn ? this.state.hoverBottomRight : this.state.bottomRight

  getSizeHeadingFromBottomRight = (bottomRight = this.state.bottomRight) => {
    const cols = bottomRight.col + 1
    const rows = bottomRight.row + 1
    return `${cols} x ${rows}`
  }

  printSize = () => {
    const selectedSize = this.getSizeHeadingFromBottomRight()
    const hoverSize = (
      <Grey>
        {this.getSizeHeadingFromBottomRight(this.state.hoverBottomRight)}
      </Grey>
    )
    if (!this.state.mouseOn) {
      return selectedSize
    }
    if (this.props.sizeSelected) {
      if (this.hoveringOverSelected()) {
        return selectedSize
      }
      return (
        <span>
          {selectedSize} <Grey>({hoverSize})</Grey>
        </span>
      )
    }
    return hoverSize
  }

  onMouseOver = () => this.setState({ mouseOn: true })

  onMouseLeave = () => this.setState({ mouseOn: false })

  onMouseEnterSquare = (newRow: number, newCol: number) => {
    const selectedRow = this.state.bottomRight.row
    const selectedCol = this.state.bottomRight.col
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
                return SELECTED
              }
              return SELECTED_AND_HOVER
            }
            return SELECTED
          }
          return rowNum <= newRow && colNum <= newCol ? HOVER : NOT_SELECTED
        })
      ),
      hoverBottomRight: { row: newRow, col: newCol },
    })
  }

  onClickSquare = (newRow: number, newCol: number) => {
    this.setState({
      cells: this.state.cells.map((row, rowNum) =>
        row.map((_, colNum) =>
          rowNum <= newRow && colNum <= newCol ? SELECTED : NOT_SELECTED
        )
      ),
      bottomRight: { row: newRow, col: newCol },
    })
    this.props.onSelectGridSize(newRow + 1, newCol + 1)
  }

  hoveringOverSelected = () => {
    return (
      this.state.bottomRight.row === this.state.hoverBottomRight.row &&
      this.state.bottomRight.col === this.state.hoverBottomRight.col
    )
  }
}

export default SizeSelectionGrid
