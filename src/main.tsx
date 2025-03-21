import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { Toaster } from "./components/ui/toaster.jsx"
import { BrowserRouter } from "react-router-dom";
import { ColorModeProvider } from "./components/ui/color-mode.jsx";
import { RouterProvider } from "./components/RouterProvider"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <RouterProvider />
            <ChakraProvider value={defaultSystem}>
                <ColorModeProvider>
                    <App />
                    <Toaster />
                </ColorModeProvider>
            </ChakraProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
