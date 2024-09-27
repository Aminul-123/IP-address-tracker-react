import { createContext, useContext, useState } from "react";

const PositionContext = createContext();

function PositionProvider ({children}) {
    const [query, setQuery] = useState('')
    const [info, setInfo] = useState({})
    const [defaultPosition, setDefaultPosition] = useState([ 12.3, 10.8])


    return <PositionContext.Provider value={{
        query, setQuery, info , setInfo, defaultPosition, setDefaultPosition
    }} >
        {children}
    </PositionContext.Provider>
}

export default PositionProvider;

 export  function usePosition () {
    const context = useContext(PositionContext);
    if (context === undefined) {
        throw new Error('PositionContext was used outside PositionProvider.');
    }
    return context;
}
