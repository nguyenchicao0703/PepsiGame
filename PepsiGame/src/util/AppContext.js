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
  const [randomImageScore, setRandomImageScore] = React.useState(0);
  const [randomImagePrize, setRandomImagePrize] = React.useState('');
  // Accumulate images
  const [pepsiCount, setPepsiCount] = useState(0);
  const [mirindaCount, setMirindaCount] = useState(0);
  const [sevenUpCount, setSevenUpCount] = useState(0);
  // Accumulate scores
  const [scoreCount, setScoreCount] = useState(0);
  // Modals
  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <AppContext.Provider
      value={{
        confirm, setConfirm,
        isModalVisible2, setisModalVisible2,
        randomImageScore, setRandomImageScore,
        randomImagePrize, setRandomImagePrize,
        pepsiCount, setPepsiCount,
        mirindaCount, setMirindaCount,
        sevenUpCount, setSevenUpCount,
        scoreCount, setScoreCount,
        modalVisible, setModalVisible
      }}>
      {children}
    </AppContext.Provider>
  );
}