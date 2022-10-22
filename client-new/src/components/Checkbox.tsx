import { FormControlLabel, Checkbox as MaterialCheckbox, FormControlLabelProps } from '@material-ui/core'

interface Props {
  checked: boolean
  onChange: React.ChangeEventHandler<HTMLInputElement>
  text: string
  labelPlacement: 'end' | 'start' | 'top' | 'bottom'
}

const Checkbox = ({ checked, onChange, text, labelPlacement }: Props) => (
  <FormControlLabel
    control={<MaterialCheckbox checked={checked} onChange={onChange} name="checkbox" color="primary" />}
    label={text}
    labelPlacement={labelPlacement}
  />
)

Checkbox.defaultProps = {
  labelPlacement: 'start',
}

export default Checkbox
