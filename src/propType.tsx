export type ReportItemType = {
  startDate: string
  endDate: string
  period: number
  cycle: number
}

export type ReportListType = {
  dataList: ReportItemType[]
}

export type AirplanType = {
  id: number
  name: string
  country: string
  logo: string
  slogan: string
  headQuaters: string
  website: string
  established: string
}

export type PassengerItemType = {
  airline: AirplanType[]
  name: string
  trips: number
  _v: number
  _id: string
}

export type PassengerListType = {
  dataList: PassengerItemType[]
}
