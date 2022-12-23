import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Routes from "./src/routes/route";
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
   <NavigationContainer>
      <Routes />
   </NavigationContainer>
  );
}
