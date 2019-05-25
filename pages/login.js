import React, { Component } from 'react'
import { Card, CardHeader, Container, Row, Col, Table, Button, Form, Input, FormGroup,FormText,Label } from 'reactstrap'


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
            <Button color="primary">เข้าสู่ระบบ</Button>{' '}
          </Row>
        </Col>
      </Container>
    )
  }
}
