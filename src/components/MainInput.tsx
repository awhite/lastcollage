import styled from 'styled-components'
import Input, { InputProps } from '@material-ui/core/Input'

interface Props extends InputProps {
  center: boolean
}

const MainInput = ({ center, ...otherProps }: Props) => (
  <Input classes={{ input: 'input' }} autoFocus {...otherProps} />
)

export default styled(MainInput)`
  margin-bottom: 24px;
  display: flex;
  justify-content: center;

  & .input {
    ${(props) => (props.center ? 'text-align: center;' : '')};
  }
`
