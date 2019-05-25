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
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">HelloWorld</NavbarBrand>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <Link href="/register-burn">สมัคร</Link>
              </NavItem>
            <NavItem>
                <Link href="/schedule">จองวันทำการ</Link>
              </NavItem>
              <NavItem>
                <Link href="/metrics">วัดผล</Link>
              </NavItem>
              <NavItem>
                <Link href="/detail">ตาราง</Link>
              </NavItem>
            </Nav>
          </Navbar>
          <Component {...pageProps} />
        </LayoutContainer>
      </Container>
    )
  }
}

export default MyApp