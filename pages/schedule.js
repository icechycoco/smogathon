import React, { Component } from 'react'
import { Input } from 'reactstrap'
import Calendar from 'rc-calendar'

export default class schedule extends Component {
  render() {
    return (
      <div>
        <h1>ตารางการเผา</h1>
        <div>
          หมู่บ้าน <Input />
        </div>
      </div>
    )
  }
}
