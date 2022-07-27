// We are using useState here and useEffect to connect to our api
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import Coins from './components/Coins'
import Coin from './routes/Coin'
import Navbar from './components/Navbar'

import './index.css'

function App() {
  const [coins, setCoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      //console.log(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])


  return (
    <>
      <Navbar />
      {/* Passing it through props */}
      <Routes>
        {/* Home-Page */}
        <Route path='/' element={<Coins coins={coins} />} />
        {/* Coin */}
        <Route path='/coin' element={<Coin />}>
          <Route path=':coinId' element={<Coin />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App