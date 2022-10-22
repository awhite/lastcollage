import React, { useState } from 'react'
import { useHistory, Redirect } from 'react-router-dom'

import { InputScreen, Error, ResultDescription, Button, ButtonContainer } from '../components'
import styled from 'styled-components'
import { formatUnixForFile } from '../util'
import { CollageGenerationParams, RouteProps } from '../types'

const CollageImg = styled.img`
  width: 100%;
`

interface CollageDisplayParams {
  imgUrl: string
  downloadPath: string
  filename: string
  downloadDisabled: boolean
  onClick: () => void
}

interface ShowCollageState {
  imgUrl: string
  downloadPath: string
  errorMessage: any
  rowNum: number
  colNum: number
}

const CollageDisplay = ({ imgUrl, downloadPath, filename, downloadDisabled, onClick }: CollageDisplayParams) => {
  if (downloadDisabled) return renderImg()
  return (
    <a href={downloadPath} download={filename} onClick={onClick}>
      {renderImg()}
    </a>
  )

  function renderImg() {
    return (
      <picture>
        <source srcSet={imgUrl} type="image/webp" />
        <source srcSet={downloadPath} type="image/png" />
        <CollageImg
          crossOrigin="anonymous"
          src={downloadPath}
          className="img-responsive"
          alt="Collage (click to download)"
        />
      </picture>
    )
  }
}

const StyledButton = styled(Button)`
  margin-top: 64px;
`

const ShowCollage = ({ collageGenerationParams }: RouteProps) => {
  const history = useHistory()
  const { location } = history

  const { period, type } = collageGenerationParams
  const [haveClickedDownload, setHaveClickedDownload] = useState(false)
  const { imgUrl, downloadPath, errorMessage, rowNum, colNum } = location.state as ShowCollageState

  const startOver = () => {
    history.push('/')
  }

  const filename = (() => {
    const periodStr = (() => {
      if (typeof period === 'object') {
        return `${formatUnixForFile(period[0])}_${formatUnixForFile(period[1])}`
      }
      return period
    })()

    return `collage_${type}_${colNum}x${rowNum}_${periodStr}.png`
  })()

  if (errorMessage) {
    return <Error message={errorMessage} startOver={startOver} />
  }

  const onClickDownload = () => {
    setHaveClickedDownload(true)
    setTimeout(() => setHaveClickedDownload(false), 5000)
  }

  return (
    <InputScreen>
      <ResultDescription {...(collageGenerationParams as CollageGenerationParams)} colNum={colNum} rowNum={rowNum} />
      <CollageDisplay
        imgUrl={imgUrl}
        downloadPath={downloadPath}
        filename={filename}
        downloadDisabled={haveClickedDownload}
        onClick={onClickDownload}
      />
      <ButtonContainer>
        <StyledButton onClick={startOver}>Start Over</StyledButton>
      </ButtonContainer>
    </InputScreen>
  )
}

export default ShowCollage
