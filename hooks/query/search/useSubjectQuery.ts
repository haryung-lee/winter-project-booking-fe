import { useQuery } from '@tanstack/react-query'
import { getAsync } from '@api/index'

interface FetchSubjectListType {
  type: 'department' | 'name' | 'professor'
  value?: string
}

interface FetchSubjectType {
  id: number
}

type SubjectIdType = {
  id: number
  name: string
  professor: string
  subjectType: string
  url: string
  department: string
  books: {
    id: number
  }[]
}

export const useSubjectQuery = ({ type, value }: FetchSubjectListType) => {
  return useQuery(
    ['subject', 'list', type, value],
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

export const useSubjectIdQuery = ({ id }: FetchSubjectType) => {
  return useQuery(
    ['subject', 'id', id],
    () => getAsync<SubjectIdType>(`/subjects/${id}`),
    {
      enabled: !!id,
    }
  )
}
