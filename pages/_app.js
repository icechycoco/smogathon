import React from 'react'
import App, { Container } from 'next/app'
import { 
  Container as LayoutContainer,
  Nav,
  Navbar,
  NavItem,
  NavbarBrand,
} from 'reactstrap'
import Link from 'next/link'
import { withRouter } from 'next/router'
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
          {(router.asPath !== '/') && (
            <Navbar color="light" light expand="md">
            <NavbarBrand href="/register-burn">JongBurn</NavbarBrand>
            <Nav className="ml-auto" navbar>
            <NavItem style={{marginRight:20}}>
                <Link href="/register-burn">จอง</Link>
              </NavItem>
            <NavItem style={{marginRight:20}}>
                <Link href="/schedule">ตารางเผา</Link>
              </NavItem>
            <NavItem style={{marginRight:20}}>
                <Link href="/detail">รายชื่อการเผา</Link>
            </NavItem>
            <NavItem style={{marginRight:20}}>
                <Link href="/metrics">ติดตามผล</Link>
              </NavItem>
            </Nav>
          </Navbar>
          )}
          <Component {...pageProps} />
        </LayoutContainer>
      </Container>
    )
  }
}

export default withRouter(MyApp)