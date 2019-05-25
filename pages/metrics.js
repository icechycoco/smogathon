import React, { Component } from 'react'
import {
  Row, 
  Col,
  Form,
  Input,
  Label,
} from 'reactstrap'
import KEY from '../src/constant/key'
import HEAT from '../src/data/heat.json'
import OLD_HEAT from '../src/data/oldHeat.json'

const defaultPosition = {
  lng: 98.4299,
  lat: 18.7337,
  zoom: 8
}

const LAYER = {
  "id": "earthquakes-point",
  "type": "circle",
  "source": "earthquakes",
  "minzoom": 7,
  "paint": {
  // Size circle radius by earthquake magnitude and zoom level
  "circle-radius": [
    "interpolate",
    ["linear"],
    ["zoom"],
    7, [
      "interpolate",
    ["linear"],
    ["get", "mag"],
    1, 1,
    6, 4
    ],
    16, [
    "interpolate",
    ["linear"],
    ["get", "mag"],
    1, 5,
    6, 120
    ]
  ],
  // Color circle by earthquake magnitude
  "circle-color": [
    "interpolate",
      ["linear"],
      ["get", "mag"],
      1, "rgba(255, 255, 255, 0)",
      2, "rgb(255, 200, 200)",
      3, "rgb(255, 150, 150)",
      4, "rgb(255, 100, 100)",
      5, "rgba(255, 50, 50, 0.5)",
  ],
  "circle-stroke-color": "white",
  "circle-stroke-width": 1,
  // Transition from heatmap to circle layer by zoom level
  "circle-opacity": [
    "interpolate",
    ["linear"],
    ["zoom"],
    7, 0,
    8, 1
  ]
  }
  }

export default class metrics extends Component {
  componentDidMount() {
    this.renderMap()
  }

  renderMap = () => {
    const thinknetmaps = require('thinknetmaps')
    const firstMap = new thinknetmaps.Map({
      container: 'map', // id ของ div ที่จะให้ map ไป render
      ...KEY,
      style: 'terrain',
      center: defaultPosition
    })

    firstMap.on('load', () => {
      firstMap.addSource('earthquakes', {
        "type": "geojson",
        "data": OLD_HEAT
        })
      firstMap.addLayer(LAYER)
    })
    
    const secondMaps = new thinknetmaps.Map({
      container: 'map2', // id ของ div ที่จะให้ map ไป render
      ...KEY,
      style: 'terrain',
      center: defaultPosition
    })

    secondMaps.on('load', () => {
      secondMaps.addSource('earthquakes', {
        "type": "geojson",
        "data": HEAT
        })
        
      secondMaps.addLayer(LAYER)
    })
  }

  render() {
    return (
      <div>
        <h2>ปริมาณการเกิดควันพิษ</h2>
        <Form style={{paddingBottom:20, paddingTop:20}}>
            <Label for="exampleSelect">วันที่</Label>
            <Input type="select" placeholder="พ่อหลวง">
              <option>24 พฤษภาคม</option>
              <option>25 พฤษภาคม</option>
              <option>26 พฤษภาคม</option>
            </Input>
        </Form>
        <Row>
          <Col>
            <h4>ควบคุมแล้ว</h4>
          </Col>
          <Col>
            <h4>ไม่มีการควบคุม (จากการพยากรณ์)</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <div 
              id="map" 
              style={{ 
                width: '100%',
                height: '600px' 
              }} 
            />
          </Col>
          <Col>
            <div
              id="map2"
              style={{
                width: '100%',
                height: '600px' 
              }}
            />
          </Col>
        </Row>
      </div>
    )
  }
}
