import axios from "axios";
import { Component } from "react";
import { Link,Route } from "react-router-dom";
import './Stocks.css'

import StockDetails from "../StockDetails/StockDetails";
class Stocks extends Component{
     constructor(){
        super()
        this.state={
            stocks:[]
         }
     }
     render(){
        

        const stockTemplate = this.state.stocks.map( (stock,index) =>{
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

        return (
                <div>
                    <h1>Stocks</h1>
                    <p>{this.props.match.type}</p>
                    <section className="stock-section">{stockTemplate}</section>
                    <ul>
                        <li><Link to="/stocks/stockname, RiceBran Technologies">Stock Name</Link></li>
                        <li><Link to="/stocks/stockmarketcap, 1,2,3">Stock Market cap</Link></li>
                        <li><Link to="/stocks/stockindustry, software,infra,semiconductor">Stock Industry</Link></li>
                    </ul>
                    <Route path="/stocks/:details" component={StockDetails}></Route>
                </div>
        )
     }

     componentDidMount(){
        axios.get('http://localhost:3000/stocks').then((response)=>{
  
            this.setState({
                stocks : response.data
            })
        })
     }
     
}
export default Stocks;