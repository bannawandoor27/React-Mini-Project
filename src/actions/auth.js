import {
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGIN_FAIL,
    LOGIN_FAIL_SUCCESS,
    LOGOUT,
    SET_MESSAGE
} from './types'

import AuthService from '../services/auth.service'

export const register = (username, password,email) =>(dispatch)=>{
    return AuthService.register(username, password,email).then(
        (response)=>{
            dispatch({
                type:REGISTER_SUCCESS
            });

            dispatch({
                type:SET_MESSAGE,
                payload:response.data.message
            })
            return Promise.resolve()
        },
        (error) =>{
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

            dispatch({type:REGISTER_FAIL});

            dispatch({
                type:SET_MESSAGE,
                payload:message
            });
            return Promise.reject();
        }
    )};
    