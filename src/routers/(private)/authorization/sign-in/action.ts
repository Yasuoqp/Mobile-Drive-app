import {LoaderFunctionArgs, redirect,} from 'react-router-dom';

const {REACT_APP_BASE_URL_AUTH} = process.env;

export const signInAction = () =>

    async ({request, params}: LoaderFunctionArgs) => {
        const formData = await request.formData();

        const signIn = {
            username: formData.get('username'),
            password: formData.get('password'),
        };

        try {
            await fetch(`${REACT_APP_BASE_URL_AUTH}login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signIn)
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
            return {error: "Пользователя не существует. Не верный логин или пароль"};
        }

        if (localStorage.getItem('token')) {
            return redirect('/')
        } else {
            return null
        }

    };
