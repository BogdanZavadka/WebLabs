import './registration.css'
import {Link, useNavigate} from "react-router-dom";
import {Form, Formik, useField} from "formik";
import * as Yup from 'yup'
import ErrorMessage from "../Checkout/error_message";

function TextInput({label, ...props}) {

    const [field, meta] = useField(props);

    return (
        <div className='input-obj'>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className='text-input' {...field} {...props} />
            <ErrorMessage meta={meta}/>
        </div>
    );
}

export default function Registration() {
    const navigate = useNavigate();
    return (
        <Formik initialValues={{
            username: '',
            email: '',
            password: '',
            retypedPassword: ''
        }} validationSchema={Yup.object({
            username: Yup.string()
                .required('Username is required')
                .min(3, 'Username is too short')
                .max(10, 'Username is too long'),
            email: Yup.string()
                .matches('@', 'Email should contain @ symbol')
                .required('Email is required'),
            password: Yup.string()
                .min(3, 'Password is too short')
                .max(15, 'Password is too long')
                .matches('\\d', 'Password must contain at least 1 digit')
                .matches('[a-z]', 'Password must contain at least 1 lowercase letter')
                .matches('[A-Z]', 'Password must contain at least 1 uppercase letter')
                .required('Password is required'),
            retypedPassword: Yup.string()
                .oneOf([Yup.ref('password')], 'Passwords do not match')
                .required('This field is required')

        })
        } onSubmit={({email, password}) => {
            localStorage.setItem(email, password);
            navigate('/');
        }}>
            {() => (
                <Form className='Registration'>
                    <div className='form'>
                        <h1>Register new account</h1>
                        <TextInput label='Username' name='username' type='text' placeholder='Enter username...'/>
                        <TextInput label='Email' name='email' type='email' placeholder='Enter email...'/>
                        <TextInput label='Password' name='password' type='password' placeholder='Enter password...'/>
                        <TextInput label='Retype password' name='retypedPassword' type='password' placeholder='Enter password again...'/>
                        <div className='sign-in'>
                            <div>Already a member?</div>
                            <Link to='/'>Sign in</Link>
                        </div>
                        <button type='submit'>SIGN UP</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}