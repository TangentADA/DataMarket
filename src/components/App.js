import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from 'antd'

import ReactHeader from './Navigation/ReactHeader'
import ReactFooter from './Navigation/ReactFooter'

import ReactHome from './General/ReactHome'
import ReactAbout from './General/ReactAbout'
import ReactCoinsList from './Coins/ReactCoinsList'
import ReactCoinsDetail from './Coins/ReactCoinsDetail'
import ReactTrendingCoins from './Coins/ReactTrendingCoins'
import ReactExchangesList from './Exchanges/ReactExchangesList'
import ReactExchangeRates from './ExchangeRates/ReactExchangeRates'
import ReactGlobal from './Global/ReactGlobal'
import ReactEmpty from './Empty/ReactEmpty'
import ReactAssetPlatforms from './AssetPlatforms/ReactAssetPlatforms'

const App = () => {
  const isMobile = window.innerWidth <= 768; // adjust breakpoint as needed

  return (
    <Router>
      <Layout style={{ minHeight: '100vh', lineHeight: '1.6rem' }}>
        <ReactHeader />
        <Layout>
          <Routes>
            {/* Redirect root based on device */}
            <Route path="/" element={
              isMobile ? <Navigate to="/coins-mobile" /> : <Navigate to="/coins" />
            }/>

            {/* Regular routes */}
            <Route path="/about" element={<ReactAbout />} />
            <Route path="/trending-coins" element={<ReactTrendingCoins />} />
            <Route path="/coins" element={<ReactCoinsList />} />
            <Route path="/coins-mobile" element={<ReactCoinsList />} /> {/* optional mobile-specific */}
            <Route path="/coins/:coinId" element={<ReactCoinsDetail />} />
            <Route path="/exchanges/list" element={<ReactExchangesList />} />
            <Route path="/global" element={<ReactGlobal />} />
            <Route path="/empty" element={<ReactEmpty />} />
            <Route path="/exchange-rates" element={<ReactExchangeRates />} />
            <Route path="/asset-platforms" element={<ReactAssetPlatforms />} />
          </Routes>
        </Layout>
        <ReactFooter />
      </Layout>
    </Router>
  )
}

export default App

