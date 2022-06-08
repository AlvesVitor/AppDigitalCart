import React from 'react';
import { AppRoutes } from "./src/routes/app.routes";

export default function App() {
  console.disableYellowBox = true;

  return (
    <AppRoutes />
  )
}