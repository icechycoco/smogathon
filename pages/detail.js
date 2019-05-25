import React, { Component } from 'react'
import { Card, CardHeader, Container, Row, Col, Table, Button } from 'reactstrap'


export default class detail extends Component {
  render() {
    return (
      <Container>
        <Row>
          <h1 style={{ alignSelf: 'center', alignSelf:'center'}}>
            ตารางการเผา
          </h1>
        </Row>
        <Table bordered>
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
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
      <Button color="primary">ดาวน์โหลด</Button>{' '}
      </Container>
    )
  }
}
