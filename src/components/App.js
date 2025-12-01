import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
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
  // Mobile breakpoint check
  const isMobile = window.innerWidth <= 768

  return (
    <Router>
      <Layout style={{ minHeight: '100vh', lineHeight: '1.6rem' }}>
        <ReactHeader />
        <Layout>
          <Switch>
            {/* Root redirect based on device */}
            <Route exact path="/">
              {isMobile ? <Redirect to="/coins-mobile" /> : <Redirect to="/coins" />}
            </Route>

            {/* Regular routes */}
            <Route exact path="/about" component={ReactAbout} />
            <Route exact path="/trending-coins" component={ReactTrendingCoins} />
            <Route exact path="/coins" component={ReactCoinsList} />
            <Route exact path="/coins-mobile" component={ReactCoinsList} /> {/* optional mobile-specific route */}
            <Route exact path="/coins/:coinId" component={ReactCoinsDetail} />
            <Route exact path="/exchanges/list" component={ReactExchangesList} />
            <Route exact path="/global" component={ReactGlobal} />
            <Route exact path="/empty" component={ReactEmpty} />
            <Route exact path="/exchange-rates" component={ReactExchangeRates} />
            <Route exact path="/asset-platforms" component={ReactAssetPlatforms} />
          </Switch>
        </Layout>
        <ReactFooter />
      </Layout>
    </Router>
  )
}

export default App
