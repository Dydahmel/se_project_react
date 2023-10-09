import React from "react";

const CurrentTemperatureUnitContext = React.createContext({
    currentTempUnit: "",
    handleToggleTempUnit: () => {}
})

export {CurrentTemperatureUnitContext}
