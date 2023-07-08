import React from 'react';
import { createContext, useState } from "react";

// When want to use repository, call usercontext (warehouse management).
export const AppContext = createContext();

// Create warehouse
export const AppContextProvider = (props) => {
  const { children } = props;
  /*---------- General usage data ----------*/
  // Modals
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  // Number phone
  const [mobile, setmobile] = useState('');
  const [confirm, setConfirm] = useState(null);
  // Random image
  const [randomImageScore, setRandomImageScore] = React.useState(0);
  const [randomImagePrize, setRandomImagePrize] = React.useState('');
  // Accumulate images
  const [pepsiCount, setPepsiCount] = useState(0);
  const [mirindaCount, setMirindaCount] = useState(0);
  const [sevenUpCount, setSevenUpCount] = useState(0);
  // Accumulate scores
  const [scoreCount, setScoreCount] = useState(0);
  // Turn
  const [turnDaily, setTurnDaily] = useState(0);
  const [turnConverted, setTurnConverted] = useState(0);
  const [titleTurn, setTitleTurn] = useState('');

  return (
    <AppContext.Provider
      value={{
        modalVisible, setModalVisible,
        modalVisible2, setModalVisible2,
        mobile, setmobile,
        confirm, setConfirm,
        randomImageScore, setRandomImageScore,
        randomImagePrize, setRandomImagePrize,
        pepsiCount, setPepsiCount,
        mirindaCount, setMirindaCount,
        sevenUpCount, setSevenUpCount,
        scoreCount, setScoreCount,
        turnDaily, setTurnDaily,
        turnConverted, setTurnConverted,
        titleTurn, setTitleTurn
      }}>
      {children}
    </AppContext.Provider>
  );
}