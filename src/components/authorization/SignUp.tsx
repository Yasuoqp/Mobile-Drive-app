import React from 'react';
import {Form, NavLink, useActionData, useNavigation, useSubmit} from "react-router-dom";
import {useFormik} from "formik";
import * as yup from "yup";


type SignUpFormData = {
    username: string;
    password: string;
    email: string;
};

const validationSchema = yup.object({
    email: yup.string().email("Неверный электронный адрес ").required("Email is required"),
    username: yup.string().default("Invalid username").required("username is required"),
    password: yup.string().min(5, "Пароль должен содержать больше 5 символов"),
});

const SignUp = () => {


    const submit = useSubmit();
    const actionData = useActionData();
    const navigation = useNavigation();
    const {error}: any = actionData || {};


    const formik = useFormik<SignUpFormData>({
        initialValues: {
            username: "",
            password: "",
            email: "",
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            submit(values, {method: "post"});
        },
    });

    return (
        <div className=" flex items-center justify-center h-screen">
            <div className=" p-8 rounded-lg shadow-lg max-w-sm w-full">
                <div className="flex justify-center mb-6">
          <span className="inline-block bg-gray-200 rounded-full p-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                  fill="currentColor"
                  d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"
              />
            </svg>
          </span>
                </div>
                <h2 className="text-2xl font-semibold text-center mb-4">Создать новый аккаунт</h2>
                <p className="text-gray-400 text-center mb-6">Введите свои данные для регистрации</p>
                <Form method="post" onSubmit={formik.handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email"
                               className="text-gray-400 mb-3 block text-sm font-medium leading-6 text-balance">Логин</label>
                        <input
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            name={'username'}
                            type="text"
                            id="username"
                            className=" w-64 rounded-full p-3 ps-10 border-2 border-rose-700 bg-transparent text-white"
                            required
                            placeholder="Логин"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email"
                               className="mb-3 text-gray-400 block text-gray-400 text-sm font-semibold mb-2">
                            Электронный адрес
                        </label>
                        <input
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            name='email'
                            type="email"
                            id="email"
                            className="w-64 rounded-full p-3 ps-10 border-2 border-rose-700 bg-transparent text-white"
                            required
                            placeholder="Почта"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="mb-3 block text-gray-400 text-sm font-semibold mb-2">
                            Пароль *
                        </label>
                        <input
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            type="password"
                            id="password"
                            name="password"
                            className=" w-64 rounded-full p-3 ps-10 border-2 border-rose-700 bg-transparent text-white"
                            required
                            placeholder="••••••••"
                        />
                        <p className="text-gray-600 text-xs mt-1">
                            Должно содержать 1 заглавную букву, 1 цифру, мин. 8 символов.
                        </p>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        Регистрация
                    </button>
                    <p className="text-gray-600 text-xs text-center mt-4">
                        Елси у вас уже есть аккаунт нажмите ==={'> '}
                        <NavLink to='/sign-in' className="text-blue-500 hover:underline">
                            Войти!
                        </NavLink>
                        .
                    </p>
                </Form>
            </div>
        </div>
    );
};

export default SignUp;