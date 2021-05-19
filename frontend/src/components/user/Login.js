import React, { useState, useEffect } from 'react'
import Loader from '../layout/Loader'
import MetaData from '../layout/MetaData'
import {useAlert} from 'react-alert'
import {useDispatch, useSelector} from 'react-redux'
import {login, clearErrors} from '../../store/actions/userActions'
import FieldLevelValidationForm from "../login/Register";


const Login = ({history, location}) => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const {isAuthenticated, error, loading} = useSelector(state => state.auth);
    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {

        if (isAuthenticated) {
            alert.success('You login successfully!')
            history.push(redirect)
        }

        if (error) {
            alert.error('please insert correct email or password');
            alert.error('please enter email & password');
            dispatch(clearErrors());
        }

    }, [dispatch, alert, isAuthenticated, error, history])

    const onSubmit = ({password,email}) => {
        dispatch(login(email,password))
        if (error) {
            alert.error('please insert correct email or password');
            alert.error('please enter email & password');
            dispatch(clearErrors());
        }
    }

    return (
        <>
            {loading ? <Loader/> : (
                <>
                    <MetaData title={'Login'}/>
                    <div className="row wrapper">
                        <div className="col-10 col-lg-5">
                            <h1 className="mb-3">Login</h1>
                        <FieldLevelValidationForm onSubmit={onSubmit}/>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Login
