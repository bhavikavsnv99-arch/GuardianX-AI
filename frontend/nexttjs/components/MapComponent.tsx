"use client";

import "leaflet/dist/leaflet.css";

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

export default function MapComponent() {

  return (

    <MapContainer
      center={[28.6139, 77.2090]}
      zoom={13}
      style={{
        height: "80vh",
        width: "100%",
      }}
    >

      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Hospital */}
      <Marker position={[28.6139, 77.2090]}>

        <Popup>
          🏥 Nearby Hospital
        </Popup>

      </Marker>

      {/* Police */}
      <Marker position={[28.6200, 77.2100]}>

        <Popup>
          🚓 Police Station
        </Popup>

      </Marker>

      {/* Fire Station */}
      <Marker position={[28.6100, 77.2000]}>

        <Popup>
          🚒 Fire Station
        </Popup>

      </Marker>

    </MapContainer>
  );
}