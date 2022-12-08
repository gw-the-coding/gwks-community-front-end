interface BoardForKey {
  [key: string]: string | number | any
}

export default interface Board extends BoardForKey{
  communitySysId: any
  boardSysId?: number
  categorySysId: number
  boardId?: string
  title: string
  description: string
  views?: number
  status: OperationStatus
  isNotice: 'YES' | 'NO'
  createdAt?: string
  lastModifiedAt?: string
  deletedAt?: string
}

export enum OperationStatus {
  ACTIVE='ACTIVE',
  PAUSED= 'PAUSED',
  REMOVE= 'REMOVE'
}
