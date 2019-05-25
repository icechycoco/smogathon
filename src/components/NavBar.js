import { 
  Nav,
  Navbar,
  NavItem,
  NavbarBrand,
} from 'reactstrap'
import Link from 'next/link'

const CustomNavBar = () => (
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
      <NavItem style={{marginRight:20}}>
        <Link href="/">ลงชื่อออก</Link>
      </NavItem>
    </Nav>
  </Navbar>
)

export default CustomNavBar