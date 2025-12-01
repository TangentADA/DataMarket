import React from 'react'
import { Layout } from 'antd'
import { footerStyle } from '../../styles'

const { Footer } = Layout

export default function ReactFooter () {
  return (
    <Footer style={footerStyle}>
            Developed by <strong>Eth2ADA</strong>.<br></br>Built with <strong>React</strong> and basic Design UI.<br></br>Powered by <strong>Cardano</strong> API.</Footer>
  )
}
