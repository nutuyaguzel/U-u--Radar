
import MapView from "./components/MapView"
import ListView from "./components/ListView"
import Header from "./components/Header"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getFlightData } from "./app/flieghtState"

function App() {
  const [showMapView, setShowMapView] = useState(true)
  const dispatch = useDispatch();



  useEffect(() => {
    alert('uygulama başladı');
//veriyi çek stora aktar
    dispatch(getFlightData())
  }, [])

  return (
    <>
      <Header />
      <div className="view-buttons">
        <button className={`${showMapView && 'active'}`}
          onClick={() => setShowMapView(true)}>harita Görünüm</button>

        <button className={`${!showMapView && 'active'}`}
          onClick={() => setShowMapView(false)}>Liste Görünüm</button>
      </div>
      {showMapView ? <MapView /> : <ListView />}

    </>
  )
}

export default App
