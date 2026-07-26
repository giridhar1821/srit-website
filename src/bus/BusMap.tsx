import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Popup,
  useMap,
} from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const route: [number, number][] = [
  [14.4143, 77.7200], // Dharmavaram
  [14.6819, 77.6006], // Anantapur
  [14.7465, 77.6315], // SRIT (temporary)
];

function FitBounds() {
  const map = useMap();

  useEffect(() => {
    map.fitBounds(route, {
      padding: [40, 40],
    });
  }, [map]);

  return null;
}

const busIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function BusMap() {
  return (
  <div style={{ height: "500px", width: "100%" }}>
    <MapContainer
      center={[14.55, 77.65]}
      zoom={10}
      style={{ height: "100%", width: "100%" }}
    >
      <FitBounds />

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      <Polyline positions={route} />

      <Marker position={route[0]} icon={busIcon}>
        <Popup>🚌 SRIT-01</Popup>
      </Marker>
    </MapContainer>
  </div>
);
}