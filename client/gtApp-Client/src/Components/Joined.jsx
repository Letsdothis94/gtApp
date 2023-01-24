function Joined({confirmEvent}){
    return(
        <>
            {
                confirmEvent.map((x)=> {
                    return(
                        <ul>
                            <li>{x.title}</li>
                        </ul>
                    )
                })
            }
        </>
    )
}

export default Joined