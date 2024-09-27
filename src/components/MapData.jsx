import React, { useEffect, useState } from 'react'
import { API_KEY_IP_ADDRESS } from '../constants/API';
import { usePosition } from '../context/PositionProvider';

function MapData() {
    const {query, info, setInfo, setDefaultPosition} = usePosition()

    useEffect(function () {
        async function getDataFromIP () {
            const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY_IP_ADDRESS}&ipAddress=${query}`)
            if (!res.ok) throw new Error ('There was an Error in Checking API Address.');

            const data = await res.json()
            if (!data) return;
           // console.log(data?.location?.lat, data?.location?.lng);
            setInfo(data)
            setDefaultPosition([data?.location?.lat, data?.location?.lng]);
        }

      // getDataFromIP();
    }, [query])
    //there will be IP Address in the above dependency, we will take the IP Adress from input field which is in headers, if needed use context api.
    // next is integrate map api with api key, and set this lat and lng to that api url. 
  return (
    <div className="mapData">
        <div>
            <p>IP ADDRESS</p>
            <span>{info?.ip}</span>
        </div>
        <div>
            <p>LOCATION</p>
            <span>{info?.location?.region} {info?.location?.country} </span>
        </div>
        <div>
            <p>TIMEZONE</p>
            <span> {info?.location?.timezone} </span>
        </div>
        <div>
            <p>ISP</p>
            <span>{info?.isp} </span>
        </div>
    </div>
  )
}

export default MapData;