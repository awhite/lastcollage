import React from 'react'
import { InputScreen, Button } from '../components'
import { KEY_YES, KEY_NO } from '../util/constants'

const AccountPrompt = ({ navigation: { navigate } }) => {
  const onSelectOption = (key) => {
    switch (key) {
      case KEY_YES:
        navigate(2)
        break
      case KEY_NO:
        navigate(1)
        break
      default:
        throw new Error(`Unsupported option ${key}`)
    }
  }

  return (
    <InputScreen title="Do you have a Last.fm account?">
      <Button onClick={() => onSelectOption(KEY_YES)}>Yes</Button>
      <Button onClick={() => onSelectOption(KEY_NO)}>No</Button>
    </InputScreen>
  )
}

export default AccountPrompt
