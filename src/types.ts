export type CollageType = 'albums' | 'artists' | 'tracks'
export type FixedPeriod =
  | '1week'
  | '1month'
  | '3month'
  | '6month'
  | '1year'
  | 'forever'
export type DateInterval = [number, number]
export type Period = FixedPeriod | DateInterval
export type GridIndex = number

export interface CollageGenerationParams {
  username: string
  period: Period
  rowNum: GridIndex
  colNum: GridIndex
  type: CollageType
  showName: boolean
  hideMissing: boolean
}

export interface RouteProps {
  collageGenerationParams: Partial<CollageGenerationParams>
  setCollageGenerationParams: React.Dispatch<
    React.SetStateAction<Partial<CollageGenerationParams>>
  >
}

export interface CollageResponse {
  path: string
  downloadPath: string
  rows: number
  cols: number
}
