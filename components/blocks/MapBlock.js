import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';
import { Icon } from 'semantic-ui-react'

const Marker = () => {
  return (
    <Icon.Group size='huge'>
      <Icon rotated='clockwise' size='small' inverted name='map marker alternate' color='blue'/>
    </Icon.Group>
  )
}

export default class MapBlock extends Component {

  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={
          { key: 'AIzaSyATx_dhLvGCK6TqL0s8oBQ7ri0lIi9GPSY' }
        }
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
      <Marker
        lat={this.props.center.lat}
        lng={this.props.center.lng}
      />
      </GoogleMapReact>
    )
  }
}
