import { useLoaderData } from 'react-router-dom';
import TaskInfo from '@/components/task_list/current_tasks/TaskInfo';

export function TaskDetailPage() {
  const task = useLoaderData();

  return <>{task && <TaskInfo infoTask={task} />}</>;
}

