import { QueryClient } from '@tanstack/react-query';
import { fetchTasksQuery } from '@/services/taskServices';

export const loader = (queryClient: QueryClient) => {
  return async () => {
    return await fetchTasksQuery(queryClient, false, false);
  };
};