'use client';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

// import logoMarker from "../../images/house-icon.png";

const customMarkerIcon = new L.Icon({
    iconUrl: '../../images/logo.webp',
    iconSize: [55, 55], // Размеры изображения маркера. Можете изменить под свои нужды
    iconAnchor: [12, 41], // Точка, относительно которой иконка будет выровнена к координате карты
    popupAnchor: [1, -34], // Точка, откуда будет "вырастать" всплывающее окно
});

const Map = () => {
  return (
    <MapContainer
      center={[52.2275, 20.9541]}
      zoom={20}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker
        position={[52.2275, 20.9541]}
        icon={customMarkerIcon}
        draggable={false}
      >
        <Popup>To jest nasze biuro</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;