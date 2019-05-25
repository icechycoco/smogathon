import React from 'react'
import App, { Container } from 'next/app'
<<<<<<< HEAD
=======
import 'bootstrap/dist/css/bootstrap.css'
>>>>>>> 4bb456998efdab25d34e66573808a0772ca4d567

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
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp