import { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios, { AxiosResponse } from 'axios'
import { useHistory } from 'react-router-dom'

import { InputScreen, InfoBubble, LoadingSpinner } from '../components'
import { BASE_URL } from '../util/constants'
import { useCallback } from 'react'
import { CollageResponse, RouteProps } from '../types'

const Bubble = styled(InfoBubble)`
  margin-top: 48px;
`

const LoadCollage = ({ collageGenerationParams }: RouteProps) => {
  const [isTakingLong, setTakingLong] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTakingLong(true)
    }, 10000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  const history = useHistory()
  const { location } = history

  const onCollageLoaded = useCallback(
    ({ path, downloadPath, rows, cols }: CollageResponse) => {
      history.replace('/collage', {
        imgUrl: path,
        downloadPath,
        rowNum: rows,
        colNum: cols,
      })
    },
    [history, location.state]
  )

  const onCollageLoadError = useCallback(
    (errorMessage: any) => {
      if (typeof errorMessage !== 'string') {
        errorMessage = 'Unknown error'
      }
      history.replace('/collage', { errorMessage })
    },
    [history]
  )

  const saveLastCollageInfo = useCallback(() => {
    const serializedCollageInfo = JSON.stringify(collageGenerationParams)
    localStorage.setItem('lastcollage', serializedCollageInfo)
  }, [])

  useEffect(() => {
    ;(async () => {
      try {
        const { data } = await axios.post(
          `${BASE_URL}/api/collage`,
          {
            collageGenerationParams,
          },
          {
            responseType: 'json',
          }
        )
        saveLastCollageInfo()
        onCollageLoaded(data)
      } catch ({ response }) {
        const axiosResponse = response as AxiosResponse
        if (axiosResponse.data && axiosResponse.data.message) {
          onCollageLoadError(axiosResponse.data.message)
        } else {
          onCollageLoadError(axiosResponse.statusText)
        }
      }
    })()
  }, [onCollageLoadError, onCollageLoaded, saveLastCollageInfo])

  return (
    <InputScreen title="Generating your collage...">
      <LoadingSpinner />
      {isTakingLong && <Bubble>Still working...</Bubble>}
    </InputScreen>
  )
}

export default LoadCollage
