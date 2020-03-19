import React, { useState, useEffect } from "react";
import { LoadingContext } from "./loading.api";
import { Loading } from "./loading.js";

// THIS is a HOC
export const withLoading = Component => () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // When the app starts this runs only once
    console.log("Welcome to app! 👨🏼‍💻");
    setLoading(false);
    // Try to get the current logged in user from our backend
  }, []);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {loading && <Loading />}
      <Component />
    </LoadingContext.Provider>
  );
};
