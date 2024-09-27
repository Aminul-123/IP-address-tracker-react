import Header from "./components/Header";
import Map from "./components/Map";
import MapData from "./components/MapData";
import PositionProvider from "./context/PositionProvider";

export default function App () {
  return (
    <>
     <div className="container">
      <PositionProvider>
         <Header />
         <MapData />
         <Map />
      </PositionProvider>
     </div>
    </>
  )
}