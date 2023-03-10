import { useQuery } from '@tanstack/react-query'
import { getAsync } from '@api/index'

interface FetchBookListType {
  bookId: number
}

export const useSubjectQuery = ({ bookId }: FetchBookListType) => {
  return useQuery(
    ['book-list', bookId],
    () =>
      getAsync<[]>(`/books`, {
        params: {
          bookId,
        },
      }),
    {
      enabled: !!bookId,
    }
  )
}
