import './checkout.css'
import {Form, Formik, useField} from "formik";
import * as Yup from 'yup'
import {Link, useNavigate} from "react-router-dom";
import ErrorMessage from "./error_message";

function TextInput({label, ...props}) {

    const [field, meta] = useField(props);

    return (
        <div className='input-obj'>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className='text-input' {...field} {...props} />
            <ErrorMessage meta={meta} />
        </div>
    );
}

export default function Checkout() {
    const navigate = useNavigate();
    return (
        <Formik initialValues={{
            name: '',
            surname: '',
            email: '',
            phoneNumber: '',
            address: ''
        }} validationSchema={Yup.object({
            name: Yup.string()
                .min(3, 'Name field is too short')
                .max(20, 'Name field is too long')
                .matches('^[A-Z]+', 'Name field should start with uppercase letter')
                .required('Name field is required'),
            surname: Yup.string()
                .min(3, 'Surname field is too short')
                .max(30, 'Surname field is too long')
                .matches('^[A-Z]+', 'Surname field should start with uppercase letter')
                .required('Surname field is required'),
            email: Yup.string()
                .min(10, 'Email field is too short')
                .max(50, 'Email field is too long')
                .required('Email field is required')
                .matches('@', 'Email should contain @'),
            phoneNumber: Yup.number()
                .typeError('Phone number field is numeric')
                .integer('Phone number field cannot have . symbol')
                .required('Phone number field is required'),
            address: Yup.string()
                .min(10, 'Address field is too short')
                .max(100, 'Address field is too long')
                .required('Address field is required')
        })} onSubmit={() => {
            navigate('/success')
        }}>
            {() => (
                <Form>
                    <h1>Checkout</h1>
                    <TextInput label='Name' name='name' type='text' placeholder='Enter name...'/>
                    <TextInput label='Surname' name='surname' type='text' placeholder='Enter surname...'/>
                    <TextInput label='Email' name='email' type='email' placeholder='Enter email...'/>
                    <TextInput label='Phone number' name='phoneNumber' type='text'
                               placeholder='Enter phone number...'/>
                    <TextInput label='Address' name='address' type='text' placeholder='Enter address...'/>
                    <div className='checkout-buttons'>
                        <Link to='/cart'>
                            <button>Go back</button>
                        </Link>
                        <button type='submit'>Continue</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}