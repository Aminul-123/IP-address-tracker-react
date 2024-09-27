import React, { useState } from 'react'
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { usePosition } from '../context/PositionProvider';

function Map() {
  const {info, defaultPosition, setDefaultPosition} = usePosition();
  

  return (
    <div id='mapContainer'>
      <MapContainer  center={defaultPosition} zoom={9} scrollWheelZoom={true} id='map'>
        <TileLayer  attribution='&copy;
         <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

     <Marker position={defaultPosition}>
         <Popup>
             A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <ChangeCenter position={defaultPosition} />
      </MapContainer>
    </div>
  )
}

export default Map;

function ChangeCenter ({position}) {
  const map = useMap();
  map.setView(position)
}