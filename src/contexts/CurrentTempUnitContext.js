import React from "react";

const CurrentTempUnitContext = React.createContext({
    currentTempUnit: "",
    handleToggleTempUnit: () => {}
})

export {CurrentTempUnitContext}
