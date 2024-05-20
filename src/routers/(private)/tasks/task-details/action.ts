import {QueryClient} from '@tanstack/react-query';
import {LoaderFunctionArgs, redirect} from 'react-router-dom';

const {REACT_APP_BASE_URL_API} = process.env;

export const updateTask =
    (queryClient: QueryClient) =>
        async ({request, params}: LoaderFunctionArgs) => {
            const formData = await request.formData();

            const newPost = {
                status: formData.get('status'),
                urgency: formData.get('urgency'),
                isActive: formData.get('isActive')
            };

            try {
                await fetch(`${REACT_APP_BASE_URL_API}${params.taskId}/`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Token ' + localStorage.getItem('token')
                    },
                    body: JSON.stringify(newPost)
                });
                await queryClient.refetchQueries({queryKey: ['tasks']});
            } catch (error) {
                throw error;
            }

            return redirect('/');
        };
