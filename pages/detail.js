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
              {/* <th>#</th> */}
              <th>ชื่อ</th>
              <th>ตำบล</th>
              <th>พ่อหลวง</th>
              <th>ตำแหน่ง</th>
              <th>วันที่ได้เผา</th>
              <th>ขนาดพื้นที่</th>
              <th>พืชก่อนการเผา</th>
              <th>พืชหลังการเผา</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* <th scope="row">1</th> */}
              <td>ศรีดอยชัยหมู่ 2</td>
              <td>ศรีดอยชัย</td>
              <td>นางคำเอื้อย</td>
              <td>ข้างเทศบาลศรีดอยชัย</td>
              <td>02-05-19</td>
              <td>2 ไร่</td>
              <td>ข้าวโพด</td>
              <td>ข้าว</td>
            </tr>
            <tr>
              {/* <th scope="row">2</th> */}
              <td>โป่งน้อย</td>
              <td>ครึ่ง</td>
              <td>นายจั๋นตา</td>
              <td>ข้างโป่งน้อย</td>
              <td>02-05-19</td>
              <td>2 ไร่</td>
              <td>วัชพืช</td>
              <td>ข้าว</td>
            </tr>
            <tr>
              {/* <th scope="row">3</th> */}
              <td>แปลงข้างสถานปฏิบัติธรรม</td>
              <td>สถาน</td>
              <td>จันทร์ตา</td>
              <td>หนองคาย</td>
              <td>02-05-19</td>
              <td>2 ไร่</td>
              <td>วัชพืช</td>
              <td>ข้าว</td>
            </tr>
            <tr>
              {/* <th scope="row">4</th> */}
              <td>บ้านสันทราย</td>
              <td>ริมโขง</td>
              <td>ลุงสิงห์คำ</td>
              <td>ข้างร้านสวนสน</td>
              <td>02-05-19</td>
              <td>5 ไร่</td>
              <td>ข้าว</td>
              <td>ข้าว</td>
            </tr>
            <tr>
              {/* <th scope="row">5</th> */}
              <td>บ้านใหม่ หมู่ 3</td>
              <td>เวียงเชียงของ</td>
              <td>นายติ๋บ</td>
              <td>ริมน้ำโขง</td>
              <td>02-05-19</td>
              <td>8 ไร่</td>
              <td>วัชพืช</td>
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
