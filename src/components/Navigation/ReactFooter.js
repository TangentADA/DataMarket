import React from 'react'
import { Layout } from 'antd'
import { footerStyle } from '../../styles'

const { Footer } = Layout

export default function ReactFooter () {
  return (
    <Footer style={footerStyle}>
            Developed by <strong>Tangent</strong>.<br></br>Built with <strong>React</strong> and basic Design UI.<br></br>Powered by <strong>CoinGecko</strong> API.</Footer>
  )
}
