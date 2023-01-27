import BasicMenu from './Menu'
import { Link } from 'react-router-dom'


function Header({user, setConfirmEvent, confirmEvent, loginData, setLoginData}){
    return(
        <>
            <div style={{display:'grid', alignItems: 'center', padding: '1%', backgroundColor:'#1A1A1D',color: '#FF5A5F', height: '25vh'}}>
                <BasicMenu user={user} setConfirmEvent={setConfirmEvent} confirmEvent={confirmEvent}/>
                <Link style={{height: '20vh', justifySelf: 'center'}} to='/'><img src='src/assets/logo.png' style={{height: '100%', alignSelf: 'center'}}/></Link>
            </div>
        </>
    )
}

export default Header