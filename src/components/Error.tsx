import React from 'react'
import styled from 'styled-components'
import InfoBubble from './InfoBubble'
import Button from './Button'
import InputScreen from './InputScreen'
import ButtonContainer from './ButtonContainer'

const Bubble = styled(InfoBubble)`
  margin-bottom: 48px;
`

interface Props {
  message: string
  startOver: React.MouseEventHandler<HTMLButtonElement>
}

const Error = ({ message, startOver }: Props) => (
  <InputScreen>
    <Bubble>
      <h1>An error occurred</h1>
      <h3>{message}</h3>
    </Bubble>
    <ButtonContainer>
      <Button onClick={startOver}>Start Over</Button>
    </ButtonContainer>
  </InputScreen>
)

export default Error
