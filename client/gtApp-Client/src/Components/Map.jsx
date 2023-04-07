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
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';


const containerStyle = { width: '100%', height: '80%'};
const center = { lat: 40.7128, lng: -74.0060 };
const key= 'AIzaSyBimrGPOFpuYMjcVFSxX4XRnH-cNVWC0XI'

//BELOW IS NEEDED TO USE PLACES AUTOCOMPLETE
const libraries = ['places']

function Map({selEvent}) {
  const [origin, setOrigin] = useState(null)
  const [selected, setSelected] = useState(null)

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: key, 
    libraries
  })
  if(!isLoaded) return <div>Loading...</div>
      // {console.log(selEvent[0])}

  const originSelect = async (address) => {
    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
  };
  originSelect(selEvent[0].location)

  return (
    <div className='map-cont'>
        <div className='input-cont'>
          <PlacesAutoComplete originSelect ={originSelect} selEvent={selEvent} setOrigin={setOrigin}/>
        </div>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={13}
          options={{
            mapTypeControl: false
            }}
        >
          {origin && <Marker position={origin}/>}
          {selected && <Marker position={selected}/>}
        </GoogleMap>
    </div>
  )
} 
//PLACES AUTO COMPLETE IS USED TO HAVE THE SEARCH BAR AUTOCOMPLETE 
const PlacesAutoComplete = ({ setOrigin, selEvent}) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions(); //TO CLEAR SUGGESTIONS WHEN AN ADDRESS IS SELECTED

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]); //CONVERTS ADDRESS TO COORDINATES 
    setOrigin({ lat, lng });
  };

  return (
    <div className='input-wrap'>
      <Combobox onSelect={handleSelect}>
        <ComboboxInput 
          value={value} //INPUTS VALUE 
          onChange={(e) => setValue(e.target.value)} 
          disabled={!ready} //INPUT WILL DISABLE IF THE SCRIPT IS NOT READY
          className={'combobox-input'} 
          placeholder='Search Origin'/>
        <ComboboxPopover>
          <ComboboxList style={{color: 'black', fontFamily: 'sans-serif'}}>
          {
            status === 'OK' && data.map(({place_id, description}) => <ComboboxOption key={place_id} value={description}/>)
          }
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>

      <Combobox>
        <ComboboxInput 
          value={selEvent[0].location}  
          disabled={!ready} 
          className={'combobox-input'} 
          placeholder='search'/>
        <ComboboxPopover>
          <ComboboxList style={{color: 'black'}}>
          {
            status === 'OK' && data.map(({place_id, description}) => <ComboboxOption key={place_id} value={description}/>)
          }
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  )
}
export default Map
