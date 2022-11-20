import './checkout.css'
import success_image from '../../images/success.svg'
import {Link} from "react-router-dom";

export default function Success(){
    return(
        <div className='Success'>
            <img src={success_image} alt='success'/>
            <h1>Success!</h1>
            <div className='success-info'>Your order was sent to processing. Check your email for further information.</div>
            <Link to='/catalog'>
                <button>Back to catalog</button>
            </Link>
        </div>
    )
}