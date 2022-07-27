// Storing it in our state in app.js, passing down to coin.js as a prop, then passing down again when we create our coin item here
import React from 'react'

import './Coins.css'

function CoinItem(props) {
  return (
    <div className='coin-row'>
        <p>
            {props.coins.market_cap_rank}
        </p>
        <div className="img-symbol">
            <img src={props.coins.image} alt="" />
            <p>{props.coins.symbol.toUpperCase()}</p>
        </div>
        <p>
            ${props.coins.current_price.toLocaleString()}
        </p>
        <p>
            {/* toFixed(2) i.e to 2dp */}
            {props.coins.price_change_percentage_24h.toFixed(2)}%
        </p>
        <p className='hide-mobile'>
            ${props.coins.total_volume.toLocaleString()}
        </p>
        <p className='hide-mobile'>
            ${props.coins.market_cap.toLocaleString()}
        </p>
    </div>
  )
}

export default CoinItem