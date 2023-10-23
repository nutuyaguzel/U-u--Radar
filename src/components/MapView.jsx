import { MapContainer, TileLayer, useMap, Marker, Popup }
    from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { useSelector } from 'react-redux';
import store from '../app/store';
import Leaflet from 'leaflet';
import icon from '../assets/flight.png';
import { useState } from 'react';
import SideDetail from './SideDetail';




const MapView = () => {
    const state = useSelector((store) => store.reducer);
    const [showDetails,setShowdetails]=useState(false);
    const [detailId,setDetailId]= useState();


    const planeIcon = new Leaflet.icon({
        iconUrl: icon,
        iconSize: [45, 45],
    });
const handleClick= (id)=> {
    setDetailId(id);
    setShowdetails(true);

}


    return (<div>
        <MapContainer center={[39.925, 32.866]} zoom={7} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {state.flights.map((plane) => (
                <Marker position={[plane.lat, plane.lng]}
                icon={planeIcon}
                >
                    <Popup>
                    <div className="popup">
                <span>Kod: {plane.code}</span>
                <button
                  onClick={() => handleClick(plane.id)}
                >
                  Detay
                </button>
              </div>
                    </Popup>
                </Marker>

            ))}

        </MapContainer>

        {showDetails && <SideDetail detailId={detailId} setShowdetails={setShowdetails}  />}

    </div>
    )
}
export default MapView