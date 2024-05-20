import {LoaderFunctionArgs, redirect} from 'react-router-dom';

const {REACT_APP_BASE_URL_AUTH} = process.env;

export const signUpAction = () =>

    async ({request, params}: LoaderFunctionArgs) => {
        const formData = await request.formData();

        const signUn = {
            email: formData.get('email'),
            username: formData.get('username'),
            password: formData.get('password'),
        };

        try {
            await fetch(`${REACT_APP_BASE_URL_AUTH}register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signUn)
            }).then((res) => {
                if (res.status >= 200 && res.status < 300) {
                    return res.json();
                } else {
                    let error = new Error(res.statusText);
                    throw error
                }
            }).then((data) => {
                localStorage.setItem("token", data.token)
            })
        } catch (error) {
            return {error: "Не удалось создать пользователя"};
        }

        if (localStorage.getItem('token')) {
            return  redirect('/')
        } else {
            return null
        }

    };
