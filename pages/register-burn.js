import React, { Component } from 'react'
import { Button, Form, FormGroup, Label,Input} from 'reactstrap'



export default class registerburn extends Component {
    render() {
        return (
            <div>
            <h1><center> ลงทะเบียนการเผา </center></h1>
            <FormGroup>
          <Label for="ืname">ชื่อ</Label>
          <Input type="text" name="name" id="name"  />
             </FormGroup>
             <FormGroup>
          <Label for="nameVillage">ชื่อหมู่บ้าน</Label>
          <Input type="text" name="nameVillage" id="ืnameVillage"  />
             </FormGroup>
             <FormGroup>
          <Label for="nameRoyalFather">ชื่อพ่อหลวง</Label>
          <Input type="text" name="nameRoyalFather" id="nameRoyalFather"  />
             </FormGroup>
             <FormGroup>
          <Label for="dateBurn">วันที่เผา</Label>
          <Input type="text" name="dateBurn" id="dateBurn"  />
             </FormGroup>
             <FormGroup>
          <Label for="whatPlantBefore">ปลูกอะไรก่อน</Label>
          <Input type="text" name="whatPlantBefore" id="whatPlantBefore"  />
             </FormGroup>
             <FormGroup>
          <Label for="whatPlantAfter">ปลูกอะไรหลัง</Label>
          <Input type="text" name="whatPlantAfter" id="whatPlantAfter"  />
             </FormGroup>
             <FormGroup>
          <Label for="area">ขนาดพื้นที่</Label>
          <Input type="text" name="area" id="area"  />
             </FormGroup>
             <FormGroup>
          <Label for="other">หมายเหตุ</Label>
          <Input type="text" name="other" id="other"  />
             </FormGroup>
            <p><Button color="primary">ส่ง</Button>{' '}</p>
          </div>
        )
    }
}
