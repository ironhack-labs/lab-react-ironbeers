/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from "react";

export const LoadingContext = React.createContext();

export const isLoading = () => {
  const loadingState = useContext(LoadingContext);
  return loadingState.loading;
};

export const doneLoading = () => {
  const loadingState = useContext(LoadingContext);
  loadingState.setLoading(false);
  return loadingState.loading;
};

export const startLoading = () => {
  const loadingState = useContext(LoadingContext);
  loadingState.setLoading(true);
  return loadingState.loading;
};
