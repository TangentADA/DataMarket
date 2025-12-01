import React, { Component } from 'react'
import { Layout, Typography, Divider } from 'antd'
import { contentStyle } from '../../styles'
import coinGeckoLogo from '../../images/branding/CoinGecko.png'
import { connect } from 'react-redux'
import { setHeaderMenuItem } from '../../redux_actions'

const { Content } = Layout
const { Title, Paragraph, Text } = Typography

class ReactAbout extends Component {
  componentDidMount () {
    this.props.setHeaderMenuItem('about')
  }

  render () {
    return (
      <Layout style={{ padding: '1rem' }}>
        <Content className="text-focus-in" style={{ ...contentStyle, maxWidth: 800, margin: '0 auto' }}>

          <Title level={2}>About YallaCap</Title>
          <Paragraph>
            <Text strong>YallaCap</Text> is a next-generation crypto trading analysis terminal designed for
            traders, builders, and believers in the magic of the internet money economy.
            Real-time market data, deep insights, trending coins, exchange stats, and global indicators —
            all consolidated into one fast and intuitive dashboard.
          </Paragraph>

          <Paragraph>
            The mission is simple: <Text strong>give you professional-grade crypto data without friction</Text>.
            No noise. No paywalls upfront. Just clean intel to help you navigate the markets with confidence.
          </Paragraph>

          <Divider />

          <Title level={3}>Powered by Cardano</Title>
          <Paragraph>
            Paid features and premium access inside YallaCap are powered by <Text strong>Cardano</Text>,
            letting users unlock tools using fast, secure, low-fee ADA payments.
            No accounts. No KYC. No waiting. Just seamless blockchain-native access.
          </Paragraph>

          <Divider />

          <Title level={3}>Real-Time Crypto Data</Title>
          <Paragraph>
            All market data — prices, volume, market cap, trending lists, exchange stats, and asset platform
            information — is sourced from the <Text strong>CoinGecko API</Text>, one of the most reliable and
            battle-tested data providers in the industry.
          </Paragraph>

          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.coingecko.com/en/api#">
            <img
              className="responsive-image"
              alt="coingecko api link"
              style={{ border: '1px solid #f3f3f3', maxWidth: '300px', marginTop: '1rem' }}
              src={coinGeckoLogo}
            />
          </a>

          <Divider />

          <Title level={3}>Why YallaCap Exists</Title>
          <Paragraph>
            The crypto world moves fast, and most tools are bloated, confusing, or locked behind subscriptions.
            YallaCap was created to offer:
          </Paragraph>

          <ul>
            <li>⚡ A clean and blazing-fast UI built with React + Ant Design</li>
            <li>📊 Real-time coin and market intelligence for traders</li>
            <li>🌍 On-chain friendly payments with Cardano</li>
            <li>📱 A smooth experience across desktop and mobile</li>
            <li>🧙 A little magic-internet-money energy for the culture</li>
          </ul>

          <Divider />

          <Title level={3}>The Vision</Title>
          <Paragraph>
            Crypto deserves tools that feel modern, powerful, and fun — not corporate dashboards or spreadsheet hell.
            YallaCap is built to grow into a full analytics terminal: coins, markets, on-chain metrics,
            charts, sentiment, and AI-powered trading signals.
          </Paragraph>

          <Paragraph>
            This is just the beginning.  
            <Text strong>Let’s build the future of crypto intelligence, one block at a time.</Text>
          </Paragraph>

        </Content>
      </Layout>
    )
  }
}

const mapActionsToProps = {
  setHeaderMenuItem
}

export default connect(null, mapActionsToProps)(ReactAbout)
