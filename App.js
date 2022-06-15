import React from "react";
import { AppRoutes } from "./src/routes/app.routes";

import ContextProvider from "./src/context";

export default function App() {
  console.disableYellowBox = true;

  return (
    <ContextProvider>
      <AppRoutes />
    </ContextProvider>
  );
}
