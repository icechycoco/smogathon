import React, { Component } from 'react'
import { 
  Container, 
  Row, 
  Col, 
  Button, 
  Input, 
  FormGroup, 
  Label 
} from 'reactstrap'
import Link from 'next/link'


export default class login extends Component {
  render() {
    return (
      <Container>
        <Col>
          <Row style={{ justifyContent:'center', alignItems:'center', padding:20}}>
            <h1 >
              เข้าสู่ระบบ
            </h1>
          </Row>
        </Col>
        <Col>
          <Row style={{justifyContent:'center', padding:10}}>
            <FormGroup style={{width: 400, justifyContent:'center', alignContent:'center'}}>
              <Label for="exampleEmail">ชื่อผู้ใช้</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                // placeholder="with a placeholder"
              />
            </FormGroup>
          </Row>
          <Row style={{justifyContent:'center', padding:10}}>
            <FormGroup style={{width: 400, justifyContent:'center', alignContent:'center'}}>
              <Label for="examplePassword">รหัสผ่าน</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                // placeholder="password placeholder"
              />
            </FormGroup>
          </Row>
        </Col>
        <Col>
          <Row style={{justifyContent:'center', padding:20}}>
            <Link href="/register-burn">
              <Button color="primary">เข้าสู่ระบบ</Button>
            </Link>
          </Row>
        </Col>
      </Container>
    )
  }
}
