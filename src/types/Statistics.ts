import type { IncomingRequestCommand, RequestCommand } from './ocpp/Requests.js'
import type { CircularArray } from '../utils/index.js'
import type { WorkerData } from '../worker/index.js'

export interface TimestampedData {
  timestamp: number
  value: number
}

export type StatisticsData = Partial<{
  requestCount: number
  responseCount: number
  errorCount: number
  timeMeasurementCount: number
  measurementTimeSeries: CircularArray<TimestampedData>
  currentTimeMeasurement: number
  minTimeMeasurement: number
  maxTimeMeasurement: number
  totalTimeMeasurement: number
  avgTimeMeasurement: number
  medTimeMeasurement: number
  ninetyFiveThPercentileTimeMeasurement: number
  stdDevTimeMeasurement: number
}>

export interface Statistics extends WorkerData {
  id: string
  name: string
  uri: string
  createdAt: Date
  updatedAt?: Date
  statisticsData: Map<string | RequestCommand | IncomingRequestCommand, StatisticsData>
}

export interface InternalTemplateStatistics {
  configured: number
  added: number
  started: number
  indexes: Set<number>
}
