import React, { Component } from 'react'
import { Card, CardHeader, Container, Row, Col, Table, Button, Form, Input, Label } from 'reactstrap'


export default class detail extends Component {

  render() {
    return (
      <Container>
        <Col>
          <Row style={{ justifyContent:'center', alignItems:'center', padding:20}}>
            <h1 >
              ตารางการเผา
            </h1>
          </Row>
        </Col>
        <Col>
          <Form style={{paddingBottom:20, paddingTop:20}}>
            <Label for="exampleSelect">ชื่อพ่อหลวง</Label>
            <Input type="select" placeholder="พ่อหลวง">
              <option>สมพงศ์</option>
              <option>สมศักดิ์</option>
              <option>สมคิด</option>
            </Input>
          </Form>
          <Table bordered hover style={{padding:20}}>
          <thead>
            <tr>
              <th>#</th>
              <th>ชื่อ</th>
              <th>พ่อหลวง</th>
              <th>อบท</th>
              <th>วันที่ได้เผา</th>
              <th>พืชที่ปลูกก่อนการเผา</th>
              <th>พืชที่จะปลูกหลังการเผา</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>สมพงศ์</td>
              <td>ปรเมท</td>
              <td>02-05-19</td>
              <td>ข้าวโพด</td>
              <td>ข้าว</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>สมคิด</td>
              <td>ปรเมท</td>
              <td>05-05-19</td>
              <td>ข้าวโพด</td>
              <td>ข้าว</td>           
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>สมพงศ์</td>
              <td>ปรเมท</td>
              <td>01-05-19</td>
              <td>ข้าวโพด</td>
              <td>ข้าว</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Mark</td>
              <td>สมชาย</td>
              <td>ปรเมท</td>
              <td>09-05-19</td>
              <td>ข้าวโพด</td>
              <td>ข้าว</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Jacob</td>
              <td>สมพงศ์</td>
              <td>ปรเมท</td>
              <td>10-05-19</td>
              <td>ข้าวโพด</td>
              <td>ข้าว</td>           
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Larry</td>
              <td>สมรวย</td>
              <td>ปรเมท</td>
              <td>15-05-19</td>
              <td>ข้าวโพด</td>
              <td>ข้าว</td>
            </tr>
          </tbody>
        </Table>
      </Col>
      <Col>
        <Row style={{justifyContent:'flex-end', padding:20}}>
          <Button color="primary">ดาวน์โหลด</Button>{' '}
        </Row>
      </Col>
      </Container>
    )
  }
}
