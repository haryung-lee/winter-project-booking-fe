import { useQuery } from '@tanstack/react-query'
import { getAsync } from '@api/index'

export type SubjectListType = {
  id: number
  department: string
  name: string
  professor: string
  subjectType: string
}

interface FetchSubjectListType {
  type: 'department' | 'subject' | 'professor'
  value?: string
}

export const useSubjectQuery = ({ type, value }: FetchSubjectListType) => {
  return useQuery(
    ['subject-list', type, value],
    () =>
      getAsync<[]>(`/subjects`, {
        params: {
          [type]: value,
        },
      }),
    {
      enabled: !!value,
    }
  )
}
