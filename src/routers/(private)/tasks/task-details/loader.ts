import { QueryClient } from '@tanstack/react-query';
import { LoaderFunctionArgs } from 'react-router-dom';
import { fetchTaskQuery } from '@/services/taskServices';

export const loader = (queryClient: QueryClient) => {
  return async ({ params }: LoaderFunctionArgs) => {
    if (params.taskId) {
      return await fetchTaskQuery(queryClient, params.taskId);
    }
    return null;
  };
};
