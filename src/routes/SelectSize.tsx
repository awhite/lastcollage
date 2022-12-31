import { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import {
  InputScreen,
  Button,
  SizeSelectionGrid,
  ButtonContainer,
  BackButton,
} from '../components'
import { KEYCODE_ENTER } from '../util/constants'
import { useKeyButton } from '../hooks'
import { RouteProps } from '../types'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SelectSize = ({ setCollageGenerationParams }: RouteProps) => {
  const [state, setState] = useState({
    sizeSelected: false,
    rowNum: -1,
    colNum: -1,
  })

  const isFormFilled = () => state.sizeSelected

  const onSelectOption = () => {
    if (!isFormFilled()) return
    const { rowNum, colNum } = state
    setCollageGenerationParams((params) => ({ ...params, rowNum, colNum }))
    history.push('/overlay')
  }

  useKeyButton(KEYCODE_ENTER, onSelectOption)

  const history = useHistory()

  const onSelectGridSize = (rowNum: number, colNum: number) => {
    setState({ sizeSelected: true, rowNum, colNum })
  }

  return (
    <InputScreen title="Click a square in the grid below to specify the collage size">
      <SizeSelectionGrid
        sizeSelected={state.sizeSelected}
        onSelectGridSize={onSelectGridSize}
      />
      <Container>
        <ButtonContainer row>
          <Button onClick={onSelectOption} disabled={!isFormFilled()}>
            Next
          </Button>
          <BackButton />
        </ButtonContainer>
      </Container>
    </InputScreen>
  )
}

export default SelectSize
