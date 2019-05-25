import React, { Component } from 'react'
import { Button } from 'reactstrap';


export default class registerburn extends Component {
    render() {
        return (
            <div>
            <h1><center> ลงทะเบียนการเผา </center></h1>
            <label>
            <p>
                ชื่อ :
                <input type="text" name="name" />
            </p>
            <p>
                ชื่อหมู่บ้าน :
                <input type="text" name="nameVillage" />
            </p>
            <p>
                ชื่อพ่อหลวง :
                <input type="text" name="nameRoyalFather" />
            </p>
            <p>
                วันที่เผา :
                <input type="text" name="dateBurn" />
            </p>
            <p>
                ปลูกอะไรก่อน :
                <input type="text" name="whatPlantBefore" />
            </p>
            <p>
                ปลูกอะไรหลัง :
                <input type="text" name="whatPlantAfter" />
            </p>
            <p>
                ขนาดพื้นที่ :
                <input type="text" name="area" />
            </p>
            <p>
                หมายเหตุ :
                <input type="text" name="other" />
            </p>
             </label>  
            <p><Button color="primary">ส่ง</Button>{' '}</p>
          </div>
        )
    }
}
