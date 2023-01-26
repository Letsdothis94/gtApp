import BasicMenu from './Menu'
import { Link } from 'react-router-dom'


function Header({confirmEvent, loginData, setLoginData}){
    return(
        <div style={{display:'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1%', backgroundColor:'black'}}>
            <BasicMenu confirmEvent={confirmEvent}/>
            <h1><Link to='/'>Title</Link></h1>
            <h1>Logo</h1>
        </div>
    )
}

export default Header