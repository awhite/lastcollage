import { useHistory } from 'react-router-dom'

import { InputScreen, Button, BackButton, ButtonContainer } from '../components'
import { RouteProps } from '../types'

const options = [
  {
    showName: true,
    text: 'Yes',
  },
  {
    showName: false,
    text: 'No',
  },
]

const SelectNameOverlay = ({
  collageGenerationParams,
  setCollageGenerationParams,
}: RouteProps) => {
  const history = useHistory()

  const onSelectOption = (showName: boolean) => {
    setCollageGenerationParams((params) => ({ ...params, showName }))
    history.push('/hideMissing')
  }

  const getTitle = () => {
    switch (collageGenerationParams.type) {
      case 'albums':
        return 'Do you want to overlay the album and artist name on each cover?'
      case 'artists':
        return 'Do you want to overlay the artist name on each image?'
      case 'tracks':
        return 'Do you want to overlay the track and artist name on each cover?'
      default:
        throw new Error('Invalid type')
    }
  }

  return (
    <InputScreen title={getTitle()}>
      <ButtonContainer>
        {options.map(({ showName, text }) => (
          <Button key={text} onClick={() => onSelectOption(showName)}>
            {text}
          </Button>
        ))}
        <BackButton />
      </ButtonContainer>
    </InputScreen>
  )
}

export default SelectNameOverlay
