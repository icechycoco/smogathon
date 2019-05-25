import React, { Component } from 'react'
import { Input, Row, Col } from 'reactstrap'
import Calendar from 'rc-calendar'

export default class schedule extends Component {
  render() {
    return (
      <div>
        <h1>ตารางการเผา</h1>
        <Row>
          <Col sm="1">หมู่บ้าน</Col>
          <Col>
            <Input />
          </Col>
        </Row>
      </div>
    )
  }
}
