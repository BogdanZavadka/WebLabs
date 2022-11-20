import './checkout.css'

export default function ErrorMessage(props) {
    return (
        <>
            {props.meta.touched && props.meta.error ? (<div className='error'>
                {props.meta.error}
            </div>) : null}
        </>
    )
}