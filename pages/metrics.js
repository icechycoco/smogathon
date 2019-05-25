import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'

const defaultPosition = {
  lng: 98.4299,
  lat: 18.7337,
  zoom: 8
}

export default class metrics extends Component {
  componentDidMount() {
    const thinknetmaps = require('thinknetmaps')
    const firstMap = new thinknetmaps.Map({
      container: 'map', // id ของ div ที่จะให้ map ไป render
      app_id: 'test-tncnx-7iqgm',
      api_key: 'YTA2N2YyZjQ0YzlkOTNlOTVhYTFhNGRiNzU3NTIyZTI',
      style: 'terrain',
      center: defaultPosition
    })

    firstMap.on('load', () => {
      firstMap.addMarker({
        lng: 98.4399,
        lat: 18.7337
      })
      firstMap.addMarker({
        lng: 98.5399,
        lat: 18.7337
      })
    })
    
    const secondMaps = new thinknetmaps.Map({
      container: 'map2', // id ของ div ที่จะให้ map ไป render
      app_id: 'test-tncnx-7iqgm',
      api_key: 'YTA2N2YyZjQ0YzlkOTNlOTVhYTFhNGRiNzU3NTIyZTI',
      style: 'terrain',
      center: defaultPosition
    })

    secondMaps.on('load', () => {
      secondMaps.addMarker({
        lng: 98.4399,
        lat: 18.7337
      })
    })
  }

  render() {
    return (
      <div>
        <h2>จุดที่เผาป่าจากการเกษตร</h2>
        <p>วันที่ 25 พฤษภาคม 2562</p>
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
