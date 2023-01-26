import BasicMenu from './Menu'

function Header({confirmEvent, loginData, setLoginData}){
    return(
        <div style={{display:'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1%', backgroundColor:'#1A1A1D',color: '#FF5A5F'}}>
            <BasicMenu confirmEvent={confirmEvent}/>
            <h1>Title</h1>
            <h1 style={{color: '#E77170'}}>Logo</h1>
        </div>
    )
}

export default Header