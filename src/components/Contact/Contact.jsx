const Contact =({match})=>{
    return (
        <div>
            <h1>Contact component</h1>
            <p>{match.params.id}</p>
            <p>{match.params.designation}</p>
            <p>{match.params.address}</p>
        </div>
       
    )
}
export default Contact