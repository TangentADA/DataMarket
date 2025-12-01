import React, { Component } from 'react'
import { Layout, Typography } from 'antd'
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
        <Content className="text-focus-in" style={{ ...contentStyle }}>
          <Title level={2}>What Is YallaCap?</Title>
          <Paragraph>
            YallaCap is a fast, lightweight crypto intelligence terminal designed for
            traders, explorers, and curious minds wandering the world of magic
            internet money. It aggregates real-time market data, global metrics,
            exchange info, trending coins, and more — all through a clean and
            intuitive interface.
          </Paragraph>

          <Paragraph>
            Whether you’re deep in the charts, researching the next narrative, or just
            checking if the market is down bad (again), YallaCap gives you the tools
            to see the crypto world clearly.
          </Paragraph>

          <Title level={3}>Powered by Live Crypto Data</Title>
          <Paragraph>
            All market data is sourced from the CoinGecko API — one of the most
            reliable, community-friendly and widely used data providers in the crypto
            ecosystem. Prices, volumes, market caps, trending assets, global metrics,
            and exchange information are pulled directly from their public API.
          </Paragraph>

          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.coingecko.com/en/api#"
          >
            <img
              className="responsive-image"
              alt="coingecko api link"
              style={{ border: '1px solid #f3f3f3', maxWidth: '400px' }}
              src={coinGeckoLogo}
            />
          </a>

          <Paragraph />

          <Title level={3}>Why This Project Exists</Title>
          <Paragraph>
            YallaCap originally began as a development challenge: building a complex
           , data-driven application that consumes multiple endpoints, restructures

