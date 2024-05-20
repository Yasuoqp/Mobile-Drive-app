import { QueryClient } from '@tanstack/react-query';


const { REACT_APP_BASE_URL_API } = process.env;

export async function fetchTasks(filter: boolean,draft:boolean) {
  try {
    return await fetch(`${REACT_APP_BASE_URL_API}?isActive=${filter}&draft=${draft}`, {
      headers: {
        Authorization: 'Token ' + localStorage.getItem('token')
      }
    }).then((res) => res.json());
  } catch (error) {
    throw error; // обработка ошибки }
  }
}

export const tasksQuery = (filter: boolean, draft:boolean) => ({
  queryKey: ['tasks', filter,draft],
  queryFn: () => fetchTasks(filter,draft)
});
export const fetchTasksQuery = (queryClient: QueryClient, filter: boolean, draft: boolean) =>
  queryClient.ensureQueryData(tasksQuery(filter, draft));






export async function fetchTask(id: string) {
  try {
    return await fetch(`${REACT_APP_BASE_URL_API}${id}/`, {
      headers: {
        Authorization: 'Token ' + localStorage.getItem('token')
      }
    }).then((res) => res.json());
  } catch (error) {
    throw error;
  }
}

export const taskQuery = (id: string) => ({ queryKey: ['task', id], queryFn: () => fetchTask(id) });
export const fetchTaskQuery = (queryClient: QueryClient, id: string) =>
  queryClient.ensureQueryData(taskQuery(id));


