import React, { createContext, useReducer, useState } from "react";
import Appreducer from "./Appreducer";

export const Globalcontext = createContext()
    export const Globalprovider = ({children}) => {
        const [state, dispatch] = useState(null)
    }
