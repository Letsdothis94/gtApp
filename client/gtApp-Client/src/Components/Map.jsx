import React from 'react'
import { useState } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";


const containerStyle = { width: '500px', height: '500px'};
const center = { lat: 40.7128, lng: -74.0060 };
const key= 'AIzaSyBimrGPOFpuYMjcVFSxX4XRnH-cNVWC0XI'
const libraries = ['places']

function Map({selEvent}) {
  const [selected, setSelected] = useState(null)
  const [selected1, setSelected1] = useState(null)

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: key, 
    libraries
  })
  if(!isLoaded) return <div>Loading...</div>

  return (
    <>
        <div>
          <PlacesAutoComplete selEvent={selEvent} setSelected={setSelected}/>
        </div>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={13}
          options={{
            mapTypeControl: false
            }}
        >
          {selected && <Marker position={selected}/>}
          {selected1 && <Marker position={selected1}/>}
        </GoogleMap>
    </>
  )
} 

const PlacesAutoComplete = ({ setSelected, selEvent, setSelected1 }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
  };
    const handleSelect123 = async (address) => {
    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    console.log(results)
    console.log(address)
    setSelected1({ lat, lng });
  };
  console.log(selEvent)
  return (
    <>
      <Combobox onSelect={handleSelect}>
        <ComboboxInput 
          value={value} 
          onChange={(e) => setValue(e.target.value)} 
          disabled={!ready} 
          className={'combobox-input'} 
          placeholder='search'/>
        <ComboboxPopover>
          <ComboboxList style={{color: 'red'}}>
          {
            status === 'OK' && data.map(({place_id, description}) => <ComboboxOption key={place_id} value={description}/>)
          }
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>

      <Combobox onChange={handleSelect123}>
        <ComboboxInput 
          value={selEvent[0].location}  
          disabled={!ready} 
          className={'combobox-input'} 
          placeholder='search'/>
        <ComboboxPopover>
          <ComboboxList style={{color: 'red'}}>
          {
            status === 'OK' && data.map(({place_id, description}) => <ComboboxOption key={place_id} value={description}/>)
          }
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </>
  )
}
export default Map
