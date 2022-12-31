import { useHistory } from 'react-router-dom'
import Button, { ButtonProps } from './Button'

const BackButton = ({ className }: ButtonProps) => {
  const history = useHistory()
  return (
    <Button className={className} outlined onClick={() => history.goBack()}>
      Back
    </Button>
  )
}

export default BackButton
