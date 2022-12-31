import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import {
  PageTitle,
  PageContent,
  MainText,
  Red,
  Link,
  Button,
  RegenerateLastCollage,
  MaintenanceModeBubble,
  ButtonContainer,
} from '../components'
import { CollageGenerationParams } from '../types'

interface Props {
  isMaintenanceMode?: boolean
}

const Welcome = ({ isMaintenanceMode }: Props) => {
  const [lastCollageInfo, setLastCollageInfo] =
    useState<CollageGenerationParams | null>(null)

  useEffect(() => {
    const serializedLastCollage = localStorage.getItem('lastcollage')
    if (!serializedLastCollage) return

    const lastCollageGenerationParams = JSON.parse(
      serializedLastCollage
    ) as CollageGenerationParams
    setLastCollageInfo(lastCollageGenerationParams)
  }, [])

  const history = useHistory()

  const getStarted = () => {
    history.push('/username', {})
  }

  return (
    <>
      <PageTitle>
        Welcome to <Red>Lastcollage</Red>
      </PageTitle>
      <PageContent>
        <MainText>
          Generate a collage from your{' '}
          <Link href="https://www.last.fm/">Last.fm</Link> scrobbles
        </MainText>
        {isMaintenanceMode && <MaintenanceModeBubble />}
        <ButtonContainer>
          <Button onClick={getStarted}>Get started</Button>
        </ButtonContainer>
        {lastCollageInfo && <RegenerateLastCollage info={lastCollageInfo} />}
      </PageContent>
    </>
  )
}

export default Welcome
