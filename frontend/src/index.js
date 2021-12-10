import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";

import "mapbox-gl/dist/mapbox-gl.css";


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,

  document.getElementById("root")
);
