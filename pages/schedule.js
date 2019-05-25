import React, { Component } from 'react'
import { Input, Row, Col } from 'reactstrap'
import dynamic from 'next/dynamic'
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css'

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
            title: 'All Day Event',
            start: '2017-05-01'
          },
          {
            title: 'Long Event',
            start: '2017-05-07',
            end: '2017-05-10'
          },
          {
            id: 999,
            title: 'Repeating Event',
            start: '2017-05-09T16:00:00'
          },
          {
            id: 999,
            title: 'Repeating Event',
            start: '2017-05-16T16:00:00'
          },
          {
            title: 'Conference',
            start: '2017-05-11',
            end: '2017-05-13'
          },
          {
            title: 'Meeting',
            start: '2017-05-12T10:30:00',
            end: '2017-05-12T12:30:00'
          },
          {
            title: 'Birthday Party',
            start: '2017-05-13T07:00:00'
          },
          {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: '2017-05-28'
          }
        ],		
    }

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
        <DynamicComponentWithNoSSR
                id = "your-custom-ID"
          header = {{
          left: 'prev,next today myCustomButton',
          center: 'title',
          right: 'month,basicWeek,basicDay'
        }}
          defaultDate={'2017-09-12'}
          navLinks= {true} // can click day/week names to navigate views
          editable= {true}
          eventLimit= {true} // allow "more" link when too many events
          events = {this.state.events}	
      />
      </div>
    )
  }
}
