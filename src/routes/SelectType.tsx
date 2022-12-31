import { useHistory } from 'react-router-dom'

import { InputScreen, Button, BackButton, ButtonContainer } from '../components'
import { TYPES } from '../lastfm'
import { CollageType, RouteProps } from '../types'

const SelectType = ({ setCollageGenerationParams }: RouteProps) => {
  const history = useHistory()

  const onSelectOption = (type: CollageType) => {
    setCollageGenerationParams((params) => ({ ...params, type }))
    history.push('/timespan')
  }

  return (
    <InputScreen title="What kind of collage?">
      <ButtonContainer>
        {[...TYPES.entries()].map(([key, title]) => (
          <Button key={key} onClick={() => onSelectOption(key)}>
            {title}
          </Button>
        ))}
        <BackButton />
      </ButtonContainer>
    </InputScreen>
  )
}

export default SelectType
