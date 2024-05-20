import React from 'react';
import {Form, NavLink} from 'react-router-dom';
import s from '@/styles/authorization.module.scss';
import {useFormik} from "formik";
import * as yup from "yup";
import {
    useSubmit,
    useActionData,
    useNavigation,
} from "react-router-dom";
import Spinner from "@/common/Spinner";


type SignInFormData = {
    username: string;
    password: string;
};

const validationSchema = yup.object({
    username: yup.string().default("Invalid username").required("username is required"),
    password: yup.string().min(5, "Пароль должен содержать больше 5 символов"),
});

const SignIn = () => {

    const submit = useSubmit();
    const actionData = useActionData();
    const navigation = useNavigation();
    const {error}: any = actionData || {};


    const formik = useFormik<SignInFormData>({
        initialValues: {
            username: "",
            password: "",

        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            submit(values, {method: "post"});

        },
    });

    return (
        <div className={s.main}>

            <h1>Войти</h1>
            {error && <span className={s.error}>{error}</span>}

            <Form method="post" onSubmit={formik.handleSubmit} className={s.form}>
                <input value={formik.values.username}
                       onChange={formik.handleChange}
                       id="username"
                       name="username"
                       placeholder="Логин" type="text"
                       required/>
                <input value={formik.values.password}
                       onChange={formik.handleChange}
                       name={'password'} id="password" placeholder="Пароль" type="password" required/>

                <label className={s.error}>{formik.errors.password}</label>

                <button type='submit' disabled={navigation.state === "submitting"}>
                    {navigation.state === "submitting" && <Spinner/>}
                    Войти
                </button>
            </Form>

            <div className={s.register}>
                <label
                    htmlFor="terms"
                    className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-300">
                    Нет аккаунта?{' '}
                    <NavLink to="/sign-up" className="text-blue-600 hover:underline dark:text-blue-500">
                        Зарегистрироваться!
                    </NavLink>
                </label>
            </div>
        </div>
    );
};

export default SignIn;
