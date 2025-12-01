import React, { Component } from 'react'
import { Layout, List, Typography } from 'antd'
import { contentStyle } from '../../styles'
import coinGeckoLogo from '../../images/branding/CoinGecko.png'
import { connect } from 'react-redux'
import { setHeaderMenuItem } from '../../redux_actions'

const { Content } = Layout
const { Title, Paragraph } = Typography

class ReactAbout extends Component {
  componentDidMount () {
    this.props.setHeaderMenuItem('about')
  }

  render () {
    const challenges = [
      'Organizing large amounts of data from third party API.',
      'Complex routing within nested components.',
      'Restructuring data from API calls into a suitable format for UI components.',
      'Creating maintainable structure for components and reusable configurations.',
      'Learning to use a brand new UI framework (Ant Design UI).'
    ]

    return (
      <Layout style={{ padding: '1rem' }}>
        <Content className="text-focus-in" style={{ ...contentStyle }}>
          <Title level={2}>About Page</Title>

          <Paragraph>
            Consolidating RESTFUL calls from the CoinGecko API into a React application.
            I&apos;ll be using v3 of the API (the most recent version at the time of
            starting this project). This app uses Ant Design for UI.
          </Paragraph>

          <Title level={3}>Purpose</Title>
          <Paragraph>
            This project was built to further the learning and development of React
            applications, especially those involving third-party API integrations.
          </Paragraph>

          <Title level={3}>Data Source</Title>
          <Paragraph>
            All data displayed in this application is sourced from the CoinGecko API —
            a free and publicly available cryptocurrency API. Click below to visit the
            official CoinGecko website.
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

          <Title level={3}>Challenges</Title>
          <Paragraph>Building this application posed several challenges:</Paragraph>

          <List
            style={{ marginBottom: '2rem' }}
            size="medium"
            bordered
            dataSource={challenges}
            renderItem={c => <List.Item>{c}</List.Item>}
          />
        </Content>
      </Layout>
    )
  }
}

const mapActionsToProps = {
  setHeaderMenuItem
}

export default connect(null, mapActionsToProps)(ReactAbout)
