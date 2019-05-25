import React, { Component } from 'react'
import { Input, Row, Col, Form, Button, Label, Container } from 'reactstrap'
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
  () => import('fullcalendar-reactwrapper'),
  {
    ssr: false
  }
)

export default class schedule extends Component {
  state = {
    events:[
          {
            title: 'สันติสุข',
            start: '2019-05-01'
          },
          {
            title: 'แม่ลาหลวง',
            start: '2019-05-07',
            end: '2019-05-10'
          },
          {
            title: 'แม่สะเรียง',
            start: '2019-05-09T16:00:00'
          },
          {
            title: 'แม่นาจาง',
            start: '2019-05-16T16:00:00'
          },
          {
            title: 'แม่โถ',
            start: '2019-05-11',
            end: '2019-05-13'
          },
          {
            title: 'หัวลา',
            start: '2019-05-12T10:30:00',
            end: '2019-05-12T12:30:00'
          },
          {
            title: 'แม่สุ',
            start: '2019-05-13T07:00:00'
          },
          {
            title: 'บ้านห้วยกู่ป๊ะ',
            start: '2019-05-28'
          }
        ],		
    }

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
            <Label for="exampleSelect">ชื่อหมู่บ้าน</Label>
            <Input type="select" placeholder="พ่อหลวง">
              <option>แม่โถ</option>
              <option>แม่ลาหลวง</option>
              <option>แม่สะเรียง</option>
            </Input>
        </Form>
        <DynamicComponentWithNoSSR
          id = "your-custom-ID"
          header = {{
            left: 'prev,next today myCustomButton',
            center: 'title',
            right: 'month,basicWeek,basicDay'
          }}
          defaultDate={'2019-05-25'}
          navLinks= {true} // can click day/week names to navigate views
          editable= {true}
          eventLimit= {true} // allow "more" link when too many events
          events = {this.state.events}	
      />
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
