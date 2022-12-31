import { useHistory, Redirect } from 'react-router-dom'

import { InputScreen, Button, BackButton, ButtonContainer } from '../components'
import { RouteProps } from '../types'

const options = [
  {
    hideMissing: true,
    text: 'Yes',
  },
  {
    hideMissing: false,
    text: 'No',
  },
]

const SelectHideMissing = ({
  collageGenerationParams: { type: collageType },
  setCollageGenerationParams,
}: RouteProps) => {
  const history = useHistory()

  const onSelectOption = (hideMissing: boolean) => {
    setCollageGenerationParams((params) => ({ ...params, hideMissing }))
    history.push('/generate')
  }

  return (
    <InputScreen
      title={`Do you want to hide ${collageType} with missing artwork?`}
    >
      <ButtonContainer>
        {options.map(({ hideMissing, text }) => (
          <Button key={text} onClick={() => onSelectOption(hideMissing)}>
            {text}
          </Button>
        ))}
        <BackButton />
      </ButtonContainer>
    </InputScreen>
  )
}

export default SelectHideMissing
