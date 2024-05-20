import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CompletedTasks from '@/components/task_list/completed_tasks/CompletedTasks';
import {ITask} from "@/model/ITask";

export function TasksInCompletedPage() {
  const completed = useLoaderData() as ITask[];

  return <>{completed && <CompletedTasks tasks={completed} />}</>;
}

