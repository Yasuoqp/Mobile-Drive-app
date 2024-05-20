import { Layout } from '@/components/Layout';
import { QueryClient } from '@tanstack/react-query';
import { loaderTaskDetailsPage, TaskDetailPage } from '@/routers/(private)/tasks/task-details';
import { loaderTasksInProcessPage, TasksInProcessPage } from '@/routers/(private)/tasks/in-process';
import {
  loaderTasksInCompletedPage,
  TasksInCompletedPage
} from '@/routers/(private)/tasks/completed';
import {
    Route,
    createRoutesFromElements,
    createBrowserRouter,
    RouterProvider,
    redirect
} from 'react-router-dom';
import { updateTask } from '@/routers/(private)/tasks/task-details/action';
import { SignInPage } from '@/routers/(private)/authorization/sign-in/page';
import { SignUpPage } from '@/routers/(private)/authorization/sign-up/page';
import { signInAction } from '@/routers/(private)/authorization/sign-in/action';
import { Protected, ReverseProtection } from '@/routers/Protected';
import { signUpAction } from '@/routers/(private)/authorization/sign-up/action';
import {closeTask} from "@/routers/(private)/tasks/completed/action";

function App({ queryClient }: { queryClient: QueryClient }) {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route element={<Layout />}>
          <Route index loader={() => redirect('/tasks/in-process')} />
          <Route path="tasks">
            <Route path="in-process">
              <Route
                index
                loader={loaderTasksInProcessPage(queryClient)}
                element={
                  <Protected>
                    <TasksInProcessPage />
                  </Protected>
                }
              />
            </Route>
            <Route
              path="completed"
              loader={loaderTasksInCompletedPage(queryClient)}
              action={closeTask(queryClient)}
              element={
                <Protected>
                  <TasksInCompletedPage />
                </Protected>
              }
            />


            <Route
              path=":taskId"
              action={updateTask(queryClient)}
              loader={loaderTaskDetailsPage(queryClient)}
              element={
                <Protected>
                  <TaskDetailPage />
                </Protected>
              }
            />
          </Route>
        </Route>

          <Route
              path="logout"
              loader={async () => {
                  try {
                      await fetch('http://127.0.0.1:8000/api/auth/logout', {
                          method: 'POST',
                          headers: {
                              'Content-Type': 'application/json',
                              Connection:' keep-alive',
                              Authorization: 'Token ' + localStorage.getItem('token')
                          }
                      }).then((res) => {
                          if (res.status >= 200 && res.status < 300) {
                              return localStorage.clear();
                          }
                      });
                  } catch (error) {
                      throw error;
                  }
                  return redirect('/sign-in')
              }}
              element={'выход'}

          />

        <Route
          path="sign-in"
          action={signInAction()}
          element={
            <ReverseProtection>
              <SignInPage />
            </ReverseProtection>
          }
        />
        <Route path="sign-up" action={signUpAction()} element={<SignUpPage />} />
      </Route>
    ),
    { basename: '/' }
  );

  return <RouterProvider router={router} />;
}

export default App;
