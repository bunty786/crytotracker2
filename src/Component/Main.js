import React from 'react'
import './Coins.css'


const Main = ({name,image,symbol,price,volume,priceChange,marketcap}) => {
    return (
        <div className="coin-cotainer">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto" />
                    <h3>{name}</h3>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">₹{price}</p>
                    <p className="coin-volume">₹{volume.toLocaleString()}</p>
                    {priceChange < 0 ? (
                        <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
                    ) : (
                        <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
                    )}
                    <p className="coin-marketcap">MKTCap:₹{marketcap.toLocaleString()}
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default Main
