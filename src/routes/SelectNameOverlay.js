import React from 'react'
import { useHistory, Redirect } from 'react-router-dom'

import { InputScreen, Button, BackButton, ButtonContainer } from '../components'
import { TYPE_ALBUMS, TYPE_ARTISTS, TYPE_TRACKS } from '../lastfm'

const options = [
  {
    showName: 'true',
    text: 'Yes',
  },
  {
    showName: 'false',
    text: 'No',
  },
]

const SelectNameOverlay = () => {
  const history = useHistory()
  const { location } = history

  if (!location.state) return <Redirect to="/" />

  const onSelectOption = (showName) => history.push('/hideMissing', { ...location.state, showName })

  const getTitle = () => {
    switch (location.state.type) {
      case TYPE_ALBUMS:
        return 'Do you want to overlay the album and artist name on each cover?'
      case TYPE_ARTISTS:
        return 'Do you want to overlay the artist name on each image?'
      case TYPE_TRACKS:
        return 'Do you want to overlay the track and artist name on each cover?'
      default:
        throw new Error('Invalid type')
    }
  }

  return (
    <InputScreen title={getTitle()} center>
      <ButtonContainer>
        {options.map(({ showName, text }) => (
          <Button key={showName} onClick={() => onSelectOption(showName)}>
            {text}
          </Button>
        ))}
        <BackButton onClick={() => history.goBack()} />
      </ButtonContainer>
    </InputScreen>
  )
}

export default SelectNameOverlay
