import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TaskList from '@/components/task_list/current_tasks/TaskList';
import {ITask} from "@/model/ITask";

export function TasksInProcessPage() {
  const tasks = useLoaderData() as ITask[];


  return <>{tasks && <TaskList tasks={tasks} />}</>;
}

