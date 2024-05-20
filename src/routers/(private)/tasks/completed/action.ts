import {QueryClient} from '@tanstack/react-query';
import {LoaderFunctionArgs, redirect} from 'react-router-dom';

const {REACT_APP_BASE_URL_API} = process.env;

export const closeTask =
    (queryClient: QueryClient) =>
        async ({request, params}: LoaderFunctionArgs) => {

            const formData = await request.formData();

            const newPost = {
                isActive: formData.get('isActive'),
                status: formData.get('status'),
                id: formData.get('id')
            };

            try {
                await fetch(`${REACT_APP_BASE_URL_API}${newPost.id}/`, {
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

            return redirect('/tasks/in-process');
        };
