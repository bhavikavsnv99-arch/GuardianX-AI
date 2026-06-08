"use client";

import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

import { useEffect, useState } from "react";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import L from "leaflet";

// Fix marker icon
delete (L.Icon.Default.prototype as L.Icon.Default & {
  _getIconUrl?: string;
})._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",

  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",

  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});
const hospitalIcon = new Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const policeIcon = new Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const fireIcon = new Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const userIcon = new Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function MapComponent() {

  const [position, setPosition] =
    useState<[number, number] | null>(null);
    const [places, setPlaces] = useState<any[]>([]);

    function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) {
  const R = 6371;

  const dLat =
    ((lat2 - lat1) * Math.PI) / 180;

  const dLon =
    ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) *
      Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c =
    2 *
    Math.atan2(
      Math.sqrt(a),
      Math.sqrt(1 - a)
    );

  return R * c;
}

  useEffect(() => {

    navigator.geolocation.getCurrentPosition(
      (location) => {

        setPosition([
          location.coords.latitude,
          location.coords.longitude,
        ]);

      },
      (error) => {

        console.error(error);

      }
    );

  }, []);

  useEffect(() => {

  if (!position) return;

  const fetchPlaces = async () => {

    const [lat, lng] = position;

    const query = `
      [out:json];
      (
        node["amenity"="hospital"](around:5000,${lat},${lng});
        node["amenity"="police"](around:5000,${lat},${lng});
        node["amenity"="fire_station"](around:5000,${lat},${lng});
      );
      out;
    `;

    const response = await fetch(
      "https://overpass-api.de/api/interpreter",
      {
        method: "POST",
        body: query,
      }
    );

    const data = await response.json();

    const sortedPlaces =
  (data.elements || []).sort(
    (a: any, b: any) => {

      const distanceA =
        calculateDistance(
          position[0],
          position[1],
          a.lat,
          a.lon
        );

      const distanceB =
        calculateDistance(
          position[0],
          position[1],
          b.lat,
          b.lon
        );

      return distanceA - distanceB;
    }
  );

setPlaces(sortedPlaces);

  };

  fetchPlaces();

}, [position]);

  if (!position) {

    return (
      <div className="
        h-[80vh]
        flex
        items-center
        justify-center
        text-white
      ">
        Getting your location...
      </div>
    );

  }

  return (

  <div
    className="
      flex
      h-[80vh]
    "
  >

    {/* SIDEBAR */}
    <div
      className="
        w-80
        bg-[#0B1120]
        border-r
        border-white/10
        overflow-y-auto
        p-4
      "
    >

      <h2
        className="
          text-xl
          font-bold
          mb-4
        "
      >
        Nearby Services
      </h2>

      {places.map((place, index) => (

        <div
          key={index}
          className="
            p-4
            mb-3
            rounded-xl
            bg-white/5
            border
            border-white/10
          "
        >

          <div className="font-semibold">
            {place.tags?.name ||
              "Emergency Service"}
          </div>

          <div
            className="
              text-sm
              text-slate-400
              mt-1
            "
          >
            {place.tags?.amenity}
            <div className="text-xs text-cyan-400 mt-1">

  {calculateDistance(
    position[0],
    position[1],
    place.lat,
    place.lon
  ).toFixed(2)}
  {" "}km away
  <button
  onClick={() =>
    window.open(
      `https://www.google.com/maps?q=${place.lat},${place.lon}`,
      "_blank"
    )
  }
  className="
    mt-3
    w-full
    rounded-lg
    bg-cyan-500/20
    border
    border-cyan-500/30
    py-2
    text-sm
    text-cyan-300
    hover:bg-cyan-500/30
    transition-all
  "
>

  Get Directions

</button>
</div>
          </div>

        </div>

      ))}

    </div>

    {/* MAP */}
    <div className="flex-1">

      <MapContainer
        center={position}
        zoom={14}
        style={{
          height: "80vh",
          width: "100%",
        }}
      >

      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker
        position={position}
        icon={userIcon}
      >

        <Popup>
          📍 Your Current Location
        </Popup>

      </Marker>
      {places.map((place, index) => (

      <Marker
      key={index}
      position={[
        place.lat,
        place.lon,
      ]}
      icon={
        place.tags?.amenity === "hospital"
          ? hospitalIcon
          : place.tags?.amenity === "police"
          ? policeIcon
          : fireIcon
      }
    >

    <Popup>

      <strong>
        {place.tags?.name ||
          "Emergency Service"}
      </strong>

      <br />

      {place.tags?.amenity}

    </Popup>

  </Marker>

))}

    </MapContainer>
      </div>

  </div>
  );
}