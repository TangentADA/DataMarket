import React from 'react'
import { Layout } from 'antd'
import { footerStyle } from '../../styles'

const { Footer } = Layout

export default function ReactFooter () {
  return (
    <Footer style={footerStyle}>
            Developed by <strong>Eth2ADA</strong>.<br></br>Built with <strong>React</strong> and fully open source.<br></br>Powered by <strong>Cardano</strong> magic internet money.</Footer>
  )
}
