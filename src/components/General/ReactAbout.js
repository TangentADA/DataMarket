import React, { Component } from "react";
import { Layout, Typography } from "antd";
import { contentStyle } from "../../styles";
import coinGeckoLogo from "../../images/branding/CoinGecko.png";
import { connect } from "react-redux";
import { setHeaderMenuItem } from "../../redux_actions";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

class ReactAbout extends Component {
  componentDidMount () {
    this.props.setHeaderMenuItem("about");
  }

  render () {
    return (
      <Layout style={{ padding: "1rem" }}>
        <Content className="text-focus-in" style={{ ...contentStyle }}>
          <Title level={2}>What Is YallaCap?</Title>

          <Paragraph>
            YallaCap is a fast, lightweight crypto intelligence terminal designed for
            traders, explorers, and curious minds wandering the world of magic internet
            money. It aggregates real-time market data, global metrics, exchange info,
            trending coins and more, all through a clean and intuitive interface.
          </Paragraph>

          <Paragraph>
            Whether you&apos;re deep in the charts, researching the next narrative or
            just checking if the market is down bad again, YallaCap gives you the tools
            to see the crypto world clearly.
          </Paragraph>

          <Title level={3}>Powered by Live Crypto Data</Title>

          <Paragraph>
            All market data is sourced from the CoinGecko API, one of the most reliable,
            community-friendly and widely used data providers in the crypto ecosystem.
          </Paragraph>

          <a
            href="https://www.coingecko.com/en/api"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="responsive-image"
              alt="Powered by CoinGecko API"
              style={{ border: "1px solid #f3f3f3", maxWidth: "400px" }}
              src={coinGeckoLogo}
            />
          </a>

          <Paragraph>
            Prices, volumes, market caps, trending assets and global metrics are pulled
            directly from the public CoinGecko API.
          </Paragraph>

          <Title level={3}>Powered by Cardano</Title>

          <Paragraph>
            YallaCap is built with a strong foundation in the Cardano ecosystem, one of
            the most secure, research-driven and energy-efficient blockchains in the
            world. Cardano&apos;s design philosophy of formal verification, predictable
            scalability and robust UTXO accounting provides a solid base for future
            on-chain integrations.
          </Paragraph>

          <Paragraph>
            As YallaCap evolves, deeper Cardano support will roll out, including:
          </Paragraph>

          <ul style={{ paddingLeft: "1.2rem" }}>
            <li>On-chain wallet insights and address analytics</li>
            <li>Native token exploration</li>
            <li>Real-time on-chain metrics</li>
            <li>DApp ecosystem tracking</li>
            <li>Data integrations using the EUTxO model</li>
          </ul>

          <Paragraph>
            Cardano&apos;s architecture aligns perfectly with YallaCap&apos;s mission:
            reliability, transparency and high-integrity data.
          </Paragraph>

          <Title level={3}>Why This Project Exists</Title>

          <Paragraph>
            YallaCap started as a personal development challenge: build a complex,
            data-heavy app that consumes multiple APIs and looks clean with Ant Design.
          </Paragraph>

          <Paragraph>
            It has since grown into a polished, fast, high-performance crypto dashboard
            built for real daily use.
          </Paragraph>

          <Title level={3}>Technical Challenges</Title>

          <Paragraph>Building YallaCap involved several engineering exercises:</Paragraph>

          <ul style={{ paddingLeft: "1.2rem" }}>
            <li>Organizing large volumes of asynchronous API data</li>
            <li>Structuring reusable, modular UI components</li>
            <li>Handling nested routing across multiple sections</li>
            <li>Transforming raw API responses into trader-friendly formats</li>
            <li>Mastering Ant Design for polished UI/UX</li>
          </ul>

          <Title level={3}>The Spirit of Magic Internet Money</Title>

          <Paragraph>
            Crypto is fast. Chaotic. Beautiful. Ridiculous. Exciting. YallaCap embraces
            that energy and gives you a smooth, powerful window into the constantly
            evolving digital marketplace.
          </Paragraph>

          <Paragraph>
            <Text strong>
              Welcome to YallaCap. Explore the markets. Follow the trends. Stay curious.
            </Text>
          </Paragraph>
        </Content>
      </Layout>
    );
  }
}

const mapActionsToProps = {
  setHeaderMenuItem
};

export default connect(null, mapActionsToProps)(ReactAbout);
