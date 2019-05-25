import React from 'react'
import App, { Container } from 'next/app'
import { Container as LayoutContainer } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <LayoutContainer>
          <Component {...pageProps} />
        </LayoutContainer>
      </Container>
    )
  }
}

export default MyApp