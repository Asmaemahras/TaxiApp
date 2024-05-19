"use client"

import Booking from "@/components/Booking/Reservation";
import MapBox from "@/components/Map/MapBox";
import { UserLocation } from "@/position/UserLocation";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [userLocation, setUserLocation] = useState<any>();
  useEffect(()=>{
    getUserLocation();
  },[])
  const getUserLocation =()=>{
    navigator.geolocation.getCurrentPosition(function(pos){
      setUserLocation({
        lat:pos.coords.latitude,
        lng:pos.coords.longitude
      })
    })
  }
  return (
    <div>
      <UserLocation.Provider value={{userLocation,setUserLocation}}>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div>
          <Booking/>
        </div>
      
        <div className="col-span-2">
          <MapBox/>
        </div>
      </div>
      </UserLocation.Provider>
    </div>
  )
}
