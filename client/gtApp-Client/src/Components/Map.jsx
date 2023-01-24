import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '500px',
  height: '500px'
};

const center = {
  lat: 40.7128,
  lng: -74.0060 
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBbsBqCsrFTZZhEWKG-96Oud-VrO5XnPhs',
    libraries: ['places']
  })
  if (isLoaded){
    console.log('not loaded')
  }

  return (
    <div>
      {/* <Autocomplete>
        <input type="text" placeholder='origin' />
      </Autocomplete>
      <Autocomplete>
        <input type="text" placeholder='destination' />
      </Autocomplete> */}
        
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        options={{
          mapTypeControl: false
          }}
      >
        <Marker position={center}/>
        { /* Child components, such as markers, info windows, etc. */ }
      </GoogleMap>
     </div>
  )
}

export default Map