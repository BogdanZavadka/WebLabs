import './login.css'
import {Link, useNavigate} from "react-router-dom";
import {Form, Formik, useField} from "formik";
import * as Yup from "yup";
import ErrorMessage from "../Checkout/error_message";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setIsLogged} from "../../storage/slice";

function TextInput({label, ...props}) {

    const [field, meta] = useField(props);
    // let correctPassword = localStorage.getItem();

    return (
        <div className='input-obj'>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className='text-input' {...field} {...props} />
            <ErrorMessage meta={meta}/>
        </div>
    );
}

export default function Login(){
    const dispatcher = useDispatch();
    const navigate = useNavigate();
    return (
        <Formik initialValues={{
            email: '',
            password: ''
        }} validationSchema={Yup.object({
            email: Yup.string()
                .required('Email is required'),
            password: Yup.string()
                .required('Password is required'),
        })
        } onSubmit={({email, password}) => {
            let correctPassword = localStorage.getItem(email);
            if (correctPassword && password === correctPassword){
                dispatcher(setIsLogged(true));
                navigate('/home');
            }
            else {
                alert('Email or password is incorrect')
            }
        }}>
            {() => (
                <Form className='Login'>
                    <div className='form'>
                        <h1>Login form</h1>
                        <TextInput label='Email' name='email' type='email' placeholder='Enter email...'/>
                        <TextInput label='Password' name='password' type='password' placeholder='Enter password...'/>
                        <div className='sign-up'>
                            <div>Not a member?</div>
                            <Link to='/registration'>Sign up</Link>
                        </div>
                        <button type='submit'>SIGN IN</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}