import React, { useState, useEffect, useMemo } from "react";
// import axios from "axios";
// import { useHistory } from "react-router-dom";

import Header from "../components/Header";
import WeatherImage from "../components/WeatherImage";
import City from "../components/City";
const weatherKey = `TODO`; // Your API Key here

function Home() {
  return (
    <div className="flex flex-col h-screen bg-green-200">
      <City cityName="Singapore" temp="10°C" color="bg-pink-200" />
      <City cityName="Jakarta" temp="10°C" color="bg-blue-200" />
      <City cityName="Tokyo" temp="10°C" color="bg-red-200" />
    </div>
  );
}

export default Home;
