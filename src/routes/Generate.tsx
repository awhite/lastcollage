import { useHistory } from 'react-router-dom'

import { InputScreen, Button, ButtonContainer, BackButton } from '../components'
import { useKeyButton } from '../hooks'
import { KEYCODE_ENTER } from '../util/constants'

const Generate = () => {
  const history = useHistory()

  const load = () => {
    history.push('/load')
  }

  useKeyButton(KEYCODE_ENTER, load)

  return (
    <InputScreen title="Click the button to generate your collage">
      <ButtonContainer>
        <Button onClick={load}>Generate</Button>
        <BackButton />
      </ButtonContainer>
    </InputScreen>
  )
}

export default Generate
