import React, { useState } from "react";
import { LoadingContext } from "./loading.api";
import { Loading } from "./loading.js";

// THIS is a HOC
export const withLoading = Component => () => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {loading && <Loading />}
      <Component />
    </LoadingContext.Provider>
  );
};
