import { useReducer, useEffect } from "react";

function UseLocalStorageReducer(key, defaultVal, reducer) {
  // make a piece of state, based off of value in localStorage (or default)
  const [state, dispatch] = useReducer(reducer, defaultVal, () => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    } catch (error) {
      val = defaultVal;
    }
    return val;
  });

  // use useEffect to update localStorage when state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  //
  return [state, dispatch];
}

export default UseLocalStorageReducer;
