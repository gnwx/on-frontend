import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { PostContextProvider } from "./context/PostContext";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ChakraProvider>
        <PostContextProvider>
          <App />
        </PostContextProvider>
      </ChakraProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
