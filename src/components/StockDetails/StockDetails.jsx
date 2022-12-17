const StockDetails =(props)=>{
    return (
        <div>
            <h1>StockDetails component</h1>
            <p>{props.match.params.details}</p>
        </div>
       
    )
}
export default StockDetails