import React from "react";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/:id" element={<Home />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
