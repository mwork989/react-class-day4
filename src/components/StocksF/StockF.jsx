import { useEffect, useState } from "react"
import axios from "axios";
const StockFunctionalComponent =()=>{

    const [stocks,setStocks] = useState([])
    
    useEffect(()=>{
        axios.get('http://localhost:3000/stocks').then((response)=>{
            setStocks(response.data)
        })
    },[])

    

    return (
        <div>
            <h1>Stocks Functional Component</h1>
          
            <section className="stock-section">
                {
                    stocks && stocks.map( (stock,index) =>{
                        return (
                           
                            <div id={stock.id} className="stock-container" key={index}>
                                <div>
                                    <p>{stock.stockName}</p>
                                    <p>{stock.stockMarketCap}</p>
                                    <p>{stock.stockMSector}</p>
                                    <p>{stock.symbol}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </section>
        </div>
    )

    

}
export default StockFunctionalComponent