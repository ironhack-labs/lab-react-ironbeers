import React from "react";

const STATUS = { LOADING: 'loading', LOADED: 'loaded', ERROR: 'error' };

export const StatusContext = React.createContext({ STATUS });
