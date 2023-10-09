import React from "react";

const CurrentTemperatureUnitContext = React.createContext({
    //currentTempUnit: "",
    currentTemperatureUnit: "",    
    //handleToggleTempUnit: () => {}
    handleToggleSwitchChange: () => {}
})

export {CurrentTemperatureUnitContext}
