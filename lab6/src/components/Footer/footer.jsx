import './footer.css'
import Facebook from '../../images/facebook.svg'
import Insta from '../../images/insta.svg'

function footer() {
    return (
        <div className='footer'>
            <div className='socials'>
                <img src={Facebook} alt="fb" className='social-medias' />
                <img src={Insta} alt="Inst" className='social-medias' />
            </div>
            <div className="copyright">Copyright @ 2022</div>
        </div>
    )
}

export default footer;