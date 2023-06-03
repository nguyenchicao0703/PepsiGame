import React from 'react';
import { createContext, useState } from "react";

// When want to use repository, call usercontext (warehouse management).
export const AppContext = createContext();

// Create warehouse
export const AppContextProvider = (props) => {
  const { children } = props;
  /*---------- General usage data ----------*/
  const [confirm, setConfirm] = useState(null);
  const [isModalVisible2, setisModalVisible2] = useState(false);
  // Random image
  const [randomImagePoint, setRandomImagePoint] = React.useState('');
  const [randomImagePrize, setRandomImagePrize] = React.useState('');
  // Storage Points
  const [storage, setStorage] = useState(0);
  // Accumulate Points
  const [point, setPoint] = useState(0);
  return (
    <AppContext.Provider
      value={{
        confirm, setConfirm,
        isModalVisible2, setisModalVisible2,
        randomImagePoint, setRandomImagePoint,
        randomImagePrize, setRandomImagePrize,
        storage, setStorage,
        point, setPoint,
      }}>
      {children}
    </AppContext.Provider>
  );
}