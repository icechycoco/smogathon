import React from 'react'
import App, { Container } from 'next/app'
import { 
  Container as LayoutContainer,
} from 'reactstrap'
import { withRouter } from 'next/router'
import NavBar from '../src/components/NavBar'
import 'bootstrap/dist/css/bootstrap.css'
import 'thinknetmaps/dist/thinknetmaps.css'
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css'

class MyApp extends App {
  static async getInitialProps({ Component, ctx, router }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    pageProps = {
      ...pageProps,
      router
    }
    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    const { router } = pageProps
    return (
      <Container>
        <LayoutContainer>
          {(router.pathname !== '/') && (
            <NavBar />
          )}
          <Component {...pageProps} />
        </LayoutContainer>
      </Container>
    )
  }
}

export default withRouter(MyApp)