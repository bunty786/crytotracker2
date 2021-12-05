import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Main from './Component/Main';



function App() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res =>{
      setCoins(res.data)
      console.log(res.data);
    })
    .catch(error => console.log(error))
  },[])

  const handleOnchange = e => {
    setSearch(e.target.value)
  }
  const filerdCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <>
    
      <div className="coin-search">
        <h1 className="coin-text">Crypto Tracker</h1>
        <from>
          <input  className="coin-input " type="text" placeholder="Search a Coin" onChange={handleOnchange} ></input>
        </from>
      </div>  
      <div className='coin-app'>
    {
    filerdCoins.map(coin =>{
      return(
        <Main key={coin.id}
        name={coin.name}
        image={coin.image}
        symbol={coin.symbol}
        marketcap={coin.market_cap}
        price={coin.current_price}
        priceChange={coin.market_cap_change_percentage_24h}
        volume={coin.total_volume}
        />
      )
    })}
    </div>
    
    </>
  );
}

export default App;
