import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { SubText, FlexCol, Button, CollageDescription } from '.'
import ButtonContainer from './ButtonContainer'
import { CollageGenerationParams } from '../types'

const Container = styled(FlexCol)`
  margin-top: 32px;
`

const StyledButton = styled(Button)`
  margin-bottom: 20px;
`

interface Props {
  info: CollageGenerationParams
}

const RegenerateLastCollage = ({ info }: Props) => {
  const history = useHistory()

  const generate = () => history.push('/load', info)

  return (
    <Container>
      <SubText>or regenerate your last collage</SubText>
      <ButtonContainer>
        <StyledButton outlined onClick={generate}>
          Regenerate
        </StyledButton>
      </ButtonContainer>
      <SubText>
        (
        <CollageDescription {...info} />)
      </SubText>
    </Container>
  )
}

export default RegenerateLastCollage
