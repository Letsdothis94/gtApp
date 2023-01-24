import BasicMenu from './Menu'
function Header({confirmEvent, loginData, setLoginData}){
    return(
        <div style={{display:'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1%'}}>
            <BasicMenu confirmEvent={confirmEvent}/>
            <h1>Title</h1>
            <h1>Logo</h1>
            <div>Login</div>
        </div>
    )
}

export default Header