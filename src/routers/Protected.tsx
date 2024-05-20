import {Navigate} from 'react-router-dom'

export function Protected({children}: any) {
    if (!localStorage.getItem('token')) {
        return <Navigate to='/sign-in' replace={false}/>
    } else {
        return children
    }
}

export function ReverseProtection({children}: any) {
    if (localStorage.getItem('token')) {
        return <Navigate to='/' replace={false}/>
    } else {
        return children
    }
}